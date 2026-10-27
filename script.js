/* ===== SHOMAY SINGH PARIHAR — PERSONAL WEB & JOURNAL ENGINE ===== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initJournal();
  initLightbox();
  initProjectModal();
  initContact();
  initVisitorCounter();
  initWebGL();

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/* --------------------------------------------------------------------------
   0. VISITOR REGISTER ODOMETER & LIVE LOCAL TIME
   -------------------------------------------------------------------------- */
function initVisitorCounter() {
  // Live India Standard Time (IST) clock in footer
  const timeEl = document.getElementById('local-time');
  if (timeEl) {
    const updateClock = () => {
      try {
        const nowStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        timeEl.textContent = `${nowStr} IST`;
      } catch (_) {
        timeEl.textContent = 'IST (UTC+5:30)';
      }
    };
    updateClock();
    setInterval(updateClock, 1000);
  }

  const odometer = document.getElementById('visitor-odometer');
  const noteEl = document.getElementById('visitor-note');
  if (!odometer) return;

  const digits = [...odometer.querySelectorAll('.odo-digit')];
  const STORAGE_KEY = 'shomay_real_visitor_count';
  const SESSION_KEY = 'shomay_real_session_logged';

  function renderOdometer(targetNumber) {
    const cleanNum = Math.max(1, parseInt(targetNumber, 10) || 1);
    const padded = String(cleanNum).padStart(digits.length, '0');
    const firstSignificantIdx = padded.search(/[1-9]/);

    digits.forEach((el, idx) => {
      const finalChar = padded[idx] || '0';
      const isSignificant = firstSignificantIdx !== -1 && idx >= firstSignificantIdx;
      let ticks = 0;
      const maxTicks = 5 + idx * 2;

      el.classList.add('rolling');
      const rollTimer = setInterval(() => {
        ticks++;
        if (ticks >= maxTicks) {
          clearInterval(rollTimer);
          el.textContent = finalChar;
          el.classList.remove('rolling');
          el.classList.toggle('active-digit', isSignificant);
        } else {
          el.textContent = String((ticks + idx) % 10);
        }
      }, 42);
    });

    if (noteEl) {
      noteEl.innerHTML = `You are visitor <strong>#${cleanNum.toLocaleString()}</strong> to this site.`;
    }
  }

  const hasLoggedSession = sessionStorage.getItem(SESSION_KEY) === '1';
  const endpoint = hasLoggedSession
    ? 'https://api.counterapi.dev/v1/shomay-parihar-personal-web/visits/'
    : 'https://api.counterapi.dev/v1/shomay-parihar-personal-web/visits/up';

  fetch(endpoint)
    .then(res => {
      if (!res.ok) throw new Error('Counter API error');
      return res.json();
    })
    .then(data => {
      if (typeof data.count === 'number' && data.count >= 1) {
        sessionStorage.setItem(SESSION_KEY, '1');
        localStorage.setItem(STORAGE_KEY, String(data.count));
        renderOdometer(data.count);
      } else {
        throw new Error('Empty count');
      }
    })
    .catch(() => {
      let localCount = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
      if (isNaN(localCount) || localCount < 0) localCount = 0;
      if (!hasLoggedSession) {
        localCount += 1;
        sessionStorage.setItem(SESSION_KEY, '1');
        localStorage.setItem(STORAGE_KEY, String(localCount));
      }
      renderOdometer(Math.max(1, localCount));
    });
}

/* --------------------------------------------------------------------------
   1. THEME TOGGLE
   -------------------------------------------------------------------------- */
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');

  if (saved === 'light') {
    document.body.classList.add('light');
  }

  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      const isLight = document.body.classList.contains('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }
}

/* --------------------------------------------------------------------------
   2. NAVIGATION & SCROLL STATE
   -------------------------------------------------------------------------- */
