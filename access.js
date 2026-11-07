/*!
 * CCTaxLab access helper
 * Lets an application check what the signed-in CCTaxLab user may do in it.
 *
 *   <script src="https://clowws-byte.github.io/cctaxlab/access.js"></script>
 *   <script>CCTaxLab.protect({ toolId: 'APPLICATION-ID-FROM-ADMIN' });</script>
 *
 * protect() shows a "View only" banner and locks inputs and save/add/delete buttons
 * for users whose level is View only. For finer control:
 *
 *   const a = await CCTaxLab.getAccess({ toolId: '...' });
 *   // a.signedIn, a.allowed, a.level ('view' | 'edit'), a.canEdit, a.user {email, name, branch, isAdmin}
 *
 * Mark elements yourself if you prefer:  data-cctl-edit  (always locked when view-only)
 *                                         data-cctl-allow (never locked)
 */
(function () {
  'use strict';
  var URL_ = 'https://orszbsqshrzhjgtlihzc.supabase.co';
  var KEY_ = 'sb_publishable_by4wqCu53U9son8u0kp1qA_Uij0ysHW';
  var PORTAL = 'https://clowws-byte.github.io/cctaxlab/';
  var client = null, loading = null;

  function loadLib() {
    if (window.supabase && window.supabase.createClient) return Promise.resolve();
    if (loading) return loading;
    loading = new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
      s.onload = res; s.onerror = function () { rej(new Error('Could not load sign-in library')); };
      document.head.appendChild(s);
    });
    return loading;
  }
  function getClient() {
    return loadLib().then(function () {
      if (!client) client = window.supabase.createClient(URL_, KEY_, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } });
      return client;
    });
  }

  function getAccess(opts) {
    opts = opts || {};
    var out = { signedIn: false, allowed: false, level: null, canEdit: false, user: null, tool: null, error: null };
    return getClient().then(function (sb) {
      return sb.auth.getSession().then(function (r) {
        if (!r.data || !r.data.session) return out;
        out.signedIn = true;
        var args = opts.toolId ? { p_tool: opts.toolId } : { p_url: opts.url || (location.origin + location.pathname) };
        return sb.rpc('portal_my_access', args).then(function (res) {
          if (res.error) { out.error = res.error.message; return out; }
          var row = (res.data || [])[0];
          if (!row) return out;
          out.allowed = true; out.level = row.level; out.canEdit = !!row.can_edit;
          out.tool = { id: row.tool_id, name: row.tool_name };
          out.user = { email: row.email, name: row.full_name, branch: row.branch, isAdmin: !!row.is_admin };
          return out;
        });
      });
    }).catch(function (e) { out.error = e.message; return out; });
  }

  var EDIT_WORDS = /\b(save|submit|add|new|create|delete|remove|update|edit|upload|import|approve|reject|confirm|assign|post|send|apply|clear|reset)\b/i;
  var observer = null;
  function lockable(el) {
    if (el.closest('[data-cctl-allow]') || el.closest('#cctl-banner')) return false;
    if (el.hasAttribute('data-cctl-edit')) return true;
    var tag = el.tagName;
    if (tag === 'INPUT') { var t = (el.type || '').toLowerCase(); return t !== 'search' && t !== 'hidden' && !el.hasAttribute('data-cctl-filter'); }
    if (tag === 'TEXTAREA' || tag === 'SELECT') return !el.hasAttribute('data-cctl-filter');
    if (tag === 'BUTTON' || (tag === 'A' && el.getAttribute('role') === 'button')) {
      if ((el.type || '').toLowerCase() === 'submit' && el.form) return true;
      var title = el.hasAttribute('data-cctl-locked') ? '' : (el.title || '');
      return EDIT_WORDS.test((el.textContent || '') + ' ' + title + ' ' + (el.getAttribute('aria-label') || ''));
    }
    return false;
  }
  function lock(root) {
    (root.querySelectorAll ? root.querySelectorAll('input,textarea,select,button,a[role=button],[data-cctl-edit],[contenteditable=true]') : []).forEach(function (el) {
      if (el.isContentEditable && !el.closest('[data-cctl-allow]')) { el.setAttribute('contenteditable', 'false'); el.setAttribute('data-cctl-locked', ''); return; }
      if (!lockable(el)) return;
      if ('disabled' in el) el.disabled = true; else el.setAttribute('aria-disabled', 'true');
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.readOnly = true;
      el.setAttribute('data-cctl-locked', ''); el.title = 'View only: you do not have edit rights in CCTaxLab';
    });
  }
  function banner(text, tone) {
    if (document.getElementById('cctl-banner')) return;
    var b = document.createElement('div'); b.id = 'cctl-banner';
    b.setAttribute('role', 'status');
    b.style.cssText = 'position:sticky;top:0;z-index:2147483000;display:flex;gap:10px;align-items:center;justify-content:center;padding:8px 14px;font:600 13px/1.4 system-ui,-apple-system,Segoe UI,sans-serif;color:' + (tone === 'warn' ? '#2a1a00' : '#04142b') + ';background:' + (tone === 'warn' ? '#f2c96d' : '#6fd3ff') + ';box-shadow:0 2px 10px rgba(0,0,0,.25)';
    b.innerHTML = text;
    document.body.insertBefore(b, document.body.firstChild);
  }
  function applyViewOnly(info) {
    document.documentElement.classList.add('cctl-view-only');
    banner('&#128065;&nbsp; View only' + (info && info.tool ? ' &middot; ' + escapeHtml(info.tool.name) : '') + ' &mdash; you can view but not make changes. Ask your CCTaxLab administrator for edit rights.');
    lock(document);
    document.addEventListener('submit', function (e) { if (!e.target.closest('[data-cctl-allow]')) { e.preventDefault(); e.stopPropagation(); } }, true);
    if (!observer) { observer = new MutationObserver(function (m) { m.forEach(function (r) { r.addedNodes.forEach(function (n) { if (n.nodeType === 1) { if (lockable(n)) lock(n.parentNode || document); else lock(n); } }); }); }); observer.observe(document.body, { childList: true, subtree: true }); }
  }
  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); }

  function protect(opts) {
    opts = opts || {};
    var run = function () {
      return getAccess(opts).then(function (a) {
        if (a.allowed && a.level === 'view') applyViewOnly(a);
        else if (opts.requireAccess && a.signedIn && !a.allowed) banner('You do not have access to this application in CCTaxLab.', 'warn');
        else if (opts.requireAccess && !a.signedIn) banner('Please <a href="' + PORTAL + '" style="color:inherit;text-decoration:underline">sign in to CCTaxLab</a> first.', 'warn');
        if (typeof opts.onReady === 'function') try { opts.onReady(a); } catch (e) {}
        return a;
      });
    };
    if (document.readyState === 'loading') return new Promise(function (res) { document.addEventListener('DOMContentLoaded', function () { run().then(res); }); });
    return run();
  }

  window.CCTaxLab = { getAccess: getAccess, protect: protect, lock: function () { lock(document); } };
})();
