/* ===== SHOMAY SINGH PARIHAR — CLIENT-SIDE CORE SCRIPT ===== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initContact();
  initProjectModal();
  initScrollReveal();
  initWebGL();

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

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
   2. NAVIGATION & SMOOTH SCROLLING
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
        nav.classList.toggle('scrolled', y > 40);
      }

      let current = '';
      for (const sec of sections) {
        if (y >= sec.offsetTop - 200) {
          current = sec.id;
        }
      }
      for (const a of links) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      }
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('open');
      mobileBtn.classList.toggle('active');
      navLinks.classList.toggle('open');
      if (nav) nav.classList.toggle('menu-open', !isOpen);
      mobileBtn.setAttribute('aria-expanded', String(!isOpen));
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileBtn.classList.remove('active');
        navLinks.classList.remove('open');
        if (nav) nav.classList.remove('menu-open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', e => {
      if (navLinks.classList.contains('open') && !e.target.closest('#nav')) {
        mobileBtn.classList.remove('active');
        navLinks.classList.remove('open');
        if (nav) nav.classList.remove('menu-open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        mobileBtn.classList.remove('active');
        navLinks.classList.remove('open');
        if (nav) nav.classList.remove('menu-open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Smooth scroll for anchor links
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
   3. SCROLL REVEAL (CLEAN & NON-BLOCKING)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  // Content is immediately visible for instant, accessible rendering
}

/* --------------------------------------------------------------------------
   4. CONTACT FORM HANDLING
   -------------------------------------------------------------------------- */
function initContact() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');

    if (status) {
      status.textContent = 'Sending message…';
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
        status.textContent = 'Message sent directly to Shomay!';
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
      status.textContent = 'Opening mail client to send…';
      status.style.color = 'var(--accent)';
    } finally {
      if (btn) btn.removeAttribute('disabled');
    }
  });
}

