/* ===== PORTFOLIO — OPTIMIZED MAIN SCRIPT ===== */

/* ─────────────────────────────────
   0. WAIT FOR DOM
───────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-ready');
  initLoader();
  initTheme();
  initNav();
  initWebGL();
  initReveal();
  initContact();
  initCursor();
  initParallaxStats();
  initGlassEffects();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ─────────────────────────────────
   1. LOADER
───────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('loader');
  const bar = document.querySelector('.loader-line');
  const count = document.getElementById('loaderCount');
  let progress = 0;
  let rafId;

  document.body.style.overflow = 'hidden';

  // Use requestAnimationFrame for smoother progress
  let lastTime = 0;
  function tick(timestamp) {
    const delta = timestamp - lastTime;
    if (delta > 90) {           // ~11 fps updates to match original feel
      lastTime = timestamp;
      progress += Math.random() * 18;
      if (progress >= 100) {
        progress = 100;
        if (bar) bar.style.width = '100%';
        if (count) count.textContent = '100';
        setTimeout(done, 380);
        return;
      }
      if (bar) bar.style.width = progress + '%';
      if (count) count.textContent = String(Math.floor(progress)).padStart(2, '0');
    }
    rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);

  function done() {
    cancelAnimationFrame(rafId);
    loader.classList.add('out');
    document.body.style.overflow = '';
    revealHero();
  }
}

function revealHero() {
  if (typeof gsap === 'undefined') return;

  gsap.timeline({ defaults: { ease: 'expo.out' } })
    .from('#nav', { y: -30, opacity: 0, duration: 1.0 })
    .from('.hero-name', { y: 120, skewY: 6, opacity: 0, duration: 1.4, stagger: 0.08 }, '-=0.8')
    .from('.hero-stripe', { scaleX: 0, duration: 0.9, ease: 'expo.inOut' }, '-=1.1')
    .from('.hero-bottom', { y: 28, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.8')
    .from('.hero-cta', { y: 18, opacity: 0, duration: 0.85, ease: 'power3.out' }, '-=0.7')
    .from('.scroll-hint', { opacity: 0, y: -16, duration: 1.2 }, '-=0.5')
    .add(initMagnetic, '-=0.5');
}

/* ─────────────────────────────────
   2. CUSTOM CURSOR
   (RAF-driven, no GSAP dependency)
───────────────────────────────── */
function initCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  // Bail on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let mx = innerWidth / 2, my = innerHeight / 2;
  let dx = mx, dy = my;
  let rx = mx, ry = my;
  let hovering = false;

  // Single, passive mousemove listener
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });

  // RAF loop — smoother than GSAP ticker on most systems
  function loop() {
    const dotLerp = 0.35;
    const ringLerp = hovering ? 0.18 : 0.12;

    dx += (mx - dx) * dotLerp;
    dy += (my - dy) * dotLerp;
    rx += (mx - rx) * ringLerp;
    ry += (my - ry) * ringLerp;

    dot.style.transform = `translate(${dx - 3}px, ${dy - 3}px)`;
    ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Hover state — use event delegation instead of per-element listeners
  document.addEventListener('mouseover', e => {
    const el = e.target.closest('a, button, .project-card, .chip, .social-btn');
    if (el && !hovering) {
      hovering = true;
      dot.classList.add('cursor-grow');
      ring.classList.add('cursor-grow');
    }
  }, { passive: true });

  document.addEventListener('mouseout', e => {
    const el = e.target.closest('a, button, .project-card, .chip, .social-btn');
    if (el && hovering) {
      hovering = false;
      dot.classList.remove('cursor-grow');
      ring.classList.remove('cursor-grow');
    }
  }, { passive: true });
}

/* ─────────────────────────────────
   MAGNETIC BUTTONS
───────────────────────────────── */
function initMagnetic() {
  if (typeof gsap === 'undefined') return;
  const btns = document.querySelectorAll('.btn-wild, .nav-logo, .social-btn, .nav-links a, .chip');
  btns.forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.38;
      const y = (e.clientY - r.top - r.height / 2) * 0.38;
      gsap.to(btn, { x, y, duration: 0.28, ease: 'power2.out', overwrite: 'auto' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.45)', overwrite: 'auto' });
    });
  });
}

