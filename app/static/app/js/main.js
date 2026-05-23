/* ══════════════════════════════════════════
   FC BARCELONA 2015 — MAIN.JS
   ══════════════════════════════════════════ */

/* ── NAVBAR SCROLL ── */
(function () {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  const btn = document.getElementById('menuBtn');
  const mob = document.getElementById('navMobile');
  if (btn && mob) {
    btn.addEventListener('click', () => mob.classList.toggle('open'));
  }
})();

/* ── SCROLL REVEAL ── */
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
