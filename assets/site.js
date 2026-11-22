(function () {
  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ── Spotlight: follows the pointer; drifts on its own on touch ─── */
  var ground = document.querySelector('.ground');
  function place(x, y) { ground.style.setProperty('--x', x + 'px'); ground.style.setProperty('--y', y + 'px'); }
  var last = 0;
  window.addEventListener('pointermove', function (e) {
    if (e.pointerType === 'touch') return;
    last = Date.now();
    place(e.clientX, e.clientY);
  }, { passive: true });
  if (!reduced) {
    var t = 0;
    (function drift() {
      if (Date.now() - last > 2500) {
        t += 0.006;
        place(innerWidth * (0.5 + 0.32 * Math.cos(t)), innerHeight * (0.42 + 0.25 * Math.sin(t * 1.3)));
      }
      requestAnimationFrame(drift);
    })();
  }

  /* ── Rows ink in as they reach the screen (they start visible) ──── */
  var rows = Array.prototype.slice.call(document.querySelectorAll('.e'));
  if (!reduced && 'IntersectionObserver' in window) {
    var batch = 0, timer = null;
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.style.setProperty('--i', batch++);
        en.target.classList.add('in');
        rio.unobserve(en.target);
      });
      clearTimeout(timer); timer = setTimeout(function () { batch = 0; }, 120);
    }, { rootMargin: '0px 0px -8% 0px' });
    rows.forEach(function (r) { rio.observe(r); });
  }

  /* ── Section menu follows the scroll (laptop) ─────────────────── */
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  var secs = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  function current() {
    var y = window.scrollY + innerHeight * 0.3, cur = secs[0];
    secs.forEach(function (s) { if (s.offsetTop <= y) cur = s; });
    if (innerHeight + window.scrollY >= document.body.scrollHeight - 4) cur = secs[secs.length - 1];
    links.forEach(function (a, i) {
      var on = secs[i] === cur;
      a.classList.toggle('on', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', current, { passive: true });
  current();

  /* ── Display preferences: theme and text size ─────────────────── */
  var themeBtn = document.getElementById('theme');
  function themeLabel() {
    var light = root.getAttribute('data-theme') === 'light';
    themeBtn.textContent = light ? 'Dark theme' : 'Light theme';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', light ? '#eef1f6' : '#070d1c');
  }
  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    store.set('theme', next);
    themeLabel();
  });
  themeLabel();

  var STEPS = [14, 16, 18, 20, 22];
  var down = document.getElementById('fsDown'), up = document.getElementById('fsUp');
  var i = STEPS.indexOf(parseInt(store.get('fs'), 10)); if (i < 0) i = 1;
  function size(n) {
    i = Math.max(0, Math.min(STEPS.length - 1, n));
    root.style.setProperty('--fs', STEPS[i] + 'px');
    store.set('fs', STEPS[i]);
    down.disabled = i === 0; up.disabled = i === STEPS.length - 1;
    current();
  }
  down.addEventListener('click', function () { size(i - 1); });
  up.addEventListener('click', function () { size(i + 1); });
  down.disabled = i === 0; up.disabled = i === STEPS.length - 1;
})();