function initNav() {
  const nav = document.getElementById('nav');
  const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = [...document.querySelectorAll('section[id]')];
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (nav) {
        nav.classList.toggle('scrolled', y > 32);
      }

      if (links.length && sections.length) {
        let current = '';
        for (const sec of sections) {
          if (y >= sec.offsetTop - 220) {
            current = sec.id;
          }
        }
        for (const a of links) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        }
      }
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (mobileBtn && navLinks) {
    const closeMobileMenu = () => {
      mobileBtn.classList.remove('active');
      navLinks.classList.remove('open');
      mobileBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    mobileBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('open');
      mobileBtn.classList.toggle('active');
      navLinks.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', String(!isOpen));
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 860 && navLinks.classList.contains('open')) {
        closeMobileMenu();
      }
    }, { passive: true });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const targetId = a.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. PERSONAL JOURNAL & MULTIMEDIA BLOG ENGINE
   -------------------------------------------------------------------------- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function generateWaveformBars(seedStr, count = 38) {
  let hash = 2166136261;
  for (let i = 0; i < seedStr.length; i++) {
    hash ^= seedStr.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const bars = [];
  for (let i = 0; i < count; i++) {
    hash ^= i * 31;
    hash = Math.imul(hash, 16777619);
    const norm = (Math.abs(hash) % 75) + 22;
    bars.push(`<span class="wave-bar" style="height:${norm}%"></span>`);
  }
  return bars.join('');
}

function formatCategoryLabel(cat) {
  const map = {
    'ai': 'AI Engineering',
    'data-science': 'Data Science',
    'building': 'Building',
    'life': 'Daily Life'
  };
  return map[cat] || 'Journal';
}

function estimateReadingTime(entry) {
  const proseWords = (entry.paragraphs || []).join(' ').split(/\s+/).filter(Boolean).length;
  const codeWords = entry.code && entry.code.snippet ? entry.code.snippet.split(/\s+/).filter(Boolean).length : 0;
  const minutes = Math.max(1, Math.round((proseWords + codeWords * 0.6) / 160));
  return `${minutes} min read`;
}

function buildAudioPlayerHtml(entry) {
  if (!entry.audio || !entry.audio.title) return '';
  return `
    <div class="entry-audio" data-audio-src="${escapeHtml(entry.audio.src || '')}" data-duration="${escapeHtml(entry.audio.duration || '01:30')}">
      <button type="button" class="audio-play-btn" aria-label="Play audio note">
        <svg class="icon-play" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="6 3 20 12 6 21 6 3"></polygon>
        </svg>
        <svg class="icon-pause" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="display:none">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      </button>
      <div class="audio-info">
        <div class="audio-title-row">
          <span class="audio-title">${escapeHtml(entry.audio.title)}</span>
          <span class="audio-time">${escapeHtml(entry.audio.duration || '01:30')}</span>
        </div>
        <div class="audio-waveform" aria-hidden="true">
          ${generateWaveformBars(entry.id || entry.title)}
        </div>
      </div>
    </div>
  `;
}

function buildCodeWindowHtml(entry) {
  if (!entry.code || !entry.code.snippet) return '';
  const langLabel = entry.code.lang || 'snippet.py';
  return `
    <div class="blog-code-window">
      <div class="code-window-bar">
        <span>${escapeHtml(langLabel)}</span>
        <button type="button" class="copy-code-btn" data-copy-code="${escapeHtml(entry.code.snippet)}">Copy snippet</button>
      </div>
      <pre><code>${escapeHtml(entry.code.snippet)}</code></pre>
    </div>
  `;
}

function buildPhotoGridHtml(entry) {
  if (!Array.isArray(entry.images) || entry.images.length === 0) return '';
  return `
    <div class="blog-photo-grid">
      ${entry.images.map(img => `
        <figure class="blog-photo-item">
          <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.caption || entry.title)}" loading="lazy" data-lightbox="true" data-caption="${escapeHtml(img.caption || '')}">
          ${img.caption ? `<figcaption class="blog-photo-caption">${escapeHtml(img.caption)}</figcaption>` : ''}
        </figure>
      `).join('')}
    </div>
  `;
}

function buildVideoHtml(entry) {
  if (!entry.video || !entry.video.src) return '';
  const isImg = entry.video.isImagePreview || /\.(gif|png|jpe?g|webp|svg)$/i.test(entry.video.src);
  return `
    <div class="blog-photo-grid">
      <figure class="blog-photo-item">
        ${isImg
          ? `<img src="${escapeHtml(entry.video.src)}" alt="${escapeHtml(entry.video.caption || entry.title)}" loading="lazy" data-lightbox="true" data-caption="${escapeHtml(entry.video.caption || '')}">`
          : `<video controls preload="metadata" ${entry.video.poster ? `poster="${escapeHtml(entry.video.poster)}"` : ''}>
               <source src="${escapeHtml(entry.video.src)}" type="video/mp4">
             </video>`
        }
        ${entry.video.caption ? `<figcaption class="blog-photo-caption">${escapeHtml(entry.video.caption)}</figcaption>` : ''}
      </figure>
    </div>
  `;
}