/* --------------------------------------------------------------------------
   5. PROJECT DEEP-DIVE MODAL & CATALOG
   -------------------------------------------------------------------------- */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-dynamic-content');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = modal ? modal.querySelector('.modal-backdrop') : null;
  if (!modal || !modalContent) return;

  const projectCatalog = {
    hottea: {
      title: 'HotTea — Privacy-First AI Browser & Research Workspace',
      badge: 'LIVE DEMO · PRIVACY-FIRST',
      typeTag: 'AI BROWSER · PRIVACY-FIRST · FLUTTER CROSS-PLATFORM',
      image: 'assets/images/hottea.png',
      alt: 'HotTea AI Browser and Research Workspace',
      liveUrl: 'https://shomay12.github.io/hottea/',
      githubUrl: 'https://github.com/Shomay12/hottea',
      summary: 'An open-source, privacy-first AI browser and research workspace built with Flutter. Unifies web browsing, AI assistance, evidence-backed research, local LLM inference, and encrypted personal .tea vaults into one cross-platform application.',
      description: 'HotTea transforms standard web browsing into an active, evidence-grounded research environment. Rather than routing personal browsing telemetry to third-party ad networks, HotTea integrates local LLM inference, encrypted offline .tea vaults, multi-tab intelligence, and seamless citation capture into a high-performance Flutter desktop and mobile application.',
      features: [
        {
          title: 'Local & Cloud AI Inference',
          desc: 'Flexible model runtime supporting on-device LLMs via llama.cpp/Ollama and cloud APIs (Gemini, Groq) with user-controlled API keys.'
        },
        {
          title: 'Encrypted Research Vaults (.tea)',
          desc: 'Client-side AES-GCM encrypted notebook vaults allowing users to save web clips, structured summaries, and bookmarks with zero telemetry.'
        },
        {
          title: 'Evidence-Backed Web Grounding',
          desc: 'Automated citation extraction and side-by-side verification linking every AI-generated conclusion directly to the source paragraph.'
        },
        {
          title: 'Multi-Tab State Engine',
          desc: 'Lightweight reactive state architecture managing concurrent tabs, session restores, and decoupled background web workers.'
        },
        {
          title: 'Cross-Platform Flutter Core',
          desc: 'Unified codebase compiled natively for macOS, Linux, Windows, Android, and Web with native webview bindings.'
        }
      ],
      architecture: 'Flutter Reactive UI → WebView / DOM Scraper → Citation & Evidence Extraction Engine → Local / Cloud LLM Client → AES-GCM Encrypted Vault Store.',
      techStack: [
        'Flutter', 'Dart', 'Gemini API', 'Ollama / Local LLM', 'AES-GCM Encryption', 'Cross-Platform', 'State Management'
      ]
    },
    replynest: {
      title: 'ReplyNest — Instagram Automation Platform',
      badge: 'PRODUCTION SAAS · LIVE SYSTEM',
      typeTag: 'AUTOMATION SAAS · META GRAPH API · WEBHOOK ORCHESTRATION',
      image: 'assets/images/replynest.png',
      alt: 'ReplyNest Instagram Automation Platform',
      liveUrl: 'http://replynest.tech/#auth',
      githubUrl: 'https://github.com/Shomay12',
      summary: 'An Instagram automation and conversation orchestration SaaS platform helping businesses automate customer interactions, comment-to-DM funnels, and keyword triggers through Meta Graph APIs.',
      description: 'ReplyNest streamlines Instagram marketing and customer communication through automated keyword detection, comment-to-direct-message delivery, and structured multi-tenant workflow execution. Built with robust webhook ingestion, PostgreSQL persistence, and containerized deployment behind Traefik reverse proxying.',
      features: [
        {
          title: 'Meta Graph API & OAuth 2.0',
          desc: 'Official Instagram Business and Messenger API integration with OAuth 2.0 account authentication and token lifecycle management.'
        },
        {
          title: 'Comment-to-DM Trigger Engine',
          desc: 'Real-time webhook ingestion matching user comments against customizable keyword rules to trigger automated personalized DMs.'
        },
        {
          title: 'Live Execution & Webhook Logs',
          desc: 'Transparent observability dashboard streaming incoming webhook events, message delivery receipts, and dispatch statuses.'
        },
        {
          title: 'Multi-Tenant Architecture',
          desc: 'Secure account isolation supporting multiple business profiles, permission scopes, and dedicated webhook listener channels.'
        },
        {
          title: 'Containerized Microservices',
          desc: 'Dockerized services orchestrated behind Traefik reverse proxy with automatic SSL certificate renewal and PostgreSQL persistence.'
        }
      ],
      architecture: 'Instagram Webhooks / Meta Graph API → Node.js Webhook Router → Keyword & Intent Matcher → PostgreSQL Event Log → Docker & Traefik Microservice Mesh.',
      techStack: [
        'Instagram Business API', 'OAuth 2.0', 'Node.js', 'PostgreSQL', 'Docker', 'Traefik', 'Webhooks', 'REST APIs'
      ]
    },
    duezy: {
      title: 'Duezy — AI-Powered Payment Collection & Recovery Platform',
      badge: 'FINTECH AI · AUTOMATED LEDGER',
      typeTag: 'FINTECH AI · FASTAPI LEDGER · CONVERSATIONAL AGENT',
      image: 'assets/images/duezy.png',
      alt: 'Duezy AI Payment Recovery Platform',
      liveUrl: '',
      githubUrl: 'https://github.com/Shomay12/Duezy',
      summary: 'An AI-driven automated debt collection and invoice recovery system featuring an authoritative double-entry ledger backend, conversational installment negotiation agent, and payment gateway integration.',
      description: 'Duezy streamlines overdue invoice collection by replacing adversarial collection calls with respectful, intelligent AI negotiation. It provides an immutable double-entry ledger backend in FastAPI, automated payment plan scheduling, Razorpay webhook signature verification, and a companion Flutter management application.',
      features: [
        {
          title: 'Authoritative Double-Entry Ledger',
          desc: 'Guarantees strict financial accounting invariants, preventing money creation or loss across debits and credits for all transactions.'
        },
        {
          title: 'Conversational Installment Agent',
          desc: 'AI negotiator that understands customer payment constraints and autonomously constructs mutually agreed installment schedules.'
        },
        {
          title: 'Razorpay Webhook Verification',
          desc: 'Cryptographically verified webhook listeners with idempotency keys preventing replay attacks and duplicate payment captures.'
        },
        {
          title: 'Automated Dunning Workflows',
          desc: 'Event-driven payment reminder triggers with smart escalation curves, SMS/Email dispatches, and real-time status tracking.'
        },
        {
          title: 'Flutter Cross-Platform Client',
          desc: 'Intuitive merchant dashboard for inspecting delinquent invoices, payment plan compliance, and transaction logs.'
        }
      ],
      architecture: 'Invoice Event → Dunning Orchestrator → Conversational AI Agent (Installment Calculator) → Double-Entry Ledger DB → Razorpay Payment Gateway & Webhook Validator.',
      techStack: [
        'FastAPI', 'Python', 'Flutter', 'Dart', 'Razorpay Webhooks', 'Double-Entry Accounting', 'PostgreSQL', 'Docker'
      ]
    },
    uniassist: {
      title: 'UniAssist — Academic Study Companion & Intelligence Platform',
      badge: 'LIVE APP · ACADEMIC RAG',
      typeTag: 'ACADEMIC AI · RAG ARCHITECTURE · VECTOR SEARCH',
      image: 'assets/images/uniassist.png',
      alt: 'UniAssist Academic Study Assistant',
      liveUrl: 'https://uniassist-shomayyy.streamlit.app/',
      githubUrl: 'https://github.com/Shomay12/UniAssist',
      summary: 'A Retrieval-Augmented Generation (RAG) study companion that helps students master complex academic coursework through dense document indexing and high-speed LLM generation.',
      description: 'UniAssist eliminates hallucinated answers in academic subjects by grounding model responses directly in verified course syllabi, lecture slides, and engineering textbooks. Built with Python and Streamlit, it supports interactive document Q&A, automatic flashcard synthesis, and high-speed Groq-accelerated inference.',
      features: [
        {
          title: 'Contextual RAG Retrieval Pipeline',
          desc: 'Dense sentence embeddings vector search indexing computer science syllabi and lecture materials for grounded retrieval.'
        },
        {
          title: 'High-Throughput Groq LLM Acceleration',
          desc: 'Sub-second token streaming via Groq LPU inference delivering instant answers to complex student technical queries.'
        },
        {
          title: 'Multi-Subject Knowledge Routing',
          desc: 'Automated intent categorization routing questions to specialized rubrics for DSA, Computer Networks, and Machine Learning.'
        },
        {
          title: 'Interactive Code & LaTeX Rendering',
          desc: 'Full mathematical notation rendering via LaTeX alongside syntax-highlighted code blocks for algorithmic walkthroughs.'
        },
        {
          title: 'Streamlit Cloud Deployment',
          desc: 'Production-ready cloud interface with session state management, chat export, and file upload parsing.'
        }
      ],
      architecture: 'Student Query / PDF Upload → Document Chunking & Embeddings → FAISS / Vector Index → Context Assembler → Groq LLM Inference → LaTeX / Code Syntax Formatter.',
      techStack: [
        'Python', 'Streamlit', 'RAG', 'Groq API', 'LangChain', 'FAISS Vector Search', 'Sentence Embeddings'
      ]
    },
    finance_tracker: {
      title: 'Finance Expenditure Tracker — AI Personal Finance Intelligence',
      badge: 'APPLIED ML · DATA SCIENCE',
      typeTag: 'MACHINE LEARNING · TIME-SERIES · ANOMALY DETECTION',
      image: 'assets/images/finance_tracker.png',
      alt: 'Finance Expenditure Tracker System',
      liveUrl: '',
      githubUrl: 'https://github.com/Shomay12/Finance_Expenditure_tracker',
      summary: 'An end-to-end Machine Learning and Data Science system for expense anomaly detection, multi-class transaction categorization, and cash flow forecasting.',
      description: 'This project applies applied machine learning to personal financial records. It automatically ingests banking and expense logs, identifies statistically anomalous transactions using Isolation Forests, categorizes expenditure with supervised classifiers, detects recurring subscriptions, and projects future account balances using time-series forecasting.',
      features: [
        {
          title: 'Isolation Forest Anomaly Detection',
          desc: 'Unsupervised outlier identification flagging uncharacteristic spending spikes and suspicious multi-charge events.'
        },
        {
          title: 'Automated Transaction Classification',
          desc: 'Supervised NLP and tabular ML models trained to classify merchant descriptions into granular expense categories.'
        },
        {
          title: 'Recurring Bill & Subscription Discovery',
          desc: 'Periodicity detection algorithm that isolates recurring fixed commitments (rent, utilities, software SaaS) from variable spend.'
        },
        {
          title: 'Time-Series Cash Flow Forecasting',
          desc: 'Statistical forecasting modeling monthly burn rates and projecting runway and savings milestones.'
        },
        {
          title: 'Interactive Analytics Dashboard',
          desc: 'Rich data visualizations built with Pandas, Plotly, and Streamlit for deep financial exploration.'
        }
      ],
      architecture: 'CSV / Transaction Ingestion → Feature Engineering & NLP Tokenizer → Scikit-Learn Classifier & Isolation Forest → Time-Series Predictor → Streamlit / Plotly Dashboard.',
      techStack: [
        'Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Isolation Forest', 'Time-Series Forecasting', 'Plotly', 'Streamlit'
      ]
    },
    industrial_monitoring: {
      title: 'Industrial Machine Monitoring System — Predictive Maintenance',
      badge: 'IOT & ML · PREDICTIVE SYSTEMS',
      typeTag: 'PREDICTIVE MAINTENANCE · IOT SENSORS · DSA PRIORITY QUEUE',
      image: 'assets/images/industrial_monitoring.png',
      alt: 'Industrial Machine Monitoring System',
      liveUrl: '',
      githubUrl: 'https://github.com/Shomay12/Industrial-Machine-Monitoring-System',
      summary: 'Full-stack IoT and Machine Learning predictive maintenance platform streaming sensor telemetry to detect anomalous vibrations and schedule machine repairs via a Priority Queue.',
      description: 'A robust industrial IoT solution engineered to prevent catastrophic factory equipment failures. Edge devices (ESP32 / simulator) stream vibration, temperature, and acoustic telemetry to a FastAPI backend. Machine learning models (RandomForest) classify failure risk in real time, while a Min-Heap / Priority Queue scheduler automatically ranks machines based on failure urgency for maintenance engineers.',
      features: [
        {
          title: 'Real-Time Sensor Telemetry Ingestion',
          desc: 'High-throughput FastAPI telemetry endpoints consuming temperature, rotational speed, and vibration metrics.'
        },
        {
          title: 'RandomForest Predictive ML Classifier',
          desc: 'Scikit-learn classifier trained on industrial sensor datasets to predict impending bearing and motor failures before breakdown.'
        },
        {
          title: 'DSA Priority Queue Servicing Engine',
          desc: 'Algorithmic min-heap scheduling queue dynamically ordering equipment by severity score for technician dispatch.'
        },
        {
          title: 'MongoDB Telemetry Time-Series Store',
          desc: 'Persistent historical sensor logging for trend analysis, degradation curves, and model retraining.'
        },
        {
          title: 'Hardware Simulation & ESP32 Integration',
          desc: 'Dual-mode telemetry ingest supporting physical ESP32 microcontrollers as well as synthetic multi-machine stress simulators.'
        }
      ],
      architecture: 'ESP32 / Simulator → FastAPI REST Gateway → Scikit-Learn ML Anomaly Scorer → Priority Queue Scheduler → MongoDB Telemetry Store → Monitoring Dashboard.',
      techStack: [
        'FastAPI', 'Python', 'RandomForest', 'IoT Telemetry', 'ESP32', 'Priority Queue DSA', 'MongoDB', 'TypeScript'
      ]
    },
    openupsc: {
      title: 'OpenUPSC — Civil Services Educational Platform & Resource Hub',
      badge: 'LIVE PLATFORM · EDTECH',
      typeTag: 'FULL-STACK WEB · NEXT.JS · EDTECH PLATFORM',
      image: 'assets/images/openupsc.svg',
      alt: 'OpenUPSC Educational Platform',
      liveUrl: 'https://open-upsc.vercel.app',
      githubUrl: 'https://github.com/Shomay12/OpenUpsc',
      summary: 'A modern, high-performance educational platform designed for civil services aspirants featuring syllabus tracking, curated resources, and structured revision tools.',
      description: 'OpenUPSC streamlines preparation for one of the world’s most competitive examinations. Built with Next.js, React, and TypeScript, it transforms thousands of pages of unstructured syllabus topics and reference materials into an interactive, checklist-driven learning roadmap with zero fluff and instant search.',
      features: [
        {
          title: 'Interactive Syllabus Roadmap',
          desc: 'Hierarchical syllabus breakdown across Prelims and Mains (GS I-IV, CSAT) with granular completion tracking.'
        },
        {
          title: 'Curated Resource Index & PYQ Vault',
          desc: 'Organized database of Previous Year Questions (PYQs), topper notes, and official answer keys with topic tags.'
        },
        {
          title: 'Lightweight & Blazing Fast',
          desc: 'Static generation and edge caching via Next.js and Vercel ensuring near-instantaneous page loads even on low-bandwidth connections.'
        },
        {
          title: 'Responsive Accessible UI',
          desc: 'Clean, distraction-free study interface built with Tailwind CSS, supporting dark/light reading modes and offline caching.'
        },
        {
          title: 'Open Source Community Driven',
          desc: 'Public open-source repository inviting contributions from educators and successful candidates.'
        }
      ],
      architecture: 'Next.js App Router → Server Components & Edge Cache → Structured Markdown / Supabase Content Store → Tailwind CSS Responsive Layout → Vercel Global CDN.',
      techStack: [
        'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel Edge', 'Markdown CMS'
      ]
    }
  };

  let lastFocusedElement = null;

  function openModal(projectId) {
    const data = projectCatalog[projectId];
    if (!data) return;

    lastFocusedElement = document.activeElement;

    modalContent.innerHTML = `
      <div class="modal-header-top">
        <span class="modal-pill">${data.badge}</span>
        <span class="modal-type-tag">${data.typeTag}</span>
      </div>

      <h3 class="modal-title">${data.title}</h3>

      <div class="modal-hero-grid">
        <div class="modal-image-wrap">
          <img src="${data.image}" alt="${data.alt}">
        </div>
        <div class="modal-summary-box">
          <p>${data.description}</p>
        </div>
      </div>

      <div>
        <div class="modal-section-title">Architectural Features & Systems Engineering</div>
        <div class="modal-features-grid">
          ${data.features.map(f => `
            <div class="modal-feature-item">
              <h5>${f.title}</h5>
              <p>${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <div class="modal-section-title">System Architecture Flow</div>
        <div class="modal-arch-box">
          ${data.architecture}
        </div>
      </div>

      <div>
        <div class="modal-section-title">Technologies & Frameworks</div>
        <div class="modal-tech-pills">
          ${data.techStack.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>

      <div class="modal-cta-row">
        ${data.liveUrl ? `
        <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
          <span>Launch Live System ↗</span>
        </a>` : ''}
        ${data.githubUrl ? `
        <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          View GitHub Repository ↗
        </a>` : ''}
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
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  // Event delegation for opening modal
  document.addEventListener('click', e => {
    const detailBtn = e.target.closest('.btn-card-details');
    if (detailBtn) {
      e.preventDefault();
      const proj = detailBtn.getAttribute('data-project');
      if (proj) openModal(proj);
      return;
    }

    const cardVisual = e.target.closest('.project-card .project-visual');
    if (cardVisual) {
      const card = cardVisual.closest('.project-card');
      const btn = card ? card.querySelector('.btn-card-details') : null;
      if (btn) {
        const proj = btn.getAttribute('data-project');
        if (proj) openModal(proj);
      }
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
   6. THREE.JS WEBGL BACKGROUND GRAPHICS
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
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance'
    });
  } catch (err) {
    console.warn('WebGL init skipped:', err);
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 4;

  /* — Technical Particle Field — */
  const isMob = window.innerWidth < 768;
  const N = isMob ? 350 : 1200;
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 20;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    const t = Math.random();
    col[i * 3] = t < 0.5 ? 0.23 : 0.54;
    col[i * 3 + 1] = t < 0.5 ? 0.51 : 0.36;
    col[i * 3 + 2] = t < 0.5 ? 0.96 : 0.96;
  }
  const ptGeo = new THREE.BufferGeometry();
  ptGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  ptGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const ptMat = new THREE.PointsMaterial({
    size: 0.014,
    vertexColors: true,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const particles = new THREE.Points(ptGeo, ptMat);
  scene.add(particles);

  /* — Geometric Wireframe Objects — */
  const icoGeo = new THREE.IcosahedronGeometry(1, 0);
  const icoMat = new THREE.MeshPhongMaterial({
    color: 0x3b82f6,
    wireframe: true,
    transparent: true,
    opacity: 0.22,
    shininess: 100
  });
  const icosahedron = new THREE.Mesh(icoGeo, icoMat);
  scene.add(icosahedron);

  const knotGeo = new THREE.TorusKnotGeometry(0.6, 0.2, 80, 12);
  const knotMat = new THREE.MeshPhongMaterial({
    color: 0x8b5cf6,
    wireframe: true,
    transparent: true,
    opacity: 0.18,
    shininess: 100
  });
  const torusKnot = new THREE.Mesh(knotGeo, knotMat);
  scene.add(torusKnot);

  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const ptLight = new THREE.PointLight(0xffffff, 0.8);
  ptLight.position.set(5, 5, 5);
  scene.add(ptLight);

  function placeObjects() {
    const m = window.innerWidth < 768;
    icosahedron.position.set(m ? 1.6 : 4, m ? 2.6 : 2, m ? -3.5 : -2);
    torusKnot.position.set(m ? -1.6 : -4, m ? -3.0 : -2, m ? -3.5 : -2);
    icosahedron.scale.setScalar(m ? 0.45 : 1.2);
    torusKnot.scale.setScalar(m ? 0.45 : 1.0);
    icoMat.opacity = m ? 0.12 : 0.22;
    knotMat.opacity = m ? 0.10 : 0.18;
  }
  placeObjects();

  /* — Subtle Mouse Parallax — */
  let mx = 0, my = 0, tx = 0, ty = 0;
  window.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth - 0.5) * 1.5;
    my = (e.clientY / window.innerHeight - 0.5) * 1.5;
  }, { passive: true });

  // Debounced resize
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

  // Stop rendering when tab hidden (saves CPU/battery)
  let visible = true;
  document.addEventListener('visibilitychange', () => {
    visible = !document.hidden;
  });

  const clock = new THREE.Clock();
  function animate() {
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
  }
  animate();
}
