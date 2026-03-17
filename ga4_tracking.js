/**
 * GA4 Custom Events — francescaetnom.com
 * Measurement ID: G-1M28K8V49L
 *
 * INSTALLAZIONE:
 * Incolla questo script in FONDO a ogni pagina HTML, PRIMA del </body>
 * e DOPO lo snippet gtag.js già presente.
 *
 * FILE DA AGGIORNARE:
 *   - index.html          → Sezione A + B + C + D + E + F
 *   - italo-ga4-audit.html → Sezione G
 *   - yoyo-case-study.html → Sezione H
 */

/* ─────────────────────────────────────────────
   UTILITY
───────────────────────────────────────────── */
function gaSend(eventName, params) {
  if (typeof gtag !== 'function') return;
  gtag('event', eventName, params);
}

/* ─────────────────────────────────────────────
   A. SOCIAL & OUTBOUND LINKS  (index.html)
   - LinkedIn, GitHub, Instagram dalla sidebar
   - GitHub dai portfolio cards
───────────────────────────────────────────── */
function initSocialTracking() {
  const socialMap = [
    { selector: 'a[href*="linkedin.com"]',  platform: 'linkedin' },
    { selector: 'a[href*="github.com"]',    platform: 'github'   },
    { selector: 'a[href*="instagram.com"]', platform: 'instagram' },
  ];

  socialMap.forEach(({ selector, platform }) => {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('click', () => {
        gaSend('social_click', {
          platform:   platform,
          link_url:   el.href,
          location:   el.closest('#about-sidebar') ? 'sidebar' : 'portfolio_card',
        });
      });
    });
  });
}

/* ─────────────────────────────────────────────
   B. CV DOWNLOAD  (index.html)
   - Bottone hero + sidebar
───────────────────────────────────────────── */
function initCVDownload() {
  document.querySelectorAll('a[download]').forEach(el => {
    el.addEventListener('click', () => {
      gaSend('cv_download', {
        file_name: el.getAttribute('download') || 'CV',
        location:  el.closest('#about-sidebar') ? 'sidebar' : 'hero',
      });
    });
  });
}

/* ─────────────────────────────────────────────
   C. SIDEBAR — apertura + visualizzazione foto
   (index.html)
───────────────────────────────────────────── */
function initSidebarTracking() {
  // Apertura sidebar
  const trigger = document.getElementById('sidebar-trigger');
  if (trigger) {
    trigger.addEventListener('click', () => {
      gaSend('sidebar_open', { trigger: 'nav_button' });
    });
  }

  // Foto profilo — IntersectionObserver sulla .avatar-img
  const avatar = document.querySelector('.avatar-img');
  if (avatar) {
    let photoSeen = false;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !photoSeen) {
          photoSeen = true;
          gaSend('profile_photo_viewed', { location: 'sidebar' });
          obs.disconnect();
        }
      });
    }, { threshold: 0.8 });
    obs.observe(avatar);
  }
}

/* ─────────────────────────────────────────────
   D. PILLAR CARDS — click espandi/chiudi
   (index.html — sezione #approach)
───────────────────────────────────────────── */
function initPillarTracking() {
  document.querySelectorAll('.pillar-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3')?.innerText?.trim() || 'unknown';
      const isExpanded = card.classList.contains('open') || card.classList.contains('expanded');
      gaSend('pillar_card_click', {
        card_title: title,
        action:     isExpanded ? 'collapse' : 'expand',
      });
    });
  });
}

/* ─────────────────────────────────────────────
   E. PORTFOLIO CARDS — click link progetti
   (index.html — sezione #portfolio)
   - GitHub SQL card
   - Italo case study
   - YoYo case study
   - Dashboard (Power BI card)
───────────────────────────────────────────── */
function initPortfolioTracking() {
  const linkMap = [
    { selector: 'a[href="italo-ga4-audit.html"]', project: 'italo',    link_type: 'case_study' },
    { selector: 'a[href="yoyo-case-study.html"]',  project: 'yoyo',     link_type: 'case_study' },
    { selector: '.cs-card a[href*="github.com"]',  project: 'sql_hvc',  link_type: 'github'     },
  ];

  linkMap.forEach(({ selector, project, link_type }) => {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('click', () => {
        gaSend('portfolio_link_click', {
          project:   project,
          link_type: link_type,
          link_url:  el.href,
        });
      });
    });
  });

  // Dashboard / Power BI card (href="#" al momento — si aggiorna quando hai il link)
  document.querySelectorAll('.cs-card .cs-link[href="#"]').forEach(el => {
    el.addEventListener('click', () => {
      gaSend('portfolio_link_click', {
        project:   'powerbi_dashboard',
        link_type: 'dashboard',
        link_url:  'placeholder',
      });
    });
  });
}

