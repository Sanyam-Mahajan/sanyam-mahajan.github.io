(function () {
    var root = document.documentElement;
    var tg = document.getElementById('tg');
    var STEPS = [15, 16, 17, 19, 21];
    var store = {
      get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
      set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
    };

    /* ── Theme: follow the system, unless the visitor overrides ───── */
    function isDark() {
      var t = root.getAttribute('data-theme');
      if (t) return t === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    function label() {
      var dark = isDark();
      tg.textContent = dark ? 'Light' : 'Dark';
      tg.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    var saved = store.get('theme');
    if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
    label();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', label);
    tg.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      store.set('theme', next);
      label();
    });

    /* ── Text size ────────────────────────────────────────────────── */
    var fsDown = document.getElementById('fsDown'), fsUp = document.getElementById('fsUp');
    var idx = STEPS.indexOf(parseInt(store.get('fs'), 10));
    function size(i) {
      idx = Math.max(0, Math.min(STEPS.length - 1, i));
      root.style.setProperty('--fs', STEPS[idx] + 'px');
      store.set('fs', STEPS[idx]);
      fsDown.disabled = idx === 0;
      fsUp.disabled = idx === STEPS.length - 1;
    }
    if (idx >= 0) size(idx);
    fsDown.addEventListener('click', function () { size(idx < 0 ? 1 : idx - 1); });
    fsUp.addEventListener('click', function () { size(idx < 0 ? 3 : idx + 1); });

    /* ── Current section ──────────────────────────────────────────── */
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
    var targets = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
    var seen = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { seen[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0; });
      var best = null, bestVal = 0;
      targets.forEach(function (t) { if (t && (seen[t.id] || 0) > bestVal) { bestVal = seen[t.id]; best = t.id; } });
      links.forEach(function (a) {
        a.classList.toggle('here', best !== null && a.getAttribute('href') === '#' + best);
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: [0, .25, .5, 1] });
    targets.forEach(function (t) { if (t) io.observe(t); });

    /* ── the rail: fade whichever side still has more, and keep up ── */
    var rail = document.querySelector('.nav-links');
    function fades() {
      var more = rail.scrollWidth - rail.clientWidth;
      var shell = rail.parentElement;
      shell.classList.toggle('fade-l', rail.scrollLeft > 2);
      shell.classList.toggle('fade-r', more > 2 && rail.scrollLeft < more - 2);
    }
    rail.addEventListener('scroll', fades, { passive: true });
    window.addEventListener('resize', fades);
    fades();

    var follow = null;
    function reveal() {
      var a = rail.querySelector('a.here');
      if (!a) return;
      var lo = a.offsetLeft - rail.offsetLeft;
      var hi = lo + a.offsetWidth;
      if (lo < rail.scrollLeft + 8) rail.scrollLeft = lo - 8;
      else if (hi > rail.scrollLeft + rail.clientWidth - 8) rail.scrollLeft = hi - rail.clientWidth + 8;
    }
    new MutationObserver(function () {
      clearTimeout(follow); follow = setTimeout(reveal, 60);
    }).observe(rail, { attributes: true, subtree: true, attributeFilter: ['class'] });
  })();