function initJournal() {
  const recentSlot = document.getElementById('journal-recent-post');
  const archiveWrap = document.getElementById('journal-archive-wrap');
  const toggleBtn = document.getElementById('archive-toggle-btn');
  const toggleLabel = document.getElementById('archive-toggle-label');
  const olderList = document.getElementById('journal-older-list');

  if (!recentSlot) return;

  const entries = Array.isArray(window.JOURNAL_ENTRIES) ? window.JOURNAL_ENTRIES : [];
  if (entries.length === 0) return;

  // 1. Render the Most Recent Blog Post cleanly on the main view
  const recent = entries[0];
  const recentCat = formatCategoryLabel(recent.category);
  const recentReadTime = estimateReadingTime(recent);

  recentSlot.innerHTML = `
    <article class="recent-post-article" id="${escapeHtml(recent.id || 'recent-post')}">
      <header>
        <div class="post-meta-line">
          <span class="post-meta-badge">Recent Entry</span>
          <span class="meta-sep">·</span>
          <time>${escapeHtml(recent.date || '')}</time>
          <span class="meta-sep">·</span>
          <span>${escapeHtml(recentCat)}</span>
          <span class="meta-sep">·</span>
          <span>${recentReadTime}</span>
        </div>
        <h2 class="recent-post-title">${escapeHtml(recent.title || '')}</h2>
      </header>

      <div class="post-prose">
        ${(recent.paragraphs || []).map(p => `<p>${escapeHtml(p)}</p>`).join('')}
      </div>

      ${buildAudioPlayerHtml(recent)}
      ${buildCodeWindowHtml(recent)}
      ${buildPhotoGridHtml(recent)}
      ${buildVideoHtml(recent)}
    </article>
  `;

  // 2. Render Older Posts inside the Hidden Bottom Archive
  const olderEntries = entries.slice(1);
  if (archiveWrap && olderList && olderEntries.length > 0) {
    archiveWrap.removeAttribute('hidden');
    const count = olderEntries.length;
    if (toggleLabel) {
      toggleLabel.textContent = `Older Entries (${count})`;
    }

    olderList.innerHTML = olderEntries.map(entry => {
      const catLabel = formatCategoryLabel(entry.category);
      const readTime = estimateReadingTime(entry);
      return `
        <details class="older-post-item" id="${escapeHtml(entry.id || '')}">
          <summary class="older-post-summary">
            <span class="older-post-summary-title">${escapeHtml(entry.title || '')}</span>
            <time class="older-post-summary-date">${escapeHtml(entry.date || '')}</time>
          </summary>
          <div class="older-post-body">
            <div class="post-meta-line">
              <span>${escapeHtml(catLabel)}</span>
              <span class="meta-sep">·</span>
              <span>${readTime}</span>
            </div>
            <div class="post-prose">
              ${(entry.paragraphs || []).map(p => `<p>${escapeHtml(p)}</p>`).join('')}
            </div>
            ${buildAudioPlayerHtml(entry)}
            ${buildCodeWindowHtml(entry)}
            ${buildPhotoGridHtml(entry)}
            ${buildVideoHtml(entry)}
          </div>
        </details>
      `;
    }).join('');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        const nextState = !isExpanded;
        toggleBtn.setAttribute('aria-expanded', String(nextState));
        if (nextState) {
          olderList.removeAttribute('hidden');
          if (toggleLabel) toggleLabel.textContent = `Hide Older Entries (${count})`;
        } else {
          olderList.setAttribute('hidden', 'true');
          if (toggleLabel) toggleLabel.textContent = `Older Entries (${count})`;
        }
      });
    }
  }

  // Copy code snippet handler
  document.addEventListener('click', e => {
    const copyBtn = e.target.closest('[data-copy-code]');
    if (copyBtn) {
      const codeText = copyBtn.getAttribute('data-copy-code') || '';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codeText).then(() => {
          const orig = copyBtn.textContent;
          copyBtn.textContent = 'Copied ✓';
          setTimeout(() => { copyBtn.textContent = orig; }, 1800);
        });
      }
    }
  });

  initAudioPlayers();
}

/* --------------------------------------------------------------------------
   3B. AUDIO / VOICE NOTE PLAYER (SUPPORTS LOCAL MP3/WAV OR WEB AUDIO SYNTH)
   -------------------------------------------------------------------------- */
let bindAudioContainers = () => {};

