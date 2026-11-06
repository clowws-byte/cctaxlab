-- CCTaxLab: database setup
-- Staff sign in with email (as user ID) + password. New requests wait for admin approval.

-- 1. People ---------------------------------------------------------------------
create table if not exists public.portal_profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  email       text not null,
  full_name   text,
  status      text not null default 'pending' check (status in ('pending','approved','blocked')),
  is_admin    boolean not null default false,
  created_at  timestamptz not null default now()
);

-- Emails approved automatically when they request access
create table if not exists public.portal_preapproved (
  email     text primary key,
  is_admin  boolean not null default false
);
insert into public.portal_preapproved(email, is_admin) values ('clowws@gmail.com', true)
on conflict (email) do update set is_admin = true;

-- 2. Workspaces and applications ------------------------------------------------
create table if not exists public.portal_hubs (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  emoji       text not null default 'layers',
  color       text not null default '#00aeef',
  access      text not null default 'everyone' check (access in ('everyone','admins','hidden')),
  sort        int  not null default 0,
  updated_at  timestamptz not null default now()
);

create table if not exists public.portal_tools (
  id          uuid primary key default gen_random_uuid(),
  hub_id      uuid not null references public.portal_hubs(id) on delete cascade,
  name        text not null,
  emoji       text not null default 'file',
  url         text not null default '',
  description text not null default '',
  access      text not null default 'everyone' check (access in ('everyone','selected','admins','hidden')),
  sort        int  not null default 0,
  updated_at  timestamptz not null default now()
);
create index if not exists portal_tools_hub_idx on public.portal_tools(hub_id);

-- Which users can see an application set to "Selected users"
create table if not exists public.portal_tool_access (
  tool_id  uuid not null references public.portal_tools(id) on delete cascade,
  user_id  uuid not null references public.portal_profiles(id) on delete cascade,
  primary key (tool_id, user_id)
);
create index if not exists portal_tool_access_user_idx on public.portal_tool_access(user_id);

create table if not exists public.portal_settings (
  id        int primary key default 1 check (id = 1),
  title     text not null default 'CCTaxLab',
  subtitle  text not null default 'All our tax applications in one place.',
  theme     text not null default 'blue',
  animation text not null default 'calm'
);
insert into public.portal_settings(id) values (1) on conflict do nothing;

-- 3. Helper checks ----------------------------------------------------------------
create or replace function public.portal_is_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.portal_profiles
                 where id = (select auth.uid()) and is_admin and status = 'approved');
$$;

create or replace function public.portal_is_approved() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.portal_profiles
                 where id = (select auth.uid()) and status = 'approved');
$$;

create or replace function public.portal_hub_open(h uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.portal_hubs where id = h and access = 'everyone');
$$;

create or replace function public.portal_has_grant(t uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.portal_tool_access where tool_id = t and user_id = (select auth.uid()));
$$;

-- Users may change only their own display name
create or replace function public.portal_update_my_name(new_name text) returns void
language plpgsql security definer set search_path = '' as $$
begin
  update public.portal_profiles set full_name = left(trim(new_name), 80) where id = (select auth.uid());
end $$;

-- 4. Profile created automatically when someone requests access ------------------
create or replace function public.portal_handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
declare pa public.portal_preapproved;
begin
  select * into pa from public.portal_preapproved where lower(email) = lower(new.email);
  insert into public.portal_profiles (id, email, full_name, status, is_admin)
  values (new.id, lower(new.email), nullif(new.raw_user_meta_data->>'full_name',''),
          case when pa.email is not null then 'approved' else 'pending' end, coalesce(pa.is_admin, false))
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists portal_on_auth_user_created on auth.users;
create trigger portal_on_auth_user_created
  after insert on auth.users for each row execute function public.portal_handle_new_user();

-- 5. Row level security -------------------------------------------------------------
alter table public.portal_profiles    enable row level security;
alter table public.portal_preapproved enable row level security;
alter table public.portal_hubs        enable row level security;
alter table public.portal_tools       enable row level security;
alter table public.portal_tool_access enable row level security;
alter table public.portal_settings    enable row level security;

create policy "profiles read own or admin" on public.portal_profiles
  for select to authenticated using (id = (select auth.uid()) or public.portal_is_admin());
create policy "profiles admin update" on public.portal_profiles
  for update to authenticated using (public.portal_is_admin()) with check (public.portal_is_admin());

create policy "preapproved admin" on public.portal_preapproved
  for all to authenticated using (public.portal_is_admin()) with check (public.portal_is_admin());

create policy "hubs read" on public.portal_hubs
  for select to authenticated using (public.portal_is_admin() or (public.portal_is_approved() and access = 'everyone'));
create policy "hubs admin write" on public.portal_hubs
  for all to authenticated using (public.portal_is_admin()) with check (public.portal_is_admin());

create policy "tools read" on public.portal_tools
  for select to authenticated using (
    public.portal_is_admin() or (
      public.portal_is_approved() and public.portal_hub_open(hub_id) and
      (access = 'everyone' or (access = 'selected' and public.portal_has_grant(id)))));
create policy "tools admin write" on public.portal_tools
  for all to authenticated using (public.portal_is_admin()) with check (public.portal_is_admin());

create policy "grants read own or admin" on public.portal_tool_access
  for select to authenticated using (user_id = (select auth.uid()) or public.portal_is_admin());
create policy "grants admin write" on public.portal_tool_access
  for all to authenticated using (public.portal_is_admin()) with check (public.portal_is_admin());

-- settings (name, colours) are public so the sign-in page can use the chosen look
create policy "settings read" on public.portal_settings
  for select to anon, authenticated using (true);
create policy "settings admin write" on public.portal_settings
  for update to authenticated using (public.portal_is_admin()) with check (public.portal_is_admin());

revoke execute on function public.portal_is_admin()          from anon, public;
revoke execute on function public.portal_is_approved()       from anon, public;
revoke execute on function public.portal_hub_open(uuid)      from anon, public;
revoke execute on function public.portal_has_grant(uuid)     from anon, public;
revoke execute on function public.portal_update_my_name(text) from anon, public;
grant  execute on function public.portal_is_admin()          to authenticated;
grant  execute on function public.portal_is_approved()       to authenticated;
grant  execute on function public.portal_hub_open(uuid)      to authenticated;
grant  execute on function public.portal_has_grant(uuid)     to authenticated;
grant  execute on function public.portal_update_my_name(text) to authenticated;
revoke execute on function public.portal_handle_new_user()   from anon, authenticated, public;

-- 6. Starter workspaces ------------------------------------------------------------
insert into public.portal_hubs (name, emoji, color, sort, access)
select * from (values ('Corporate Tax','calculator','#00aeef',0,'everyone'), ('Transfer Pricing','globe','#5b8def',1,'everyone'), ('Administration','building','#4fd1c5',2,'admins')) v
where not exists (select 1 from public.portal_hubs);