/* ─────────────────────────────────
   3. THEME TOGGLE
───────────────────────────────── */
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.body.classList.add('light');

  btn && btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
}

/* ─────────────────────────────────
   4. NAV — RAF-throttled scroll
───────────────────────────────── */
function initNav() {
  const nav = document.getElementById('nav');
  const links = [...document.querySelectorAll('.nav-links a')];
  const sections = [...document.querySelectorAll('section[id]')];
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 60);

      let current = '';
      for (const sec of sections) {
        if (y >= sec.offsetTop - 220) current = sec.id;
      }
      for (const a of links) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      }
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('open');
      mobileBtn.classList.toggle('active');
      navLinks.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', String(!isOpen));
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileBtn.classList.remove('active');
        navLinks.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth scroll on anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ─────────────────────────────────
   5. THREE.JS WEBGL BACKGROUND
   – visibility-aware, debounced resize
───────────────────────────────── */
function initWebGL() {
  if (typeof THREE === 'undefined') return;

  const lowPerf =
    (navigator.deviceMemory && navigator.deviceMemory < 2) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);
  if (lowPerf) return;

  const canvas = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 100);
  camera.position.z = 4;

  /* — Particles — */
  const isMob = innerWidth < 768;
  const N = isMob ? 700 : 1200;
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 20;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    const t = Math.random();
    col[i * 3] = t < 0.5 ? 0.76 : 0.48;
    col[i * 3 + 1] = t < 0.5 ? 1.0 : 0.38;
    col[i * 3 + 2] = t < 0.5 ? 0.44 : 1.0;
  }
  const ptGeo = new THREE.BufferGeometry();
  ptGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  ptGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const ptMat = new THREE.PointsMaterial({
    size: 0.012, vertexColors: true, transparent: true,
    opacity: 0.38, blending: THREE.AdditiveBlending, depthWrite: false
  });
  const particles = new THREE.Points(ptGeo, ptMat);
  scene.add(particles);

  /* — Geometric Shapes — */
  const icoGeo = new THREE.IcosahedronGeometry(1, 0);
  const icoMat = new THREE.MeshPhongMaterial({ color: 0xc1ff72, wireframe: true, transparent: true, opacity: 0.15, shininess: 100 });
  const icosahedron = new THREE.Mesh(icoGeo, icoMat);
  scene.add(icosahedron);

  const knotGeo = new THREE.TorusKnotGeometry(0.6, 0.2, 80, 12);
  const knotMat = new THREE.MeshPhongMaterial({ color: 0x7b61ff, wireframe: true, transparent: true, opacity: 0.1, shininess: 100 });
  const torusKnot = new THREE.Mesh(knotGeo, knotMat);
  scene.add(torusKnot);

  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const ptLight = new THREE.PointLight(0xffffff, 0.8);
  ptLight.position.set(5, 5, 5);
  scene.add(ptLight);

  function placeObjects() {
    const m = window.innerWidth < 768;
    icosahedron.position.set(m ? 1.5 : 4, m ? 2 : 2, -2);
    torusKnot.position.set(m ? -1.5 : -4, m ? -2 : -2, -2);
    icosahedron.scale.setScalar(m ? 0.7 : 1.2);
    torusKnot.scale.setScalar(m ? 0.7 : 1.0);
  }
  placeObjects();

  /* — Mouse parallax — */
  let mx = 0, my = 0, tx = 0, ty = 0;
  window.addEventListener('mousemove', e => {
    mx = (e.clientX / innerWidth - 0.5) * 1.5;
    my = (e.clientY / innerHeight - 0.5) * 1.5;
  }, { passive: true });

  // Debounced resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
      placeObjects();
    }, 150);
  }, { passive: true });

  // Stop rendering when tab hidden (saves battery/CPU)
  let visible = true;
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; });

  const clock = new THREE.Clock();
  (function animate() {
    requestAnimationFrame(animate);
    if (!visible) return;

    const t = clock.getElapsedTime();
    tx += (mx - tx) * 0.04;
    ty += (my - ty) * 0.04;

    particles.rotation.y = t * 0.05 + tx * 0.3;
    particles.rotation.x = t * 0.025 + ty * 0.2;

    icosahedron.rotation.y = t * 0.18 + tx * 0.5;
    icosahedron.rotation.x = t * 0.09 + ty * 0.4;

    torusKnot.rotation.y = -t * 0.13 + tx * 0.4;
    torusKnot.rotation.z = t * 0.09 + ty * 0.3;

    renderer.render(scene, camera);
  })();
}

