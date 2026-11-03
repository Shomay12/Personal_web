/**
 * ============================================================================
 * SHOMAY'S JOURNAL & "YouFineMeHere!!" STORY STORE (journal.js)
 * ============================================================================
 *
 * 1. `window.YOU_FINE_ME_HERE`: Powers the "YouFineMeHere!!" section (beyond
 *    the Journal) with the interactive "A Journey Beyond the Mountains" story
 *    and media from the `blog/` directory.
 * 2. `window.JOURNAL_ENTRIES`: Powers the Journal section (recent post on top,
 *    older entries tucked inside the collapsible drawer at the bottom).
 * ============================================================================
 */

window.YOU_FINE_ME_HERE = {
  id: 'a-journey-beyond-the-mountains',
  date: 'October 27, 2026',
  category: 'life',
  title: 'A Journey Beyond the Mountains',
  subtitle: 'Six Days, One Motorcycle, Endless Roads, and a Peace I Cannot Fully Explain',
  heroOpening: 'Some journeys take you to places. Others bring you closer to yourself.',
  stats: [
    { label: 'Duration', value: '6 Days' },
    { label: 'Mode', value: '1 Motorcycle + Foot' },
    { label: 'Rudranath Trek', value: '23 km Alpine Trail' },
    { label: 'Region', value: 'Garhwal Himalayas, Uttarakhand' }
  ],
  routeStages: [
    {
      id: 'chapter-intro',
      day: 'Prologue',
      place: 'Noida → Uttarakhand',
      meta: 'The Departure · Six Days on the Road',
      summary: 'Leaving familiar routines behind with my friend Ritesh and a motorcycle headed for the Garhwal Himalayas.'
    },
    {
      id: 'chapter-day-1',
      day: 'Day 01',
      place: 'Noida → Dehradun',
      meta: 'Gateway to the Mountains',
      summary: 'Crossing the plains toward the foothills and letting the anticipation of unknown mountain roads settle in.'
    },
    {
      id: 'chapter-day-2',
      day: 'Day 02',
      place: 'Rishikesh → Sagar Village',
      meta: 'Devprayag · Maa Dhari Devi · Chamoli',
      summary: 'Following the sacred river confluences of the Ganga, offering prayers at Maa Dhari Devi, and riding deep into Chamoli.'
    },
    {
      id: 'chapter-day-3',
      day: 'Day 03',
      place: '23 km Trek to Rudranath',
      meta: 'Pung, Lyu Ti & Pannar Bugyal',
      summary: 'Starting at 5 a.m. on foot through high-altitude alpine meadows to reach Rudranath Temple in time for evening aarti.'
    },
    {
      id: 'chapter-day-4',
      day: 'Day 04',
      place: 'Rudranath & Saraswati Kund',
      meta: 'Morning Aarti · Nanda Devi',
      summary: 'Standing before Nanda Devi after morning prayers, walking to Saraswati Kund, and descending back to Sagar village.'
    },
    {
      id: 'chapter-day-5',
      day: 'Day 05',
      place: 'Sagar Village → Badrinath',
      meta: 'Nandprayag · Joshimath · Badrinath',
      summary: 'Back on the motorcycle through dramatic Himalayan river valleys, arriving in Badrinath at 9 p.m.'
    },
    {
      id: 'chapter-reflections',
      day: 'Reflections',
      place: 'Eudaimonia & The Craft',
      meta: 'Flourishing · Presence · Work Till Now',
      summary: 'How the stillness of the Himalayas shaped an understanding of Eudaimonia — human flourishing through purposeful craft, presence, and the journey of building till now.'
    }
  ],
  chapters: [
    {
      id: 'chapter-intro',
      kicker: 'Prologue · Uttarakhand Summer Log',
      title: 'Leaving the Familiar World Behind',
      prose: [
        'There are journeys we plan, and then there are journeys that change something within us without asking for permission. My summer trip to the mountains of Uttarakhand was one of those journeys.',
        'It was a six-day adventure with my friend Ritesh, a motorcycle, the winding roads of the Himalayas, ancient temples, quiet villages, and a trek that tested our physical limits while giving us something far more valuable in return: a sense of peace that is difficult to put into words.',
        'I had travelled through mountains before, but this journey felt different. Perhaps it was the places we visited, the silence we encountered, or the simple fact that sometimes, when you leave the familiar world behind, you begin to see things differently. This is the story of that journey.'
      ],
      media: {
        type: 'photo',
        isPortrait: true,
        src: 'blog/DSC05123.JPG',
        caption: 'Morning in the Himalayas — Garhwal mountain range.'
      }
    },
    {
      id: 'chapter-day-1',
      kicker: 'Day 01 · Noida to Dehradun',
      title: 'The Gateway to the Mountains',
      prose: [
        'The journey began in Noida. Leaving the familiar surroundings of the city behind, I travelled towards Dehradun, the gateway to the mountains we were about to explore. The first day was mostly about getting there, preparing for what lay ahead, and letting the excitement of the coming days settle in.',
        'There is something about the thought of a mountain journey that makes ordinary things feel different. The anticipation of unknown roads, the possibility of unexpected experiences, and the freedom of travelling without needing to control every moment create a feeling that is difficult to replicate in everyday life.',
        'Ritesh and I had six days ahead of us. We had a destination in mind, but we were about to discover that the most memorable parts of a journey are often the ones that happen between destinations. We were ready to begin.'
      ],
      quote: 'The most memorable parts of a journey are often the ones that happen between destinations.'
    },
    {
      id: 'chapter-day-2',
      kicker: 'Day 02 · Rishikesh · Devprayag · Rudraprayag · Sagar Village',
      title: 'Following the Roads of the Himalayas & Maa Dhari Devi',
      prose: [
        'The next morning, we set out on our motorcycle. Our route took us towards Rishikesh, where we stopped to refuel before continuing into the mountains. From there, the landscape gradually transformed. The familiar roads gave way to winding mountain highways, deep valleys, and rivers that seemed to have carved their own paths through the enormous landscape.',
        'We travelled through Devprayag, Rudraprayag, and Srinagar Garhwal. For me, the beauty of Uttarakhand is not simply in its mountains. It is in the way everything seems connected: the rivers, the villages, the forests, the roads, and the spiritual traditions that have existed here for generations.',
        'At Devprayag, the Alaknanda and Bhagirathi rivers meet to form the Ganga. At Rudraprayag, another sacred confluence marks the meeting of the Alaknanda and Mandakini rivers. These places remind you that nature does not need to announce its greatness. It simply exists, and sometimes that is enough to make you stop and look.'
      ],
      subheading: 'At Maa Dhari Devi',
      subprose: [
        'When we reached Maa Dhari Devi Temple, we stopped to offer our prayers. The atmosphere felt different from the roads we had been travelling on. There was a sense of devotion in the surroundings, and for a moment, the journey became less about covering distance and more about being present.',
        'We participated in the prayers and then continued towards our destination. The road carried us through Karnaprayag and onwards into the Chamoli region. As we moved farther into the mountains, the landscape seemed to become more intimate. The towns grew quieter, the roads more winding, and the mountains increasingly present in every direction.',
        'We passed through the Chamoli area and reached Gopeshwar before continuing towards Sagar village. By the time we arrived in the evening, exhaustion had caught up with us. We were tired from the long ride, the changing roads, and the hours spent navigating the mountains. There was little left to do except eat, rest, and prepare ourselves for the day that would demand the most from us. We went to sleep early. The real adventure was waiting for us in the morning.'
      ],
      media: {
        type: 'video',
        src: 'blog/GX012564.mov',
        title: 'Mountain Roads & River Valleys — Motion Log 01',
        caption: 'Winding highways through Devprayag, Rudraprayag, and the Chamoli mountain roads.'
      }
    },
    {
      id: 'chapter-day-3',
      kicker: 'Day 03 · 5:00 AM Departure · 23 Kilometres on Foot',
      title: 'The Trek to Rudranath: Through Alpine Meadows into the Heart of the Himalayas',
      prose: [
        'At around 5 a.m., we got up and began preparing for the trek. Our destination was Rudranath Temple, one of the sacred temples associated with the Panch Kedar pilgrimage in Uttarakhand. The trek was approximately 23 kilometres along our route, through a landscape of forests, meadows, mountain ridges, and increasingly open views of the Himalayas.',
        'We started early because we knew the journey would be demanding. What I did not fully understand at that moment was that the trek would challenge more than our physical endurance. It would also change the way I experienced time, effort, and silence.'
      ],
      waypoints: [
        {
          name: 'Pung, Lyu Ti & Pannar Bugyal',
          tag: 'High-Altitude Alpine Meadows',
          text: 'As we moved away from the village, the world we knew began to disappear behind us. The roads and familiar sounds of everyday life were replaced by mountain trails, fresh air, and the steady rhythm of our footsteps. Bugyal is the local word for a high-altitude alpine meadow — opening up across the mountains like enormous natural clearings, offering views that seem almost too vast to absorb all at once.'
        },
        {
          name: 'Pitradhar & Panch Ganga',
          tag: 'High Ridge & Mountain Crossings',
          text: 'By this point, the physical effort had become a significant part of the journey. Every stretch of the trail represented something we had to work for. You feel the effort in your body. You remember the distance. You understand, in a very direct way, that the experience could not have existed without the journey itself.'
        },
        {
          name: 'Rudranath Temple',
          tag: 'Panch Kedar Sanctuary · Evening Aarti',
          text: 'The temple appeared within a landscape that felt almost untouched by the urgency of the world below. In the evening, I sat through the aarti at the temple. For a while, I was not thinking about my future, my responsibilities, or my ambitions. I was present. That was enough.'
        }
      ],
      quote: 'The mountain does not care about your schedule. It does not respond to your ambitions. It asks only that you pay attention to where you are and where you place your next step.',
      subprose: [
        'Walking through these places made me realise how rarely we allow ourselves to experience something without simultaneously thinking about what comes next. In ordinary life, we are always moving towards another task, another goal, another achievement. Even when we accomplish something, our minds have usually already moved on to the next thing.',
        'But on a mountain trail, progress becomes much simpler. You take a step. Then another. You breathe, you walk, and you continue.',
        'Some places are beautiful because of what you see. Others become beautiful because of what you feel when you are there. Rudranath was both. We had travelled from Noida, ridden through mountain towns, arrived at Sagar village, and walked for hours to reach this place. We had food, rested for the night, and I went to sleep physically exhausted but inwardly content.'
      ],
      media: {
        type: 'photo',
        src: 'blog/panar_bugyal.JPG',
        caption: 'Pannar Bugyal — vast high-altitude alpine meadows en route to Rudranath Temple.'
      }
    },
    {
      id: 'chapter-day-4',
      kicker: 'Day 04 · Morning Aarti · Nanda Devi · Saraswati Kund',
      title: 'Morning Prayers, Nanda Devi, and a Feeling of Peace',
      prose: [
        'The next morning, we returned to the temple for the aarti. There is something special about experiencing the same place twice, especially when the circumstances are different. The previous evening had carried the weight of our long trek and the satisfaction of finally reaching our destination. The morning felt quieter. We were already there, and we did not need to think about the distance we had travelled to arrive. We could simply experience the place.',
        'After the prayers, I looked towards the mountains. The sight of Nanda Devi rising in the Himalayan landscape was deeply moving. The scale of the mountains made ordinary human concerns seem smaller, not because they were meaningless, but because they were only a small part of something much larger.',
        'I stood there, taking in the view. I felt peaceful. I felt grateful. And I felt, in a way that is difficult to explain, connected to something beyond my everyday understanding of the world. For me, that feeling was spiritual.',
        'I cannot claim to understand divine energy, nor can I explain precisely what happens within a person when they experience a moment like that. But I know how I felt standing there, surrounded by the Himalayas after the trek, having offered my prayers. I felt loved by the divine. Not because I had accomplished something extraordinary or earned a reward, but because, in that moment, I felt a quiet sense of belonging. The mountains did not need to tell me anything. The silence itself seemed sufficient.'
      ],
      subheading: 'The Walk to Saraswati Kund',
      subprose: [
        'After spending time at the temple, we continued towards Saraswati Kund. The landscape remained magnificent, and the journey gave us more time to experience the mountains away from the noise and pace of ordinary life.',
        'I began to appreciate something that is easy to overlook: peace does not necessarily come from having answers. Sometimes, it comes from being able to sit with questions without feeling compelled to resolve them immediately. Not everything had to be converted into an explanation. Not every experience needed to become a conclusion. Some moments could simply be lived.',
        'After visiting Saraswati Kund, we made our way back to Sagar village. The return journey carried a different feeling from the climb. We had completed the trek, experienced the temple, and spent time in a place that had left a lasting impression on us. But the trip was not over. We still had another destination ahead.'
      ],
      media: {
        type: 'video',
        src: 'blog/Timeline 1.MOV',
        title: 'High Himalayas & Temple Stillness — Motion Log 02',
        caption: 'High-altitude vistas from Rudranath, Nanda Devi on the horizon, and the trail.'
      }
    },
    {
      id: 'chapter-day-5',
      kicker: 'Day 05 · Nandprayag · Vishnuprayag · Joshimath · Badrinath',
      title: 'From Sagar Village to Badrinath',
      prose: [
        'By evening, we began our journey towards Badrinath. After the experience at Rudranath, returning to the motorcycle and setting out on the mountain roads felt almost surreal. Only a short time earlier, we had been walking through high-altitude meadows and sitting in the temple for the morning aarti. Now, we were moving through the mountains again.',
        'Our route took us through the region around Nandprayag, Vishnuprayag, and Joshimath as we continued towards Badrinath. The roads through this part of Uttarakhand are a reminder of how deeply human life is connected to the geography of the Himalayas. Towns and villages exist along the river valleys, roads wind between enormous slopes, and the mountains remain a constant presence throughout the journey. Every bend offered a new view. Every stretch of road brought us closer to our destination.',
        'By approximately 9 p.m., we reached Badrinath. After the long journey, arriving there felt like entering another chapter of the pilgrimage. Badrinath is one of the most significant Hindu pilgrimage destinations, surrounded by the dramatic landscape of the Garhwal Himalayas.',
        'The contrast between the two journeys stayed with me. Rudranath had been an experience of walking, endurance, silence, and reaching a temple after hours on a mountain trail. Badrinath was the next destination in our journey, reached through the winding roads and river valleys that connect the sacred places of Uttarakhand. Both experiences belonged to the same landscape, yet each offered something different.'
      ]
    },
    {
      id: 'chapter-reflections',
      kicker: 'Epilogue · Eudaimonia & What the Mountains Left',
      title: 'Presence, Purpose, and the Work Till Now',
      prose: [
        'Looking back, I do not think the most important part of this trip was the number of places we visited. It was not simply the distance we travelled on the motorcycle, the kilometres we walked, or the temples we reached. It was the shift in perspective that came from experiencing all of them together.',
        'There is a world of difference between reading about stillness and standing inside it. There is a difference between studying the concept of endurance and feeling your own breath thin on a steep Himalayan trail. And there is a difference between pursuing success as an endless sequence of finish lines and understanding what classical philosophy termed Eudaimonia — true human flourishing realized through purposeful, virtuous activity and continuous, deliberate striving.',
        'The journey reminded me that life is not only about moving forward. It is also about noticing where you are while you move. We spend so much time trying to become something: more accomplished, more capable, more recognized. There is nothing inherently wrong with ambition; I have high standards for myself and intend to build meaningful things. But when ambition becomes an anxious rush to get to the next destination, we miss the very substance of what we are doing.',
        'The 23-kilometre trek to Rudranath made that vividly clear. You cannot walk an alpine trail by jumping straight to the end. You have to experience the full distance between where you start and where you hope to arrive. Some stretches are beautiful. Some are exhausting. Some test your resolve. But each step is part of the same unfolding journey.'
      ],
      subheading: 'Eudaimonia in the Craft: Lessons for My Work Today',
      subprose: [
        'When I returned from the high meadows of Pannar and the silence of Nanda Devi back to Noida, that insight changed how I sit down at my desk every single morning. In the world of Artificial Intelligence, Data Science, and modern software, the default culture often rewards superficial speed: rushing out fragile wrappers, celebrating vanity metrics, or optimizing for short-term visibility. But Eudaimonia demands craftsmanship. It insists that the pursuit of excellence is inseparable from patience, intellectual honesty, and deep respect for the underlying mechanisms.',
        'That philosophy directly anchors the work I have chosen to build till now. In UniAssist, it meant looking past naive document slicing and engineering structure-aware semantic chunking and dense FAISS vector indexing from the ground up, so students could genuinely trust the grounded context of their coursework. In HotTea, it meant refusing the convenience of cloud telemetry to build a local-first browser with on-device LLM inference and client-side AES-GCM encrypted vaults, putting privacy and user sovereignty first. In Duezy, it meant ensuring that conversational payment negotiation agents were anchored by an authoritative double-entry accounting ledger backend in FastAPI rather than loose estimates. And in my ongoing AI engineering and automation work at AK Online, it means treating every pipeline, webhook, and agent as an exercise in architectural reliability.',
        'Striving for Eudaimonia does not mean avoiding difficult problems or expecting smooth roads. If anything, the mountain taught me that meaningful flourishing requires embracing demanding terrain without panic. You study the distribution, you debug the failure, you refine the feature space, and you place the next step with complete intention. The discipline required to climb a Himalayan ridge is the exact same discipline required to engineer robust, high-signal systems.',
        'I went into the mountains with a friend, a motorcycle, and a destination in mind. I returned with something far more lasting: a renewed reverence for nature, an abiding sense of gratitude, and the realization that the work of our lives is not a race to a distant summit. It is the character, presence, and purpose we bring to every single line of code and every single day we are given.'
      ],
      quote: 'Eudaimonia is not a trophy awaiting you at the summit. It is the quiet excellence and presence you bring to every step of the climb — whether trekking through alpine meadows or engineering systems from first principles.',
      closingNote: 'Written from the memory of a summer journey through Uttarakhand — from Noida to Dehradun, through the Garhwal Himalayas, to Rudranath and Badrinath. Some journeys end when you return home. Others continue quietly in the work you do every day.'
    }
  ]
};

