/**
 * ============================================================================
 * SHOMAY'S PERSONAL JOURNAL & DAILY LOG (journal.js)
 * ============================================================================
 *
 * HOW TO ADD A NEW POST (Code it anytime in ~30 seconds):
 * Simply add a new object at the TOP of the `JOURNAL_ENTRIES` array below.
 *
 * Supported fields (all media fields are optional — use only what you need):
 * {
 *   id: 'unique-slug',
 *   date: 'October 27, 2026',
 *   category: 'ai',          // 'ai' | 'data-science' | 'building' | 'life'
 *   title: 'Your post title',
 *   paragraphs: [
 *     'First paragraph of your daily update or technical notes...',
 *     'Second paragraph...'
 *   ],
 *   // OPTIONAL: Add 1 or more photos
 *   images: [
 *     { src: 'assets/images/your-photo.jpg', caption: 'Optional caption' }
 *   ],
 *   // OPTIONAL: Add an audio voice note or music/podcast clip (.mp3, .wav, .m4a)
 *   audio: {
 *     src: 'assets/audio/voice-note.mp3', // Leave empty '' to use built-in preview
 *     title: 'Voice Note — Late night thoughts on RAG evaluation',
 *     duration: '01:42'
 *   },
 *   // OPTIONAL: Add a video (.mp4, .webm) or animated capture (.gif)
 *   video: {
 *     src: 'assets/videos/demo.mp4',      // Or .gif path
 *     poster: 'assets/images/hottea.png',
 *     caption: 'Screen capture from today\'s build session'
 *   },
 *   // OPTIONAL: Add a code snippet or terminal log from today's work
 *   code: {
 *     lang: 'retrieval_eval.py',
 *     snippet: `from sklearn.ensemble import IsolationForest\n...`
 *   }
 * }
 * ============================================================================
 */

window.JOURNAL_ENTRIES = [
  {
    id: 'rag-chunking-retrieval-experiments',
    date: 'October 25, 2026',
    category: 'ai',
    title: 'Why naive chunking quietly breaks RAG pipelines (and what I changed in UniAssist)',
    paragraphs: [
      'Spent the last few evenings benchmarking retrieval quality on dense PDFs — lecture slides, syllabus handouts, and derivation-heavy chapters. When you split documents purely by fixed character counts, equations and proofs get sliced right down the middle. The embedding vector ends up representing half a premise and zero conclusion.',
      'Switched my ingestion pipeline to structure-aware semantic windowing with overlapping context headers, paired with dense sentence embeddings and FAISS inner-product search before passing context to Groq for low-latency synthesis. Precision on multi-step algorithmic questions jumped noticeably without touching the generator prompt.'
    ],
    code: {
      lang: 'retrieval_eval.py',
      snippet: `def retrieve_grounded_context(query: str, index, embedder, docs, top_k: int = 4, score_threshold: float = 0.62):
    q_vec = embedder.encode([query], normalize_embeddings=True)
    scores, indices = index.search(q_vec, top_k)
    
    grounded = [
        {"chunk": docs[idx], "similarity": float(score)}
        for score, idx in zip(scores[0], indices[0])
        if idx != -1 and score >= score_threshold
    ]
    return grounded`
    },
    audio: {
      src: '',
      title: 'Voice Note — Semantic chunk boundaries vs. cross-encoder reranking',
      duration: '01:28'
    }
  },
  {
    id: 'isolation-forest-time-series-notes',
    date: 'October 14, 2026',
    category: 'data-science',
    title: 'Detecting spending anomalies and seasonality in noisy personal finance data',
    paragraphs: [
      'Real-world transaction logs are messy. Unlike clean benchmark datasets, personal expenditure has heavy right-skewness: a rent payment or semester fee looks like a massive statistical outlier if you only look at global z-scores, while a subtle cluster of small unexpected charges slips right past.',
      'While working on the Finance Expenditure Tracker, I combined periodicity detection (to isolate recurring fixed commitments first) with an Isolation Forest trained on rolling window features—day-of-week cyclical encodings, category-relative ratios, and inter-arrival times. Cleaning the feature space mattered ten times more than tuning hyperparameters.'
    ],
    images: [
      {
        src: 'assets/images/finance_tracker.png',
        caption: 'Exploratory anomaly scoring and cash-flow projection interface from the Finance Expenditure Tracker.'
      }
    ],
    code: {
      lang: 'anomaly_pipeline.py',
      snippet: `features = df[['log_amount', 'category_zscore', 'days_since_last_tx', 'dow_sin', 'dow_cos']]
iso_forest = IsolationForest(n_estimators=200, contamination=0.03, random_state=42)
df['anomaly_score'] = iso_forest.fit_predict(features)`
    }
  },
  {
    id: 'mountains-and-mental-clarity',
    date: 'September 28, 2026',
    category: 'life',
    title: 'Stepping away from the terminal: cold air, high altitude, and perspective',
    paragraphs: [
      'When you spend weeks staring at loss curves, telemetry logs, and API schemas, your world shrinks to the size of a 14-inch screen. Going up into the mountains in Uttarakhand always resets my sense of scale.',
      'There is something grounding about walking for hours in freezing air where nothing is instant and every step requires steady pacing. Came back to Noida with a clear head and a notebook full of ideas for local-first AI tools.'
    ],
    images: [
      {
        src: 'assets/images/ukk.jpg',
        caption: 'Morning light in the Himalayas — Kedarnath, Uttarakhand.'
      },
      {
        src: 'assets/images/me4.jpg',
        caption: 'First snowfall in the woods.'
      }
    ]
  },
  {
    id: 'local-llms-and-encrypted-vaults',
    date: 'September 9, 2026',
    category: 'building',
    title: 'Building HotTea: running local models alongside AES-GCM encrypted vaults',
    paragraphs: [
      'Most AI browsers today route every page you read through remote telemetry pipelines. I wanted a local-first AI workspace where my browsing history, annotations, and model synthesis stay on my machine.',
      'Spent the week wiring local Ollama / llama.cpp inference streams into Flutter alongside client-side AES-GCM encrypted .tea vault files. Every response links back to the exact DOM paragraph it was extracted from.'
    ],
    video: {
      src: 'assets/images/hottea.png',
      isImagePreview: true,
      caption: 'HotTea workspace — side-by-side context grounding and local model inference.'
    },
    audio: {
      src: '',
      title: 'Audio Log — Local LLM inference vs. cloud fallback architecture',
      duration: '02:05'
    }
  },
  {
    id: 'sensor-telemetry-predictive-maintenance',
    date: 'August 22, 2026',
    category: 'data-science',
    title: 'Streaming vibration telemetry into a RandomForest classifier and min-heap scheduler',
    paragraphs: [
      'A machine learning model in isolation rarely solves an operational problem. In predictive maintenance, knowing a motor has a 0.84 failure probability is only half the pipeline—you also have to decide which machine gets serviced first when three alerts fire simultaneously.',
      'Paired a Scikit-learn RandomForest anomaly classifier with a custom priority queue (min-heap) in FastAPI that dynamically re-ranks equipment based on predicted degradation severity and thermal drift.'
    ],
    images: [
      {
        src: 'assets/images/industrial_monitoring.png',
        caption: 'Real-time sensor telemetry dashboard and priority queue dispatch monitor.'
      }
    ]
  }
];