function initAudioPlayers() {
  let activeContainer = null;
  let activeAudio = null;
  let synthTimer = null;
  let audioCtx = null;

  function stopCurrent() {
    if (activeAudio) {
      activeAudio.pause();
      activeAudio = null;
    }
    if (synthTimer) {
      clearInterval(synthTimer);
      synthTimer = null;
    }
    if (activeContainer) {
      activeContainer.classList.remove('playing');
      const playIcon = activeContainer.querySelector('.icon-play');
      const pauseIcon = activeContainer.querySelector('.icon-pause');
      const timeEl = activeContainer.querySelector('.audio-time');
      if (playIcon) playIcon.style.display = 'block';
      if (pauseIcon) pauseIcon.style.display = 'none';
      if (timeEl) timeEl.textContent = activeContainer.getAttribute('data-duration') || '01:30';
      activeContainer.querySelectorAll('.wave-bar').forEach(b => b.classList.remove('played'));
      activeContainer = null;
    }
  }

  function playSoftChime() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtx) audioCtx = new Ctx();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(329.63, now + 0.18);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.46);
    } catch (_) {
      // Ignore audio context restrictions
    }
  }

  function formatSec(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function startPreviewLoop(container, bars, timeEl) {
    let step = 0;
    const totalSteps = bars.length;
    synthTimer = setInterval(() => {
      step++;
      bars.forEach((b, idx) => b.classList.toggle('played', idx <= step));
      if (timeEl) timeEl.textContent = formatSec(step * 2);
      if (step >= totalSteps) {
        stopCurrent();
      }
    }, 350);
  }

  bindAudioContainers = function (root = document) {
    root.querySelectorAll('.entry-audio').forEach(container => {
      if (container.dataset.bound === '1') return;
      container.dataset.bound = '1';

      const btn = container.querySelector('.audio-play-btn');
      const bars = [...container.querySelectorAll('.wave-bar')];
      const timeEl = container.querySelector('.audio-time');
      const src = container.getAttribute('data-audio-src');

      if (!btn) return;

      btn.addEventListener('click', () => {
        if (activeContainer === container) {
          stopCurrent();
          return;
        }

        stopCurrent();
        activeContainer = container;
        container.classList.add('playing');

        const playIcon = container.querySelector('.icon-play');
        const pauseIcon = container.querySelector('.icon-pause');
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';

        if (src) {
          const audio = new Audio(src);
          activeAudio = audio;
          audio.addEventListener('timeupdate', () => {
            const pct = audio.duration ? audio.currentTime / audio.duration : 0;
            const activeCount = Math.floor(pct * bars.length);
            bars.forEach((b, idx) => b.classList.toggle('played', idx <= activeCount));
            if (timeEl) timeEl.textContent = formatSec(audio.currentTime);
          });
          audio.addEventListener('ended', stopCurrent);
          audio.addEventListener('error', () => {
            startPreviewLoop(container, bars, timeEl);
          });
          audio.play().catch(() => startPreviewLoop(container, bars, timeEl));
        } else {
          playSoftChime();
          startPreviewLoop(container, bars, timeEl);
        }
      });
    });
  };

  bindAudioContainers(document);
}