/* ─────────────────────────────────────────────
   F. CERTIFICAZIONI — flip card click
   (index.html — sezione #certifications)
───────────────────────────────────────────── */
function initCertTracking() {
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      const certName = card.querySelector('.cert-front-title')?.innerText?.trim() || 'unknown';
      gaSend('certification_flip', { cert_name: certName });
    });
  });

  // Click su "View Certificate" / "Verify Credential"
  document.querySelectorAll('.back-verify').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation(); // evita doppio fire con flip
      const certName = el.closest('.flip-card')?.querySelector('.cert-front-title')?.innerText?.trim() || 'unknown';
      gaSend('certification_verify_click', {
        cert_name: certName,
        link_url:  el.href,
      });
    });
  });
}

/* ─────────────────────────────────────────────
   G. ITALO PAGE — accordion + tab filter
   (italo-ga4-audit.html)
───────────────────────────────────────────── */
function initItaloTracking() {
  // Accordion pillars (04 — Strategic Logic)
  document.querySelectorAll('.accordion .acc-header, .accordion [data-acc], .accordion li').forEach(el => {
    el.addEventListener('click', () => {
      const title = el.querySelector('strong, span, h4')?.innerText?.trim()
                 || el.innerText?.trim()?.substring(0, 60)
                 || 'unknown';
      gaSend('italo_accordion_click', { section_title: title });
    });
  });

  // Filtro eventi — click sui tab della tabella eventi
  document.querySelectorAll('.filter-btn, [data-filter], .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      gaSend('italo_events_filter', {
        filter_value: btn.dataset.filter || btn.innerText?.trim(),
      });
    });
  });
}

/* ─────────────────────────────────────────────
   H. YOYO PAGE — tab funnel + persona cards + accordion
   (yoyo-case-study.html)
───────────────────────────────────────────── */
function initYoYoTracking() {
  // Tab funnel (Awareness / Acquisition / Activation…)
  document.querySelectorAll('.funnel-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      gaSend('yoyo_funnel_tab_click', {
        tab_name: tab.innerText?.trim(),
      });
    });
  });

  // Persona cards — espandi/chiudi
  document.querySelectorAll('.persona-card').forEach(card => {
    card.addEventListener('click', () => {
      const name = card.querySelector('h4, .persona-name, strong')?.innerText?.trim() || 'unknown';
      const isOpen = card.classList.contains('open');
      gaSend('yoyo_persona_card_click', {
        persona_name: name,
        action:       isOpen ? 'collapse' : 'expand',
      });
    });
  });

  // Accordion sezioni (Strategic Channels ecc.)
  document.querySelectorAll('.accordion .acc-header, .accordion [data-acc]').forEach(el => {
    el.addEventListener('click', () => {
      const title = el.querySelector('strong, span')?.innerText?.trim()
                 || el.innerText?.trim()?.substring(0, 60)
                 || 'unknown';
      gaSend('yoyo_accordion_click', { section_title: title });
    });
  });

  // Back to portfolio
  document.querySelectorAll('a[href="index.html#portfolio"], .nav-back').forEach(el => {
    el.addEventListener('click', () => {
      gaSend('case_study_nav', {
        action:    'back_to_portfolio',
        from_page: 'yoyo',
      });
    });
  });

  // Cross-link Italo
  document.querySelectorAll('a[href="italo-ga4-audit.html"]').forEach(el => {
    el.addEventListener('click', () => {
      gaSend('case_study_nav', {
        action:    'cross_link',
        from_page: 'yoyo',
        to_page:   'italo',
      });
    });
  });
}

/* ─────────────────────────────────────────────
   I. TIME ON PAGE — invia ogni 30 sec (max 5 min)
   Valido per tutte le pagine
───────────────────────────────────────────── */
function initTimeTracking() {
  const pageName = document.title || window.location.pathname;
  let seconds = 0;
  const MAX = 300; // 5 minuti
  const interval = setInterval(() => {
    seconds += 30;
    gaSend('time_on_page', {
      page_title:    pageName,
      seconds_spent: seconds,
    });
    if (seconds >= MAX) clearInterval(interval);
  }, 30000);
}

/* ─────────────────────────────────────────────
   INIT — rileva su quale pagina siamo
   e lancia solo i tracker pertinenti
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // Time on page — tutte le pagine
  initTimeTracking();

  if (path.includes('italo-ga4-audit')) {
    initItaloTracking();
    return; // nessun altro init necessario
  }

  if (path.includes('yoyo-case-study')) {
    initYoYoTracking();
    return;
  }

  // index.html (default)
  initSocialTracking();
  initCVDownload();
  initSidebarTracking();
  initPillarTracking();
  initPortfolioTracking();
  initCertTracking();
});