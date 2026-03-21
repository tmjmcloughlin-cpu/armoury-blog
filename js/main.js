/* ============================================================
   THE ARMOURY BLOG — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* --- Mobile nav toggle --- */
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- Active nav link --- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* --- Ticker duplication for seamless loop --- */
  const track = document.querySelector('.ticker-track');
  if (track) {
    const clone = track.cloneNode(true);
    track.parentElement.appendChild(clone);
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Lazy load images --- */
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
  }

  /* --- Reading progress bar (article pages) --- */
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled   = window.scrollY;
      const pct        = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(pct, 100) + '%';
    }, { passive: true });
  }

  /* --- Back to top button --- */
  const backTop = document.getElementById('back-to-top');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.style.opacity = window.scrollY > 400 ? '1' : '0';
      backTop.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
    }, { passive: true });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

})();