/* --------------------------------------------------------------------------
   4. IMAGE LIGHTBOX FOR JOURNAL PHOTOS
   -------------------------------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById('media-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  if (!lightbox || !lightboxImg) return;

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  document.addEventListener('click', e => {
    const img = e.target.closest('img[data-lightbox="true"]');
    if (img) {
      lightboxImg.src = img.getAttribute('src');
      lightboxImg.alt = img.getAttribute('alt') || '';
      if (lightboxCaption) {
        lightboxCaption.textContent = img.getAttribute('data-caption') || '';
      }
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      return;
    }

    if (e.target.closest('.lightbox-close') || e.target === lightbox) {
      closeLightbox();
    }
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* --------------------------------------------------------------------------
   5. PROJECT ARCHITECTURE DRAWER / SPECIFICATIONS
   -------------------------------------------------------------------------- */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-dynamic-content');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = modal ? modal.querySelector('.modal-backdrop') : null;
  if (!modal || !modalContent) return;

  const projectCatalog = {
    uniassist: {
      title: 'UniAssist — Dense Retrieval & RAG Pipeline',
      image: 'assets/images/uniassist.png',
      alt: 'UniAssist RAG Pipeline',
      liveUrl: 'https://uniassist-shomayyy.streamlit.app/',
      githubUrl: 'https://github.com/Shomay12/UniAssist',
      description: 'UniAssist mitigates hallucination on technical coursework by grounding language model synthesis in verified syllabi, lecture notes, and textbooks. It combines structure-aware document chunking, dense sentence embeddings, FAISS inner-product search, and sub-second Groq LPU inference.',
      features: [
        {
          title: 'Dense Vector Indexing',
          desc: 'Sentence-transformer embeddings indexed in FAISS for fast semantic retrieval across multi-subject PDFs.'
        },
        {
          title: 'Structure-Aware Chunking',
          desc: 'Preserves theorem definitions, equations, and code blocks across chunk boundaries to prevent context fragmentation.'
        },
        {
          title: 'Groq LPU Inference',
          desc: 'Low-latency token streaming paired with deterministic context assembly and LaTeX mathematical rendering.'
        },
        {
          title: 'Multi-Subject Routing',
          desc: 'Routes student queries to domain-specific rubrics covering Machine Learning, Algorithms, and Systems.'
        }
      ],
      architecture: 'PDF / Syllabus Ingestion → Structure-Aware Chunker → Sentence Embeddings → FAISS Vector Index → Context Reranker → Groq LLM Synthesis.',
      techStack: 'Python · FAISS · Sentence-Transformers · RAG · Groq API · LangChain · Streamlit'
    },
    finance_tracker: {
      title: 'Finance Expenditure Intelligence — Anomaly Detection & Forecasting',
      image: 'assets/images/finance_tracker.png',
      alt: 'Finance Expenditure Data Science Pipeline',
      liveUrl: '',
      githubUrl: 'https://github.com/Shomay12/Finance_Expenditure_tracker',
      description: 'An end-to-end Data Science and Machine Learning system designed for noisy personal financial data. Automatically ingests transaction logs, isolates fixed recurring bills, flags statistical spending anomalies using Isolation Forests, classifies merchants via NLP features, and projects cash flow.',
      features: [
        {
          title: 'Isolation Forest Outliers',
          desc: 'Unsupervised anomaly scoring over rolling window features, category z-scores, and inter-arrival times.'
        },
        {
          title: 'Merchant NLP Classifier',
          desc: 'Supervised multi-class classification mapping raw banking descriptions into structured expenditure categories.'
        },
        {
          title: 'Periodicity Discovery',
          desc: 'Temporal clustering algorithm separating fixed recurring subscriptions and rent from discretionary spend.'
        },
        {
          title: 'Time-Series Forecasting',
          desc: 'Statistical burn-rate modeling and monthly runway projection visualized with Plotly and Streamlit.'
        }
      ],
      architecture: 'Raw Transaction Logs → Temporal & Cyclical Feature Engineering → Periodicity Filter + Isolation Forest → Time-Series Forecaster → Plotly Analytics.',
      techStack: 'Python · Scikit-learn · Isolation Forest · Pandas · NumPy · Time-Series Forecasting · Plotly · Streamlit'
    },
    industrial_monitoring: {
      title: 'Industrial Machine Monitoring — Predictive Maintenance ML',
      image: 'assets/images/industrial_monitoring.png',
      alt: 'Industrial Machine Monitoring System',
      liveUrl: '',
      githubUrl: 'https://github.com/Shomay12/Industrial-Machine-Monitoring-System',
      description: 'Predictive maintenance platform engineered to detect early mechanical degradation before breakdown. Edge sensors (ESP32 / simulator) stream vibration, rotational, and thermal telemetry to a FastAPI backend where a Scikit-learn RandomForest model scores failure risk and feeds a min-heap dispatch queue.',
      features: [
        {
          title: 'RandomForest Failure Classifier',
          desc: 'Supervised ensemble model trained on multivariate sensor telemetry to classify bearing and thermal failure risk.'
        },
        {
          title: 'Streaming Telemetry Ingest',
          desc: 'Low-latency FastAPI endpoints consuming continuous vibration, RPM, and temperature time-series.'
        },
        {
          title: 'Min-Heap Dispatch Queue',
          desc: 'Algorithmic priority queue dynamically ordering machines by predicted severity score for maintenance crews.'
        },
        {
          title: 'Time-Series Persistence',
          desc: 'Historical sensor logging in MongoDB supporting degradation curve analysis and periodic model retraining.'
        }
      ],
      architecture: 'ESP32 / Telemetry Simulator → FastAPI Ingestion → Feature Extractor & RandomForest Scorer → Min-Heap Priority Queue → MongoDB & Live Monitor.',
      techStack: 'Python · Scikit-learn (RandomForest) · FastAPI · Priority Queue DSA · MongoDB · ESP32 Telemetry · TypeScript'
    },
    hottea: {
      title: 'HotTea — Local LLM Inference & AI Workspace',
      image: 'assets/images/hottea.png',
      alt: 'HotTea AI Browser and Local LLM Workspace',
      liveUrl: 'https://shomay12.github.io/hottea/',
      githubUrl: 'https://github.com/Shomay12/hottea',
      description: 'An open-source, privacy-first AI browser and local LLM workspace built with Flutter. Integrates on-device model inference (Ollama / llama.cpp) and cloud LLMs with automated DOM context extraction and client-side AES-GCM encrypted .tea vaults.',
      features: [
        {
          title: 'Local & Cloud LLM Runtime',
          desc: 'Unified inference layer supporting on-device models via Ollama/llama.cpp alongside Gemini and Groq APIs.'
        },
        {
          title: 'DOM Context Grounding',
          desc: 'Links every synthesized response directly to the source DOM paragraph for side-by-side verification.'
        },
        {
          title: 'AES-GCM Encrypted Vaults',
          desc: 'Client-side encrypted .tea notebook files keeping notes, clips, and browsing history offline.'
        },
        {
          title: 'Cross-Platform Native Core',
          desc: 'Compiled from a single Flutter/Dart architecture for macOS, Linux, Windows, Android, and Web.'
        }
      ],
      architecture: 'Flutter Reactive Workspace → DOM Content Extractor → Context Grounding Engine → Local / Cloud LLM Stream → AES-GCM Encrypted .tea Vault.',
      techStack: 'Flutter · Dart · Ollama / Local LLM · Gemini API · AES-GCM Encryption · Cross-Platform'
    },
    duezy: {
      title: 'Duezy — Conversational AI Agent & Double-Entry Ledger',
      image: 'assets/images/duezy.png',
      alt: 'Duezy AI Payment Recovery Platform',
      liveUrl: '',
      githubUrl: 'https://github.com/Shomay12/Duezy',
      description: 'Automated invoice recovery system pairing an authoritative FastAPI double-entry accounting ledger with a conversational AI negotiation agent and cryptographic Razorpay webhook verification.',
      features: [
        {
          title: 'Double-Entry Ledger Backend',
          desc: 'Enforces strict accounting invariants across debits and credits for every invoice and installment.'
        },
        {
          title: 'Conversational Negotiation Agent',
          desc: 'Autonomously structures installment schedules based on customer cash-flow constraints.'
        },
        {
          title: 'Idempotent Webhook Verification',
          desc: 'Cryptographically validates Razorpay webhook signatures to prevent replay and duplicate captures.'
        }
      ],
      architecture: 'Invoice Event → Dunning Orchestrator → Conversational AI Agent → Double-Entry PostgreSQL Ledger → Razorpay Webhook Validator.',
      techStack: 'FastAPI · Python · Conversational AI · PostgreSQL · Razorpay Webhooks · Flutter · Docker'
    },
    replynest: {
      title: 'ReplyNest — Webhook Orchestration & Messaging Infrastructure',
      image: 'assets/images/replynest.png',
      alt: 'ReplyNest Messaging Platform',
      liveUrl: 'http://replynest.tech/#auth',
      githubUrl: 'https://github.com/Shomay12',
      description: 'Multi-tenant messaging automation infrastructure built on Meta Graph APIs, featuring real-time webhook ingestion, keyword intent matching, PostgreSQL event persistence, and Dockerized deployment behind Traefik.',
      features: [
        {
          title: 'Real-Time Webhook Router',
          desc: 'High-concurrency Node.js webhook ingestion matching incoming events against tenant keyword rules.'
        },
        {
          title: 'OAuth 2.0 Lifecycle Engine',
          desc: 'Automated token refresh and multi-tenant permission isolation across business accounts.'
        },
        {
          title: 'Containerized Deployment',
          desc: 'Orchestrated with Docker Compose and Traefik reverse proxy with automated TLS provisioning.'
        }
      ],
      architecture: 'Meta Graph Webhooks → Traefik Reverse Proxy → Node.js Event Router → Keyword Matcher → PostgreSQL Event Store.',
      techStack: 'Node.js · PostgreSQL · Meta Graph API · OAuth 2.0 · Docker · Traefik'
    },
    openupsc: {
      title: 'OpenUPSC — Structured Knowledge Index & Learning Platform',
      image: 'assets/images/openupsc.svg',
      alt: 'OpenUPSC Platform',
      liveUrl: 'https://open-upsc.vercel.app',
      githubUrl: 'https://github.com/Shomay12/OpenUpsc',
      description: 'High-performance syllabus indexing and study platform built with Next.js, TypeScript, and Supabase, organizing thousands of curriculum topics and historical questions into a fast, distraction-free interface.',
      features: [
        {
          title: 'Hierarchical Curriculum Graph',
          desc: 'Granular topic indexing across Prelims and Mains with persistent progress state.'
        },
        {
          title: 'Edge-Cached Performance',
          desc: 'Static and edge-rendered routes on Vercel for instant navigation on low-bandwidth connections.'
        }
      ],
      architecture: 'Next.js App Router → Edge Cache → Structured Markdown & Supabase Store → Responsive Reading UI.',
      techStack: 'TypeScript · Next.js · React · Supabase · Tailwind CSS'
    }
  };

  let lastFocused = null;

  function openModal(projectId) {
    const data = projectCatalog[projectId];
    if (!data) return;

    lastFocused = document.activeElement;

    modalContent.innerHTML = `
      <div>
        <h3 class="modal-title">${data.title}</h3>
      </div>

      <div class="modal-hero-grid">
        <div class="modal-image-wrap">
          <img src="${data.image}" alt="${data.alt}">
        </div>
        <div class="modal-summary-box">
          <p>${data.description}</p>
        </div>
      </div>

      <div>
        <div class="modal-section-title">Engineering &amp; Modeling Details</div>
        <div class="modal-features-list">
          ${data.features.map(f => `
            <div class="modal-feature-row">
              <h5>${f.title}</h5>
              <p>${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="modal-section-title">Pipeline Flow</div>
        <div class="modal-arch-line">${data.architecture}</div>
      </div>

      <div>
        <div class="modal-section-title">Stack</div>
        <div class="work-stack-line">${data.techStack}</div>
      </div>

      <div class="modal-cta-row">
        ${data.liveUrl ? `<a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="link-primary">Launch Live System ↗</a>` : ''}
        ${data.githubUrl ? `<a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="link-quiet">View Source Repository ↗</a>` : ''}
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  }

  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-project]');
    if (trigger) {
      e.preventDefault();
      const proj = trigger.getAttribute('data-project');
      if (proj) openModal(proj);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   6. CONTACT FORM HANDLING
   -------------------------------------------------------------------------- */
function initContact() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');

    if (status) {
      status.textContent = 'Sending...';
    }
    if (btn) btn.setAttribute('disabled', 'true');

    const formData = new FormData(form);
    formData.append('_subject', `Message from ${formData.get('name') || 'Visitor'}`);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    try {
      const res = await fetch('https://formsubmit.co/ajax/shomaysinghparihar@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      const data = await res.json();

      if (res.ok || data.success === 'true' || data.success === true) {
        if (status) status.textContent = 'Received — thank you.';
        form.reset();
      } else {
        throw new Error('Submission error');
      }
    } catch (_) {
      const name = encodeURIComponent(formData.get('name') || '');
      const email = encodeURIComponent(formData.get('email') || '');
      const message = encodeURIComponent(formData.get('message') || '');
      window.location.href = `mailto:shomaysinghparihar@gmail.com?subject=Message%20from%20${name}&body=${message}%0A%0AFrom:%20${name}%20(${email})`;
      if (status) status.textContent = 'Opening mail client...';
    } finally {
      if (btn) btn.removeAttribute('disabled');
    }
  });
}