/* ─────────────────────────────────
   6. SCROLL REVEAL
───────────────────────────────── */
function initReveal() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    // Fallback: IntersectionObserver
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Project cards — staggered batch entrance
  ScrollTrigger.batch('.project-card', {
    onEnter: batch => gsap.fromTo(batch,
      { opacity: 0, y: 70, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.95, ease: 'expo.out', overwrite: true }
    ),
    once: true,
    start: 'top 90%'
  });

  // Section elements
  document.querySelectorAll('.section-block').forEach(section => {
    const els = section.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    if (!els.length) return;
    gsap.fromTo(els,
      { opacity: 0, y: 44 },
      {
        opacity: 1, y: 0,
        duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 88%', once: true }
      }
    );
  });
}

/* ─────────────────────────────────
   7. STAT CARDS — subtle parallax
───────────────────────────────── */
function initParallaxStats() {
  const stats = document.querySelectorAll('.stat');
  if (!stats.length) return;

  window.addEventListener('mousemove', e => {
    const cx = e.clientX / innerWidth - 0.5;
    const cy = e.clientY / innerHeight - 0.5;
    stats.forEach((s, i) => {
      const depth = 0.5 + i * 0.3;
      s.style.transform = `translate(${cx * depth * 6}px, ${cy * depth * 4}px)`;
    });
  }, { passive: true });
}

/* ─────────────────────────────────
   8. CONTACT FORM
───────────────────────────────── */
function initContact() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');

    if (status) {
      status.textContent = 'Transmitting message…';
      status.style.color = 'var(--text-dim)';
    }
    if (btn) btn.setAttribute('disabled', 'true');

    const formData = new FormData(form);
    formData.append('_subject', `Portfolio Inquiry from ${formData.get('name') || 'Visitor'}`);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    try {
      const res = await fetch('https://formsubmit.co/ajax/shomaysinghparihar@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const data = await res.json();

      if (res.ok || data.success === 'true' || data.success === true) {
        status.textContent = '✓ Message sent directly to Shomay!';
        status.style.color = 'var(--accent)';
        form.reset();
      } else {
        throw new Error(data.message || 'Transmission failed');
      }
    } catch (err) {
      console.error('Submission Error:', err);
      // Fallback: mailto link
      const name = encodeURIComponent(formData.get('name') || '');
      const email = encodeURIComponent(formData.get('email') || '');
      const message = encodeURIComponent(formData.get('message') || '');
      window.location.href = `mailto:shomaysinghparihar@gmail.com?subject=Portfolio%20Inquiry%20from%20${name}&body=${message}%0A%0AFrom:%20${name}%20(${email})`;
      status.textContent = '✓ Opening mail client to send…';
      status.style.color = 'var(--accent)';
    } finally {
      if (btn) btn.removeAttribute('disabled');
    }
  });
}

/* ─────────────────────────────────
   9. GLASS EDITION SPECULAR REFLECTION
───────────────────────────────── */
function initGlassEffects() {
  const cards = document.querySelectorAll(
    '.project-card, .stat, .skill-group, .about-glass-panel, .currently-glass-card, .contact-glass-terminal, .chip, .focus-card, .research-card, .education-glass-card'
  );

  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }, { passive: true });
  });
}

