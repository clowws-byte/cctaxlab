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
  subtitle  text not null default 'Cheng & Co Taxation Sdn Bhd',
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

-- 7. Folders inside workspaces (any depth) ------------------------------------------
create table if not exists public.portal_folders (
  id          uuid primary key default gen_random_uuid(),
  hub_id      uuid not null references public.portal_hubs(id) on delete cascade,
  parent_id   uuid references public.portal_folders(id) on delete cascade,
  name        text not null,
  emoji       text not null default 'folder',
  access      text not null default 'everyone' check (access in ('everyone','admins','hidden')),
  sort        int  not null default 0,
  updated_at  timestamptz not null default now()
);
create index if not exists portal_folders_hub_idx on public.portal_folders(hub_id);
create index if not exists portal_folders_parent_idx on public.portal_folders(parent_id);
alter table public.portal_tools add column if not exists folder_id uuid references public.portal_folders(id) on delete cascade;
create index if not exists portal_tools_folder_idx on public.portal_tools(folder_id);

create or replace function public.portal_folder_open(f uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  with recursive chain as (
    select id, parent_id, access, 1 as depth from public.portal_folders where id = f
    union all
    select p.id, p.parent_id, p.access, c.depth + 1 from public.portal_folders p join chain c on p.id = c.parent_id where c.depth < 50
  )
  select exists (select 1 from chain) and not exists (select 1 from chain where access <> 'everyone');
$$;
revoke execute on function public.portal_folder_open(uuid) from anon, public;
grant  execute on function public.portal_folder_open(uuid) to authenticated;

alter table public.portal_folders enable row level security;
create policy "folders read" on public.portal_folders for select to authenticated using (
  public.portal_is_admin() or (public.portal_is_approved() and public.portal_hub_open(hub_id) and public.portal_folder_open(id)));
create policy "folders admin write" on public.portal_folders for all to authenticated
  using (public.portal_is_admin()) with check (public.portal_is_admin());

drop policy if exists "tools read" on public.portal_tools;
create policy "tools read" on public.portal_tools for select to authenticated using (
  public.portal_is_admin() or (
    public.portal_is_approved() and public.portal_hub_open(hub_id)
    and (folder_id is null or public.portal_folder_open(folder_id))
    and (access = 'everyone' or (access = 'selected' and public.portal_has_grant(id)))));

-- 8. Branches ------------------------------------------------------------------------
create table if not exists public.portal_branches (code text primary key, name text not null, sort int not null default 0);
insert into public.portal_branches(code, name, sort) values
 ('KN01','Kuantan',1),('KT01','Kuala Terengganu',2),('PG01','Penang',3),('TP01','Taiping',4),('IP01','Ipoh',5),
 ('HQ01','Headquarter',6),('HQ02','Headquarter',7),('HQ03','Headquarter',8),('CS01','Cheras Selatan',9),('PI01','Pandan Indah',10),
 ('KP01','Kepong',11),('NS01','Seremban 1',12),('NS02','Seremban 2',13),('LK01','Lukut',14),('MK01','Melaka',15),
 ('BP01','Batu Pahat',16),('JB01','Johor Bahru',17),('SB01','Sabah',18),('LB01','Labuan',19)
on conflict (code) do update set name = excluded.name, sort = excluded.sort;
alter table public.portal_branches enable row level security;
create policy "branches read" on public.portal_branches for select to anon, authenticated using (true);
create policy "branches admin write" on public.portal_branches for all to authenticated using (public.portal_is_admin()) with check (public.portal_is_admin());
alter table public.portal_profiles add column if not exists branch text references public.portal_branches(code) on update cascade on delete set null;
create index if not exists portal_profiles_branch_idx on public.portal_profiles(branch);
-- (portal_handle_new_user updated to store raw_user_meta_data->>'branch')

-- 9. What's new / updates -----------------------------------------------------------
create table if not exists public.portal_updates (
  id uuid primary key default gen_random_uuid(), title text not null, body text not null default '',
  kind text not null default 'new' check (kind in ('new','improved','fixed')),
  audience text not null default 'everyone' check (audience in ('everyone','admins')),
  released_at date not null default current_date, announce boolean not null default false, announced_at timestamptz,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
alter table public.portal_profiles add column if not exists updates_seen_at timestamptz;
alter table public.portal_updates enable row level security;
create policy "updates read" on public.portal_updates for select to authenticated using (
  public.portal_is_admin() or (public.portal_is_approved() and announce and audience = 'everyone'));
create policy "updates admin write" on public.portal_updates for all to authenticated using (public.portal_is_admin()) with check (public.portal_is_admin());
create or replace function public.portal_mark_updates_seen() returns timestamptz
language plpgsql security definer set search_path = '' as $$
declare t timestamptz := now();
begin update public.portal_profiles set updates_seen_at = t where id = (select auth.uid()); return t; end $$;
revoke execute on function public.portal_mark_updates_seen() from anon, public;
grant execute on function public.portal_mark_updates_seen() to authenticated;

-- =====================================================================
-- Tax Knowledge Library (library.html, in the CCT Library workspace)
-- Admins upload and tag; approved staff search and read.
-- =====================================================================
create table if not exists public.kb_documents (
  id           uuid primary key default gen_random_uuid(),
  title        text not null check (char_length(title) between 1 and 300),
  doc_type     text not null default 'Newsletter',
  issue_date   date,
  tax_types    text[] not null default '{}',
  topics       text[] not null default '{}',
  legislation  text[] not null default '{}',
  summary      text not null default '',
  body_text    text not null default '',
  file_path    text,
  file_name    text,
  file_type    text,
  file_size    bigint,
  status       text not null default 'published' check (status in ('draft','published')),
  created_by   uuid references public.portal_profiles(id) on delete set null default auth.uid(),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  fts          tsvector
);
create index if not exists kb_documents_fts_idx on public.kb_documents using gin (fts);
create index if not exists kb_documents_date_idx on public.kb_documents (issue_date desc nulls last);
create index if not exists kb_documents_created_by_idx on public.kb_documents (created_by);

create or replace function public.kb_documents_fts() returns trigger
language plpgsql set search_path = '' as $$
begin
  new.fts :=
      setweight(to_tsvector('english', coalesce(new.title,'')), 'A')
   || setweight(to_tsvector('english', array_to_string(new.tax_types,' ') || ' ' || array_to_string(new.topics,' ') || ' ' || array_to_string(new.legislation,' ') || ' ' || coalesce(new.doc_type,'')), 'B')
   || setweight(to_tsvector('english', coalesce(new.summary,'')), 'C')
   || setweight(to_tsvector('english', left(coalesce(new.body_text,''), 300000)), 'D');
  new.updated_at := now();
  return new;
end $$;
drop trigger if exists kb_documents_fts_trg on public.kb_documents;
create trigger kb_documents_fts_trg before insert or update on public.kb_documents
  for each row execute function public.kb_documents_fts();

alter table public.kb_documents enable row level security;
create policy "kb read" on public.kb_documents for select to authenticated
  using (public.portal_is_admin() or (public.portal_is_approved() and status = 'published'));
create policy "kb admin insert" on public.kb_documents for insert to authenticated with check (public.portal_is_admin());
create policy "kb admin update" on public.kb_documents for update to authenticated using (public.portal_is_admin()) with check (public.portal_is_admin());
create policy "kb admin delete" on public.kb_documents for delete to authenticated using (public.portal_is_admin());
revoke all on public.kb_documents from anon;

create or replace function public.kb_search(q text, lim int default 100)
returns table (id uuid, rank real, snippet text)
language sql stable security invoker set search_path = '' as $$
  with query as (select websearch_to_tsquery('english', q) as tq)
  select d.id,
         ts_rank_cd(d.fts, query.tq) as rank,
         ts_headline('english', left(d.summary || ' ' || d.body_text, 200000), query.tq,
                     'StartSel=<<,StopSel=>>,MaxWords=40,MinWords=15,MaxFragments=2,FragmentDelimiter= … ') as snippet
  from public.kb_documents d, query
  where d.fts @@ query.tq
  order by rank desc
  limit least(coalesce(lim,100), 200);
$$;
revoke execute on function public.kb_search(text,int) from anon, public;
grant execute on function public.kb_search(text,int) to authenticated;

insert into storage.buckets (id, name, public, file_size_limit)
values ('kb-files', 'kb-files', false, 52428800) on conflict (id) do nothing;
create policy "kb files read" on storage.objects for select to authenticated
  using (bucket_id = 'kb-files' and (public.portal_is_admin() or public.portal_is_approved()));
create policy "kb files admin insert" on storage.objects for insert to authenticated
  with check (bucket_id = 'kb-files' and public.portal_is_admin());
create policy "kb files admin update" on storage.objects for update to authenticated
  using (bucket_id = 'kb-files' and public.portal_is_admin()) with check (bucket_id = 'kb-files' and public.portal_is_admin());
create policy "kb files admin delete" on storage.objects for delete to authenticated
  using (bucket_id = 'kb-files' and public.portal_is_admin());

-- Library categories (e.g. CCT.NewsLetter); documents belong to one category
create table if not exists public.kb_categories (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) between 1 and 80),
  description text not null default '',
  sort        integer not null default 0,
  created_at  timestamptz not null default now()
);
alter table public.kb_categories enable row level security;
create policy "kbcat read" on public.kb_categories for select to authenticated
  using (public.portal_is_admin() or public.portal_is_approved());
create policy "kbcat admin write" on public.kb_categories for all to authenticated
  using (public.portal_is_admin()) with check (public.portal_is_admin());
revoke all on public.kb_categories from anon;
alter table public.kb_documents add column if not exists category_id uuid references public.kb_categories(id) on delete restrict;
create index if not exists kb_documents_category_idx on public.kb_documents (category_id);

-- A workspace can go straight into its first application (used by CCT Library)
alter table public.portal_hubs add column if not exists open_direct boolean not null default false;