/* --------------------------------------------------------------------------
   7. LATENT-SPACE WEBGL BACKGROUND (CONSTELLATION MANIFOLD + GEODESICS)
   -------------------------------------------------------------------------- */
function initWebGL() {
  if (typeof THREE === 'undefined') return;

  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const lowPerf =
    (navigator.deviceMemory && navigator.deviceMemory < 2) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);
  if (lowPerf) return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
  } catch (err) {
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 5;

  // Create soft radial glow texture for particles (eliminates harsh square dots)
  function createRadialSprite() {
    const c = document.createElement('canvas');
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.35, 'rgba(180, 215, 255, 0.65)');
    grad.addColorStop(1, 'rgba(59, 130, 246, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }

  const spriteTex = createRadialSprite();

  // 1. Deep Field Star / Embedding Nodes
  const isMob = window.innerWidth < 768;
  const N = isMob ? 420 : 1350;
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);

  for (let i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 24;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 24;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 20;

    const paletteRoll = Math.random();
    if (paletteRoll < 0.55) {
      // Sapphire Blue
      col[i * 3] = 0.35;
      col[i * 3 + 1] = 0.62;
      col[i * 3 + 2] = 0.98;
    } else if (paletteRoll < 0.82) {
      // Indigo Violet
      col[i * 3] = 0.58;
      col[i * 3 + 1] = 0.42;
      col[i * 3 + 2] = 0.96;
    } else {
      // Cool Cyan
      col[i * 3] = 0.18;
      col[i * 3 + 1] = 0.78;
      col[i * 3 + 2] = 0.92;
    }
  }

  const ptGeo = new THREE.BufferGeometry();
  ptGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  ptGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));

  const ptMat = new THREE.PointsMaterial({
    size: isMob ? 0.09 : 0.075,
    map: spriteTex,
    vertexColors: true,
    transparent: true,
    opacity: 0.72,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particles = new THREE.Points(ptGeo, ptMat);
  scene.add(particles);

  // 2. Latent Manifold Constellation Graph (Connected Nodes + Filaments)
  const graphCount = isMob ? 42 : 85;
  const graphNodes = [];
  const nodePositions = new Float32Array(graphCount * 3);

  for (let i = 0; i < graphCount; i++) {
    const x = (Math.random() - 0.5) * 14;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 6 - 1.5;
    graphNodes.push({
      baseX: x,
      baseY: y,
      baseZ: z,
      phase: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.4
    });
    nodePositions[i * 3] = x;
    nodePositions[i * 3 + 1] = y;
    nodePositions[i * 3 + 2] = z;
  }

  // Build edges between nearby manifold nodes
  const edgeIndices = [];
  const threshold = isMob ? 3.2 : 2.85;
  for (let i = 0; i < graphCount; i++) {
    for (let j = i + 1; j < graphCount; j++) {
      const dx = graphNodes[i].baseX - graphNodes[j].baseX;
      const dy = graphNodes[i].baseY - graphNodes[j].baseY;
      const dz = graphNodes[i].baseZ - graphNodes[j].baseZ;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < threshold) {
        edgeIndices.push(i, j);
      }
    }
  }

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
  lineGeo.setIndex(edgeIndices);

  const lineMat = new THREE.LineBasicMaterial({
    color: 0x60a5fa,
    transparent: true,
    opacity: isMob ? 0.06 : 0.085,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const constellationLines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(constellationLines);

  // 3. Dual Counter-Rotating Geodesic Polyhedra & Torus Manifold
  const icoGroup = new THREE.Group();
  const outerIcoGeo = new THREE.IcosahedronGeometry(1.15, 1);
  const outerIcoMat = new THREE.MeshBasicMaterial({
    color: 0x3b82f6,
    wireframe: true,
    transparent: true,
    opacity: 0.14
  });
  const outerIco = new THREE.Mesh(outerIcoGeo, outerIcoMat);

  const innerIcoGeo = new THREE.IcosahedronGeometry(0.68, 0);
  const innerIcoMat = new THREE.MeshBasicMaterial({
    color: 0x8b5cf6,
    wireframe: true,
    transparent: true,
    opacity: 0.2
  });
  const innerIco = new THREE.Mesh(innerIcoGeo, innerIcoMat);

  icoGroup.add(outerIco);
  icoGroup.add(innerIco);
  scene.add(icoGroup);

  const knotGeo = new THREE.TorusKnotGeometry(0.68, 0.18, 96, 14);
  const knotMat = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    wireframe: true,
    transparent: true,
    opacity: 0.11
  });
  const torusKnot = new THREE.Mesh(knotGeo, knotMat);
  scene.add(torusKnot);

  function placeObjects() {
    const m = window.innerWidth < 768;
    icoGroup.position.set(m ? 1.7 : 4.2, m ? 2.4 : 1.8, m ? -3.5 : -2.2);
    torusKnot.position.set(m ? -1.7 : -4.4, m ? -2.8 : -2.0, m ? -3.8 : -2.5);
    icoGroup.scale.setScalar(m ? 0.55 : 1.15);
    torusKnot.scale.setScalar(m ? 0.5 : 1.0);
  }
  placeObjects();

  // Interactive Mouse & Scroll Drift
  let mx = 0, my = 0, tx = 0, ty = 0;
  let scrollY = window.scrollY || 0;

  window.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth - 0.5) * 1.4;
    my = (e.clientY / window.innerHeight - 0.5) * 1.4;
  }, { passive: true });

  window.addEventListener('scroll', () => {
    scrollY = window.scrollY || 0;
  }, { passive: true });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      placeObjects();
    }, 150);
  }, { passive: true });

  let visible = true;
  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
  });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    if (!visible) return;

    const t = clock.getElapsedTime();
    tx += (mx - tx) * 0.035;
    ty += (my - ty) * 0.035;

    const scrollDrift = scrollY * 0.00065;

    // Gentle wave motion across manifold nodes
    const posAttr = lineGeo.attributes.position;
    for (let i = 0; i < graphCount; i++) {
      const n = graphNodes[i];
      posAttr.array[i * 3] = n.baseX + Math.sin(t * n.speed + n.phase) * 0.22;
      posAttr.array[i * 3 + 1] = n.baseY + Math.cos(t * n.speed + n.phase) * 0.22;
    }
    posAttr.needsUpdate = true;

    constellationLines.rotation.y = t * 0.02 + tx * 0.18;
    constellationLines.rotation.x = ty * 0.12 + scrollDrift * 0.5;

    particles.rotation.y = t * 0.035 + tx * 0.25;
    particles.rotation.x = t * 0.018 + ty * 0.18 + scrollDrift;

    outerIco.rotation.y = t * 0.14 + tx * 0.4;
    outerIco.rotation.x = t * 0.08 + ty * 0.3;
    innerIco.rotation.y = -t * 0.22;
    innerIco.rotation.z = t * 0.15;

    torusKnot.rotation.y = -t * 0.11 + tx * 0.35;
    torusKnot.rotation.z = t * 0.07 + ty * 0.25;

    renderer.render(scene, camera);
  }

  animate();
}
