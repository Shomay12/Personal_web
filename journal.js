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
        place: 'What the Mountains Left',
        meta: 'Perspective · Presence · Memory',
        summary: 'Why the most meaningful destination is not a coordinate on a map, but the state of mind discovered along the way.'
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
          type: 'photo-pair',
          items: [
            {
              src: 'blog/DSC05123.JPG',
              caption: 'Morning in the Himalayas — Garhwal mountain range.'
            },
            {
              src: 'blog/panar_bugyal.JPG',
              caption: 'Pannar Bugyal — high-altitude alpine meadows en route to Rudranath.'
            }
          ]
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
        ]
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
        kicker: 'Epilogue · What the Mountains Left With Me',
        title: 'A Memory I Will Carry With Me',
        prose: [
          'Looking back, I do not think the most important part of this trip was the number of places we visited. It was not simply the distance we travelled on the motorcycle, the kilometres we walked, or the temples we reached. It was the change in perspective that came from experiencing all of them together.',
          'There is a difference between reading about the mountains and standing among them. There is a difference between hearing about a pilgrimage and walking the trail yourself. And there is a difference between thinking about peace and experiencing a moment in which you genuinely feel it.',
          'The journey reminded me that life is not only about moving forward. It is also about noticing where you are while you move. We spend so much time trying to become something: more successful, more knowledgeable, more capable, more accomplished. There is nothing inherently wrong with ambition. I have my own goals, and I intend to work towards them. But I do not want to become so occupied with reaching the next destination that I forget to experience the journey.',
          'You cannot walk a mountain trail by jumping straight to the end. You have to experience the distance between where you begin and where you want to arrive. Some stretches are beautiful. Some are exhausting. Some make you question whether you have enough energy to continue. But each step is part of the same journey.',
          'When I remember this summer trip, I will remember Ritesh and the roads we travelled together. I will remember the rivers of Devprayag and Rudraprayag, the visit to Maa Dhari Devi, the mountain towns along our route, and our arrival at Sagar village after a long day on the motorcycle. I will remember waking up at five in the morning to begin the trek, the meadows of Pung Bugyal, Lyu Ti Bugyal, and Pannar Bugyal, sitting through the evening and morning aarti at Rudranath with Nanda Devi on the horizon, and the night ride through Joshimath into Badrinath.',
          'I went into the mountains with a friend, a motorcycle, and a destination in mind. I returned with something less tangible, but perhaps more valuable: a renewed appreciation for nature, a deeper sense of gratitude, and the memory of a peace I hope to find again.'
        ],
        quote: 'You can spend your life trying to reach somewhere, but do not forget to be present when you finally arrive. Sometimes, the most meaningful destination is not a place on a map — it is the state of mind you discover along the way.',
        closingNote: 'Written from the memory of a summer journey through Uttarakhand — from Noida to Dehradun, through the Garhwal Himalayas, to Rudranath and Badrinath. Some journeys end when you return home. Others continue quietly within you.'
      }
    ]
};

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