window.JOURNAL_ENTRIES = [
  {
    id: 'ritesh-portfolio-business-web',
    date: 'November 3, 2026',
    category: 'building',
    title: 'Building a modern portfolio & business showcase: performance-focused web architecture',
    subtitle: 'Engineering a bespoke digital showcase for Ritesh with zero runtime dependencies, fluid CSS layout, and hardware-accelerated scroll reveals',
    images: [
      {
        src: 'assets/images/ritesh_project_web.svg',
        caption: 'Ritesh Portfolio & Business Web — Architecture overview, Lighthouse 100/100 performance scores, and modular design system.'
      }
    ],
    paragraphs: [
      'Many modern business portfolios and developer showcases suffer from severe template bloat: multi-megabyte JavaScript runtime bundles, sluggish mobile rendering, fragile third-party animation libraries, and unpredictable Cumulative Layout Shifts (CLS). When building the personal brand and commercial platform for Ritesh, the engineering objective was uncompromising: deliver a visually captivating, conversion-driven digital presence built on a strict zero-dependency performance budget.',
      '## Fluid Layout & Tokenized CSS Architecture',
      'Rather than importing heavy component frameworks, the platform is structured with semantic HTML5 elements and modular CSS custom properties for effortless design token management. A fluid grid and flexbox layout was engineered from first principles, ensuring elements scale seamlessly across smartphone screens, tablets, laptops, and ultra-wide desktop monitors without layout reflows or horizontal jitter.',
      'Typography and spacing leverage CSS mathematical clamp functions—such as clamp(1.1rem, 2.5vw, 1.75rem)—to ensure optimal typographic rhythm and effortless legibility regardless of screen density or viewport dimensions.',
      '## Hardware-Accelerated Native Motion with Zero Dependencies',
      'Instead of bundling bulky animation suites like GSAP or Framer Motion, scroll-driven storytelling and micro-interactions are powered by a lightweight native IntersectionObserver harness. Elements reveal themselves with subtle GPU-accelerated CSS transforms (translate3d) and opacity transitions only as they enter the visible viewport. Crucially, each element unobserves immediately upon reveal, keeping the browser main thread completely idle during active scrolling.',
      '## Conversion Funnel & Commercial Impact',
      'The site architecture is deliberately organized around clear client conversion paths: structured service capabilities, proof-of-work project breakdowns, and frictionless contact touchpoints that guide visitors from discovery to direct business inquiries. The outcome is a pristine commercial presentation achieving 100/100 Lighthouse performance metrics, sub-50ms paint times, and complete device responsiveness.'
    ],
    code: {
      lang: 'motion_observer.js',
      snippet: `// Native hardware-accelerated scroll reveal observer (0 dependencies)
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Unobserve immediately to free up browser main thread
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.showcase-card, .service-item, .lead-metric').forEach(el => {
  revealObserver.observe(el);
});`
    },
    project: {
      id: 'ritesh_web',
      name: 'Ritesh Portfolio & Business Web',
      tag: 'Portfolio & Commercial Web Showcase',
      summary: 'A high-performance portfolio and commercial web platform engineered with clean semantic HTML, modular responsive CSS architecture, zero-dependency native motion, and frictionless client inquiry funnels.',
      techStack: 'HTML5 · CSS3 (Custom Properties) · Vanilla JavaScript · Responsive UI/UX · Web Performance',
      liveUrl: '',
      githubUrl: 'https://github.com/Shomay12/Ritesh-project-web'
    }
  },
  {
    id: 'rag-chunking-retrieval-experiments',
    date: 'October 25, 2026',
    category: 'ai',
    title: 'Why naive chunking quietly breaks RAG pipelines (and what I changed in UniAssist)',
    subtitle: 'Benchmarking retrieval precision on dense engineering syllabi with semantic windowing and FAISS',
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
    },
    project: {
      id: 'uniassist',
      name: 'UniAssist',
      tag: 'Dense Retrieval & RAG Pipeline',
      summary: 'A Retrieval-Augmented Generation system that grounds LLM responses in verified academic syllabi and textbooks with dense FAISS vector search and sub-second Groq token streaming.',
      techStack: 'Python · FAISS · Sentence-Transformers · RAG · Groq LLM · LangChain · Streamlit',
      liveUrl: 'https://uniassist-shomayyy.streamlit.app/',
      githubUrl: 'https://github.com/Shomay12/UniAssist'
    }
  },
  {
    id: 'enforcing-double-entry-invariants-in-ai-agents',
    date: 'October 20, 2026',
    category: 'ai',
    title: 'Enforcing double-entry invariants in autonomous AI payment recovery agents',
    subtitle: 'Why language models cannot be trusted with unstructured balances and how Duezy enforces mathematical correctness',
    paragraphs: [
      'Large language models excel at empathetic conversational negotiation and customer intent classification, but they are fundamentally non-deterministic state machines. Allowing an LLM to directly calculate installment balances, waive fee penalties, or update payment ledgers in unstructured prose is a recipe for silent financial drift.',
      'In Duezy, I decoupled the conversational negotiation engine from the authoritative financial state machine. The conversational agent operates as an untrusted proposal generator bounded by strict underwriting rules. Every agreed installment schedule must pass through a strict double-entry ledger backend implemented in FastAPI and PostgreSQL, where total debits must mathematically balance total credits down to the integer cent before state mutation. Combined with HMAC SHA-256 signature verification on incoming Razorpay webhooks, the system achieves autonomous recovery without compromising financial integrity.'
    ],
    images: [
      {
        src: 'assets/images/duezy.png',
        caption: 'Duezy invoice recovery timeline and conversational installment proposal validation engine.'
      }
    ],
    code: {
      lang: 'ledger_service.py',
      snippet: `def post_settlement_installment(db: Session, invoice_id: str, debit_acc: str, credit_acc: str, amount_cents: int):
    # Enforce immutable double-entry invariant
    assert amount_cents > 0, "Installment amount must be strictly positive"
    entry = JournalEntry(invoice_id=invoice_id, timestamp=datetime.utcnow())
    entry.lines = [
        PostingLine(account_id=debit_acc, debit=amount_cents, credit=0),
        PostingLine(account_id=credit_acc, debit=0, credit=amount_cents)
    ]
    # Invariant: debits == credits
    assert sum(l.debit for l in entry.lines) == sum(l.credit for l in entry.lines), "Ledger imbalance detected"
    db.add(entry)
    db.commit()`
    },
    project: {
      id: 'duezy',
      name: 'Duezy',
      tag: 'Conversational AI & Double-Entry Ledger',
      summary: 'Automated invoice recovery platform pairing an authoritative FastAPI double-entry accounting ledger with a conversational negotiation agent and cryptographic Razorpay webhooks.',
      techStack: 'FastAPI · Python · Conversational AI · PostgreSQL · Razorpay Webhooks · Flutter · Docker',
      liveUrl: '',
      githubUrl: 'https://github.com/Shomay12/Duezy'
    }
  },
  {
    id: 'isolation-forest-time-series-notes',
    date: 'October 14, 2026',
    category: 'data-science',
    title: 'Detecting spending anomalies and seasonality in noisy personal finance data',
    subtitle: 'Isolating recurring commitments before training rolling Isolation Forests on cash-flow telemetry',
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
    },
    project: {
      id: 'finance_tracker',
      name: 'Finance Expenditure Intelligence',
      tag: 'Anomaly Detection & Forecasting',
      summary: 'End-to-end applied data science pipeline detecting spending outliers via unsupervised Isolation Forests, classifying merchants with supervised NLP, and projecting cash flow.',
      techStack: 'Python · Scikit-learn · Isolation Forest · Pandas · NumPy · Time-Series Forecasting · Plotly · Streamlit',
      liveUrl: '',
      githubUrl: 'https://github.com/Shomay12/Finance_Expenditure_tracker'
    }
  },
  {
    id: 'local-llms-and-encrypted-vaults',
    date: 'September 9, 2026',
    category: 'building',
    title: 'Building HotTea: running local models alongside AES-GCM encrypted vaults',
    subtitle: 'Streaming on-device Ollama/llama.cpp inference into Flutter with DOM grounding and client-side encryption',
    paragraphs: [
      'Most AI browsers today route every page you read through remote telemetry pipelines. I wanted a local-first AI workspace where my browsing history, annotations, and model synthesis stay on my machine.',
      'Spent the week wiring local Ollama / llama.cpp inference streams into Flutter alongside client-side AES-GCM encrypted .tea vault files. Every response links back to the exact DOM paragraph it was extracted from.'
    ],
    video: {
      src: 'assets/images/hottea.png',
      isImagePreview: true,
      caption: 'HotTea workspace — side-by-side context grounding and local model inference.'
    },
    code: {
      lang: 'crypto_vault.dart',
      snippet: `Future<Uint8List> sealTeaVault(Uint8List payload, SecretKey secretKey) async {
  final algorithm = AesGcm.with256Bits();
  final nonce = algorithm.newNonce();
  final secretBox = await algorithm.encrypt(payload, secretKey: secretKey, nonce: nonce);
  return Uint8List.fromList([...nonce, ...secretBox.cipherText, ...secretBox.mac.bytes]);
}`
    },
    audio: {
      src: '',
      title: 'Audio Log — Local LLM inference vs. cloud fallback architecture',
      duration: '02:05'
    },
    project: {
      id: 'hottea',
      name: 'HotTea',
      tag: 'Privacy-First AI Browser & Local Workspace',
      summary: 'Open-source, privacy-first AI browser and local LLM workspace built with Flutter, integrating on-device Ollama/llama.cpp inference with client-side AES-GCM encrypted vaults.',
      techStack: 'Flutter · Dart · Ollama / Local LLM · Gemini API · AES-GCM Encryption · Cross-Platform',
      liveUrl: 'https://shomay12.github.io/hottea/',
      githubUrl: 'https://github.com/Shomay12/hottea'
    }
  },
  {
    id: 'sensor-telemetry-predictive-maintenance',
    date: 'August 22, 2026',
    category: 'data-science',
    title: 'Streaming vibration telemetry into a RandomForest classifier and min-heap scheduler',
    subtitle: 'Pairing supervised failure classification with algorithmic priority dispatch for industrial machine fleets',
    paragraphs: [
      'A machine learning model in isolation rarely solves an operational problem. In predictive maintenance, knowing a motor has a 0.84 failure probability is only half the pipeline—you also have to decide which machine gets serviced first when three alerts fire simultaneously.',
      'Paired a Scikit-learn RandomForest anomaly classifier with a custom priority queue (min-heap) in FastAPI that dynamically re-ranks equipment based on predicted degradation severity and thermal drift.'
    ],
    images: [
      {
        src: 'assets/images/industrial_monitoring.png',
        caption: 'Real-time sensor telemetry dashboard and priority queue dispatch monitor.'
      }
    ],
    code: {
      lang: 'dispatch_heap.py',
      snippet: `class MaintenanceScheduler:
    def __init__(self):
        self.heap = []  # (-severity_score, timestamp, machine_id)

    def enqueue_alert(self, machine_id: str, failure_prob: float, thermal_drift: float):
        severity = (0.7 * failure_prob) + (0.3 * min(thermal_drift / 45.0, 1.0))
        heapq.heappush(self.heap, (-severity, time.time(), machine_id))`
    },
    project: {
      id: 'industrial_monitoring',
      name: 'Industrial Machine Monitoring',
      tag: 'Predictive Maintenance ML',
      summary: 'Predictive maintenance system streaming ESP32 vibration and thermal telemetry into a Scikit-learn RandomForest classifier and an algorithmic min-heap priority queue.',
      techStack: 'Python · Scikit-learn (RandomForest) · FastAPI · Priority Queue DSA · MongoDB · ESP32 Telemetry · TypeScript',
      liveUrl: '',
      githubUrl: 'https://github.com/Shomay12/Industrial-Machine-Monitoring-System'
    }
  },
  {
    id: 'meta-graph-webhook-orchestration',
    date: 'August 5, 2026',
    category: 'building',
    title: 'Scaling Meta Graph webhook routers: idempotent event queues & Traefik TLS',
    subtitle: 'Architecting high-concurrency Instagram comment-to-DM triggers with cryptographic verification',
    paragraphs: [
      'Building automated messaging systems on top of Meta’s Graph API introduces strict production challenges: incoming webhook traffic spikes unpredictably during viral posts, and Meta’s servers retry deliveries if your edge endpoint does not respond with HTTP 200 within a tight timeout.',
      'For ReplyNest, I designed an event ingestion worker in Node.js behind a Traefik reverse proxy with automated Let’s Encrypt TLS. Every incoming payload is first validated against the x-hub-signature-256 HMAC secret, immediately checked against a PostgreSQL idempotency cache by message ID, and acknowledged within 400 milliseconds before background workers execute keyword intent triggers.'
    ],
    images: [
      {
        src: 'assets/images/replynest.png',
        caption: 'ReplyNest messaging automation interface and high-concurrency webhook ingestion pipeline.'
      }
    ],
    code: {
      lang: 'webhook_verifier.js',
      snippet: `export function verifyMetaSignature(req, buf) {
  const signature = req.headers['x-hub-signature-256'];
  if (!signature) throw new Error('Missing x-hub-signature-256 header');
  const hmac = crypto.createHmac('sha256', process.env.META_APP_SECRET);
  hmac.update(buf);
  const expected = \`sha256=\${hmac.digest('hex')}\`;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    throw new Error('Invalid HMAC signature - payload tampered');
  }
}`
    },
    project: {
      id: 'replynest',
      name: 'ReplyNest',
      tag: 'Messaging Automation & Webhook Infrastructure',
      summary: 'Multi-tenant messaging automation infrastructure built on Meta Graph APIs with high-concurrency webhook routing, keyword intent matching, and Dockerized microservices.',
      techStack: 'Node.js · PostgreSQL · Meta Graph API · OAuth 2.0 · Docker · Traefik',
      liveUrl: 'http://replynest.tech/#auth',
      githubUrl: 'https://github.com/Shomay12'
    }
  },
  {
    id: 'hierarchical-syllabus-search-indexing',
    date: 'July 18, 2026',
    category: 'data-science',
    title: 'Sub-10ms syllabus retrieval: structuring 10,000+ topics into a fast knowledge index',
    subtitle: 'Transforming sprawling exam curricula into an edge-cached acyclic knowledge graph with Supabase and Next.js',
    paragraphs: [
      'Competitive civil services syllabi are notoriously complex: hundreds of sub-clauses, historical cross-references, and thousands of previous years questions (PYQs) scattered across PDF gazettes without unified schema or hierarchical indexing.',
      'I built OpenUPSC to organize this corpus into an acyclic knowledge graph in Supabase. By pre-indexing text nodes with trie prefix trees and generating inverted full-text search vectors, queries resolve in sub-10 milliseconds directly on the edge in Next.js, eliminating distraction and cognitive load for aspirants.'
    ],
    images: [
      {
        src: 'assets/images/openupsc.svg',
        caption: 'OpenUPSC structured curriculum hierarchy and instant topic search interface.'
      }
    ],
    code: {
      lang: 'topic_search.sql',
      snippet: `CREATE INDEX idx_topics_search ON syllabus_topics 
USING GIN (to_tsvector('english', coalesce(code, '') || ' ' || title || ' ' || description));

SELECT id, code, title, ts_rank(search_vector, query) AS rank
FROM syllabus_topics, to_tsquery('english', 'governance & ethics') query
WHERE search_vector @@ query
ORDER BY rank DESC LIMIT 15;`
    },
    project: {
      id: 'openupsc',
      name: 'OpenUPSC',
      tag: 'Structured Knowledge Index & Study Platform',
      summary: 'High-performance syllabus indexing platform built with Next.js, TypeScript, and Supabase, organizing thousands of curriculum topics and historical questions into a fast, distraction-free interface.',
      techStack: 'Next.js · TypeScript · Supabase · TailwindCSS · PostgreSQL · Vercel',
      liveUrl: 'https://open-upsc.vercel.app',
      githubUrl: 'https://github.com/Shomay12/OpenUpsc'
    }
  }
];
