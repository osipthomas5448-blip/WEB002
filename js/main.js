/* ============================================================
   ProfitTheory — Main JavaScript
   ============================================================ */

// ── Sticky Header ──────────────────────────────────────────
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── Active Nav Link ────────────────────────────────────────
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ── Mobile Menu ────────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
if (hamburger && mobileNav) {
  // Initialize aria-expanded
  hamburger.setAttribute('aria-expanded', 'false');
  
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', !isOpen);
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    // Trap focus if menu is open
    if (!isOpen) {
      const focusableElements = mobileNav.querySelectorAll('a, button');
      if (focusableElements.length) focusableElements[0].focus();
    }
  });
  mobileNav.addEventListener('click', e => {
    if (e.target === mobileNav) {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.focus();
    }
  });
}

// ── Scroll To Top ──────────────────────────────────────────
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Cookie Consent ─────────────────────────────────────────
(function initCookieBanner() {
  const banner = document.querySelector('.cookie-banner');
  if (!banner) return;
  if (!localStorage.getItem('pt_cookie_consent')) {
    setTimeout(() => banner.classList.add('visible'), 800);
  }
  document.querySelector('.cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('pt_cookie_consent', 'accepted');
    banner.classList.remove('visible');
  });
  document.querySelector('.cookie-decline')?.addEventListener('click', () => {
    localStorage.setItem('pt_cookie_consent', 'declined');
    banner.classList.remove('visible');
  });
})();

// ── Popup CTA Modal ────────────────────────────────────────
(function initModal() {
  const overlay = document.querySelector('.modal-overlay');
  if (!overlay) return;
  const closeBtn = overlay.querySelector('.modal-close');
  const modalBox = overlay.querySelector('.modal-box');
  
  // Add ARIA attributes
  modalBox.setAttribute('role', 'dialog');
  modalBox.setAttribute('aria-modal', 'true');
  modalBox.setAttribute('aria-labelledby', 'modal-title');
  const title = modalBox.querySelector('.modal-header h3');
  if (title) title.id = 'modal-title';

  function openModal() { 
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Set focus trap
    const focusableElements = modalBox.querySelectorAll('input, button, textarea, select, [tabindex]');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    if (firstElement) firstElement.focus();
    // Trap focus within modal
    modalBox.addEventListener('keydown', trapFocus);
  }
  
  function closeModal() { 
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    modalBox.removeEventListener('keydown', trapFocus);
    document.querySelector('[data-modal-open]')?.focus();
  }
  
  function trapFocus(e) {
    const focusableElements = modalBox.querySelectorAll('input, button, textarea, select, a[href]');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  }

  closeBtn?.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal(); });

  // Trigger on scroll (once per session)
  if (!sessionStorage.getItem('pt_popup_shown')) {
    const trigger = () => {
      if (window.scrollY > 600) {
        openModal();
        sessionStorage.setItem('pt_popup_shown', '1');
        window.removeEventListener('scroll', trigger);
      }
    };
    window.addEventListener('scroll', trigger);
  }

  // CTA buttons
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    });
  });
})();

// ── Lazy Load Images ───────────────────────────────────────
(function lazyLoad() {
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const img = e.target;
          if (img.dataset.src) { img.src = img.dataset.src; delete img.dataset.src; }
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    imgs.forEach(img => obs.observe(img));
  }
})();

// ── Toast Notification ─────────────────────────────────────
function showToast(msg, type = '') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = 'toast ' + type;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ── Newsletter Forms ───────────────────────────────────────
document.querySelectorAll('.newsletter-form, .newsletter-widget-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]')?.value;
    if (!email) return;
    showToast('✓ You\'re subscribed! Check your inbox.', 'success');
    form.reset();
  });
});

// ── Contact Form ───────────────────────────────────────────
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const consent = this.querySelector('.consent-check');
  if (consent && !consent.checked) {
    showToast('Please agree to our Privacy Policy to continue.', '');
    return;
  }
  showToast('✓ Message sent! We\'ll reply within 24 hours.', 'success');
  this.reset();
});

// ── Modal Form ─────────────────────────────────────────────
document.querySelector('.modal-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const consent = this.querySelector('.consent-check');
  if (consent && !consent.checked) {
    showToast('Please agree to our Privacy Policy to continue.', '');
    return;
  }
  showToast('✓ You\'re in! Welcome to ProfitTheory.', 'success');
  this.reset();
  document.querySelector('.modal-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
});

// ── Smooth fade-in on scroll ───────────────────────────────
(function initFadeIn() {
  const elements = document.querySelectorAll('.blog-card, .sidebar-widget, .value-card, .stat-item, .hero-side-card');
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.animationDelay = (i * 0.05) + 's';
        e.target.classList.add('fade-in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    obs.observe(el);
  });
})();

// Add fade-in class styles dynamically
const fadeStyle = document.createElement('style');
fadeStyle.textContent = '.fade-in { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(fadeStyle);
