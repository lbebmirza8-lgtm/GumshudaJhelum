// ============================================================
// GUMSHUDA JHELUM — site data
// To add a real photo for an era: set that era's "img" field to
// a path like "images/hydaspes-now.jpg" and drop the file in /images.
// Leave "img" empty ("") to keep the stylized placeholder.
// ============================================================
const SITES = [
  {
    id: 'hydaspes',
    tag: 'THE RIVER · 326 BC',
    title: 'Hydaspes',
    sub: "Where Alexander crossed, and nearly didn't win",
    lore: [
      "The Jhelum River carried a different name in Alexander the Great's time: the Hydaspes. In 326 BC, on its banks, his army fought King Porus (Raja Puru) of the Paurava kingdom in one of the hardest battles of his campaign — the only recorded time Alexander faced war elephants in open battle.",
      "Alexander crossed the flooded river at night, further upstream, to outflank Porus's army — a monsoon storm covering the noise of his crossing. The fighting that followed was brutal enough that it's what finally convinced Alexander's own exhausted army to refuse to march further into India."
    ],
    note: "Nearby, Alexander founded a city named Bucephala, in memory of his horse Bucephalus, who died here — a detail almost nobody in Jhelum today has heard.",
    eras: [
      { id: 'now', label: 'NOW', color: '#4a6fa5', img: 'images/hydaspes-now.jpg', caption: 'A quiet stretch of riverbank, GT Road traffic passing a few hundred metres off.' },
      { id: '326bc', label: '326 BC', color: '#7c8f6e', img: 'images/hydaspes-326bc.jpg', caption: 'Two armies, a flooded river, and the elephants of Porus waiting on the far bank.' }
    ],
    quiz: { q: "What was the Jhelum River called in Alexander's time?", options: ["The Indus", "The Hydaspes", "The Chenab"], correct: 1, fb: "Hydaspes — the Greek name for the same river that runs through the city today." }
  },
  {
    id: 'tillajogian',
    tag: 'THE HILL · AGE UNRECORDED',
    title: 'Tilla Jogian',
    sub: 'The mountain of the vanishing ascetics',
    lore: [
      "On a ridge in Jhelum district sits Tilla Jogian — 'the hill of the Jogis' — an old complex of temples and monastic cells built by and for Nath yogi ascetics, once counted among the most important sites of that tradition in the region.",
      "Local tradition holds that Guru Nanak, founder of Sikhism, visited and debated with the yogis here. Whatever the exact history, the hilltop was, for centuries, a real destination for pilgrims and wandering ascetics — today most of it stands empty, known mainly to hikers."
    ],
    note: "Precise founding dates for Tilla Jogian aren't well documented — treat its age as 'ancient, undated' rather than a fixed year.",
    eras: [
      { id: 'now', label: 'NOW', color: '#4a6fa5', img: 'images/tillajogian-now.jpg', caption: 'Weathered stone cells, mostly silent, visited more by trekkers than pilgrims.' },
      { id: 'then', label: 'IN ITS TIME', color: '#7c8f6e', img: 'images/tillajogian-then.jpg', caption: 'A hilltop of ascetics, fires, and travelers climbing for a blessing or a debate.' }
    ],
    quiz: { q: "Tilla Jogian was historically a site connected to which tradition?", options: ["Nath yogi ascetics", "Buddhist monks", "Zoroastrian fire temples"], correct: 0, fb: "Nath yogi ascetics — the name itself means 'hill of the Jogis.'" }
  },
  {
    id: 'nandana',
    tag: 'THE FORT · EARLY 11th CENTURY',
    title: 'Nandana Fort',
    sub: 'Where a scientist measured the Earth without leaving the hill',
    lore: [
      "Nandana Fort sits on a hilltop in the Salt Range near Baghanwala village, Pind Dadan Khan tehsil — ruled by Hindu Shahi kings until Mahmud of Ghazni took it in the early 11th century.",
      "It's what happened after that matters most: the polymath Al-Biruni used Nandana as his observation point to calculate the Earth's circumference — measuring a nearby hill's height and the dip of the horizon from its summit, arriving at a figure close to the modern value, entirely from one location."
    ],
    note: "The site is sometimes called the 'Al-Biruni Point' for this reason — a hilltop fort doubling as one of history's most quietly important scientific instruments.",
    eras: [
      { id: 'now', label: 'NOW', color: '#4a6fa5', img: 'images/nandana-now.jpg', caption: 'Wind-worn ruins on the Salt Range, only recently reopened to visitors.' },
      { id: '1020', label: '~1020 AD', color: '#7c8f6e', img: 'images/nandana-1020.jpg', caption: 'A scientist alone on a hilltop, measuring the horizon with the fort walls behind him.' }
    ],
    quiz: { q: "What did Al-Biruni famously calculate at Nandana Fort?", options: ["Earth's circumference", "The speed of the Jhelum River's current", "The height of the Himalayas"], correct: 0, fb: "Earth's circumference — measured on-site, without needing to travel between distant points." }
  },
  {
    id: 'rohtas',
    tag: 'THE FORT · 1541 AD',
    title: 'Rohtas Fort',
    sub: 'Built to stop an emperor from coming home',
    lore: [
      "Sher Shah Suri began building Rohtas Fort in 1541 — not against a foreign invader, but to control the restive Gakhar tribes of the Potohar region and block the route the exiled Mughal emperor Humayun might use to return to India.",
      "It worked well enough to still be standing: Rohtas is one of the best-preserved 16th-century forts on the subcontinent, and a UNESCO World Heritage Site — about 21km from Jhelum, right off the GT Road everyone driving Lahore–Islamabad already passes."
    ],
    note: "It's a UNESCO site minutes off a road millions of people drive every year, and most of that traffic never stops.",
    eras: [
      { id: 'now', label: 'NOW', color: '#4a6fa5', img: 'images/rohtas-now.jpg', caption: 'Massive sandstone walls, mostly empty of visitors on an ordinary weekday.' },
      { id: '1541', label: '1541 AD', color: '#a8632d', img: 'images/rohtas-1541.jpg', caption: "Fresh-cut stone going up fast, garrisoned to hold a contested frontier." }
    ],
    quiz: { q: "Why did Sher Shah Suri actually build Rohtas Fort?", options: ["To trade salt", "To control local tribes and block Humayun's return", "As a summer palace"], correct: 1, fb: "To subdue the Gakhar tribes and block Emperor Humayun's route back into India." }
  },
  {
    id: 'khewra',
    tag: 'THE MINE · FORMALISED 1872',
    title: 'Khewra Salt Mines',
    sub: 'Older than the empire that mapped it',
    lore: [
      "In Khewra, Jhelum district's Pind Dadan Khan tehsil, sits one of the largest and oldest salt mines in the world — layers of rock salt laid down long before recorded history, mined informally for centuries before the British formally surveyed and developed it starting in 1872.",
      "It's the source of the pink Himalayan salt sold worldwide — most buyers have never connected it to Jhelum district at all."
    ],
    note: "Local legend credits the mine's discovery to Alexander's own soldiers, who noticed their horses licking salt-streaked rocks — a good story, but folklore rather than a documented fact.",
    eras: [
      { id: 'now', label: 'NOW', color: '#4a6fa5', img: 'images/khewra-now.jpg', caption: 'A working mine and tourist site, its salt shipped to kitchens worldwide.' },
      { id: '1872', label: '1872 AD', color: '#d98a8a', img: 'images/khewra-1872.jpg', caption: 'British engineers formally surveying deposits already ancient by then.' }
    ],
    quiz: { q: "The Alexander's-horses story about Khewra's discovery is:", options: ["A documented historical fact", "Local legend, not a confirmed record", "From a British survey report"], correct: 1, fb: "Local legend — a great story to tell, just not one with a paper trail." }
  },
  {
    id: 'victoriabridge',
    tag: 'THE BRIDGE · 1878',
    title: 'Victoria Bridge',
    sub: "Pakistan's longest railway bridge, still carrying trains",
    lore: [
      "Built between 1873 and 1878 by Irish engineer William St. John Galwey, Victoria Bridge carries the railway across the Jhelum River between Jhelum city and Sarai Alamgir — 50 iron-truss spans on concrete piers, still in daily use.",
      "It's widely cited as the longest railway bridge in Pakistan — 19th-century engineering built to move British colonial troops and trade, that quietly became one of the busiest crossings on the country's rail network."
    ],
    note: "There's a second, differently located bridge also called 'Victoria Bridge' further along the Jhelum River near Khewra — easy to mix the two up, worth being precise about which one you mean.",
    eras: [
      { id: 'now', label: 'NOW', color: '#4a6fa5', img: 'images/victoriabridge-now.jpg', caption: 'Iron trusses still bearing freight and passenger trains after 150 years.' },
      { id: '1878', label: '1878 AD', color: '#a8632d', img: 'images/victoriabridge-1878.jpg', caption: 'Fresh iron spans rising over the Jhelum, built for an empire\'s railway.' }
    ],
    quiz: { q: "Who engineered Victoria Bridge?", options: ["William St. John Galwey", "Sher Shah Suri", "Al-Biruni"], correct: 0, fb: "William St. John Galwey — the same engineer who later built the Empress Bridge over the Sutlej." }
  },
  {
    id: 'mangladam',
    tag: 'THE DAM · 1967',
    title: 'Mangla Dam',
    sub: 'The dam that built a diaspora',
    lore: [
      "About 30km upstream of Jhelum city, Mangla Dam was built on the Jhelum River between 1961 and 1967 — one of the largest dams in the world, still generating over 1,000 MW of power and irrigating over a million acres.",
      "Its human cost was enormous: more than 280 villages and the towns of Mirpur and Dadyal were submerged, displacing over 100,000 people. Many were resettled with UK work permits as compensation — a decision that seeded what's now one of Britain's largest Pakistani diaspora communities."
    ],
    note: "It's a rare case where one infrastructure project near Jhelum directly reshaped a community on another continent.",
    eras: [
      { id: 'now', label: 'NOW', color: '#4a6fa5', img: 'images/mangladam-now.jpg', caption: 'A vast reservoir and working power station, feeding electricity across Pakistan.' },
      { id: '1967', label: '1967 AD', color: '#d98a8a', img: 'images/mangladam-1967.jpg', caption: 'Villages being cleared and resettled as the reservoir rises behind the new embankment.' }
    ],
    quiz: { q: "What large-scale migration did Mangla Dam's construction help set off?", options: ["Migration to the Gulf states", "Migration of displaced families to the UK", "Migration to Karachi"], correct: 1, fb: "Migration to the UK — a large share of Britain's Pakistani community traces its roots to the Mirpur area flooded by Mangla Dam." }
  }
];

function progressKey(id){ return 'gumshudaJhelum_' + id; }
function getProgress() {
  let done = 0;
  SITES.forEach(s => { try { if (localStorage.getItem(progressKey(s.id)) === '1') done++; } catch(e){} });
  return done;
}
function updatePassport() {
  const done = getProgress();
  const pct = Math.round((done / SITES.length) * 100);
  document.getElementById('passportFill').style.width = pct + '%';
  document.getElementById('passportCount').textContent = done + ' / ' + SITES.length + ' sealed';
  const passportEl = document.querySelector('.passport');
  if (passportEl) passportEl.classList.toggle('complete', done === SITES.length);
}

function eraFrame(era) {
  return `<img src="${era.img}" alt="${era.label}" loading="lazy" onerror="this.style.display='none'">`;
}

const SITE_SIGNIFICANCE = {
  hydaspes:      "One of only a handful of battles where Alexander the Great faced war elephants in open combat \u2014 and by most accounts, the battle that finally stopped his advance into Asia. One of history\u2019s most consequential single days, fought on ground most people in Jhelum walk past without a second glance.",
  tillajogian:   "Once one of the most important sites for Nath yogi ascetics in the region, and reputedly visited by Guru Nanak himself \u2014 woven into the origin stories of more than one spiritual tradition, now visited mostly by hikers who don\u2019t know its history.",
  nandana:       "The site of one of the earliest on-site measurements of Earth\u2019s circumference \u2014 one scientist, one hilltop, centuries before satellites. A milestone in the history of science that most science textbooks never mention happened here.",
  rohtas:        "A UNESCO World Heritage Site \u2014 one of only six in Pakistan \u2014 sitting 21km from a city that mostly doesn\u2019t visit it, right off a highway millions of people drive every year.",
  khewra:        "One of the largest and oldest salt mines on Earth, and the source of pink Himalayan salt found in kitchens worldwide \u2014 most people who cook with it have never heard of Jhelum district at all.",
  victoriabridge:"Widely cited as Pakistan\u2019s longest railway bridge \u2014 150-year-old ironwork still carrying trains today, crossed daily by passengers who never look down at what they\u2019re riding on.",
  mangladam:     "One of the largest dams in the world, and the direct reason hundreds of thousands of people in Britain today trace their family history to this one stretch of the Jhelum River \u2014 a local landmark with a genuinely global human footprint."
};

function renderSites() {
  const root = document.getElementById('sites');
  root.innerHTML = SITES.map(site => `
    <section class="site" id="section-${site.id}">
      <div class="site-inner">
        <div>
          <div class="site-visual" id="visual-${site.id}">
            ${site.eras.map((e,i) => `<div class="era-frame ${i===0?'active':''}" data-era="${e.id}">${eraFrame(e)}<div class="site-caption">${e.caption}</div></div>`).join('')}
          </div>
          <div class="slider-row">
            <div class="slider-label"><span>${site.eras[0].label}</span><span>${site.eras[site.eras.length-1].label}</span></div>
            <input type="range" class="era-slider" min="0" max="${site.eras.length-1}" value="0" step="1" data-site="${site.id}">
          </div>
        </div>
        <div>
          <p class="site-tag">${site.tag}</p>
          <h2 class="site-title">${site.title}</h2>
          <p class="site-sub">${site.sub}</p>
          ${site.lore.map(p => `<p class="site-lore">${p}</p>`).join('')}
          <div class="site-significance">
            <p class="site-significance-label">GLOBAL SIGNIFICANCE, LOCAL SILENCE</p>
            <p class="site-significance-text">${SITE_SIGNIFICANCE[site.id] || ''}</p>
          </div>
          <button class="aside-toggle" data-aside="${site.id}">&#9672; A note from the Chronicler</button>
          <p class="aside-note" id="aside-${site.id}">${site.note}</p>
          <div class="actions-row">
            <button class="btn" data-quiz-open="${site.id}">Test what you just read</button>
          </div>
          <div class="quiz" id="quiz-${site.id}">
            <p class="quiz-q">${site.quiz.q}</p>
            ${site.quiz.options.map((opt,i) => `<button class="quiz-opt" data-site="${site.id}" data-idx="${i}">${opt}</button>`).join('')}
            <p class="quiz-fb" id="quizfb-${site.id}">${site.quiz.fb}</p>
            <p class="sigil" id="sigil-${site.id}">✦ Sealed into your Heritage Passport.</p>
          </div>
        </div>
      </div>
    </section>
  `).join('');
}

function wireEraSliders() {
  document.querySelectorAll('.era-slider').forEach(slider => {
    slider.addEventListener('input', () => {
      const site = SITES.find(s => s.id === slider.dataset.site);
      const frames = document.querySelectorAll('#visual-' + site.id + ' .era-frame');
      frames.forEach((f, i) => f.classList.toggle('active', i === Number(slider.value)));
    });
  });
}

function wireAside() {
  document.querySelectorAll('.aside-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('aside-' + btn.dataset.aside).classList.toggle('open');
    });
  });
}

function wireQuiz() {
  document.querySelectorAll('[data-quiz-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('quiz-' + btn.dataset.quizOpen).classList.toggle('open');
    });
  });
  document.querySelectorAll('.quiz-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const siteId = opt.dataset.site;
      const idx = Number(opt.dataset.idx);
      const site = SITES.find(s => s.id === siteId);
      const allOpts = document.querySelectorAll(`.quiz-opt[data-site="${siteId}"]`);
      allOpts.forEach(o => o.style.pointerEvents = 'none');
      if (idx === site.quiz.correct) {
        opt.classList.add('correct');
        try { localStorage.setItem(progressKey(siteId), '1'); } catch(e){}
        document.getElementById('sigil-' + siteId).classList.add('show');
        updatePassport();
      } else {
        opt.classList.add('wrong');
        allOpts[site.quiz.correct].classList.add('correct');
      }
      document.getElementById('quizfb-' + siteId).classList.add('show');
    });
  });
}

renderSites();
wireEraSliders();
wireAside();
wireQuiz();
updatePassport();

function wireTimeline() {
  const nodes = document.querySelectorAll('.timeline-node');
  nodes.forEach((node, i) => {
    const site = SITES[i];
    if (!site) return;
    node.setAttribute('role', 'button');
    node.setAttribute('tabindex', '0');
    node.setAttribute('aria-label', 'Jump to ' + site.title);
    function scrollToSite() {
      const target = document.getElementById('section-' + site.id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    node.addEventListener('click', scrollToSite);
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSite(); }
    });
  });
}
wireTimeline();

// ============================================================
// LOCAL CHRONICLER — rule-based FAQ, no network
// ============================================================
const CHRONICLE_QA = {
  general: [
    {
      triggers: ["who are you", "what are you", "chronicler"],
      answer: "I am the Chronicler — a narrator for this journal, not a real person from history. Ask me about any of the seven places below."
    },
    {
      triggers: ["how many", "sites", "places"],
      answer: "Seven, spanning over two thousand years — from the Battle of the Hydaspes in 326 BC to Mangla Dam in 1967."
    }
  ],
  hydaspes: [
    {
      triggers: ["hydaspes", "alexander", "porus", "elephant"],
      answer: "Hydaspes was the Greek name for this very river. In 326 BC, Alexander crossed it upstream at night during a monsoon storm to outflank King Porus, whose army fought back with war elephants — the only time Alexander faced them in open battle."
    },
    {
      triggers: ["bucephala", "horse", "bucephalus"],
      answer: "Alexander founded a city here named Bucephala, after his horse Bucephalus, who died in or after this battle. Almost nobody in Jhelum has heard that detail today."
    }
  ],
  tillajogian: [
    {
      triggers: ["tilla jogian", "yogi", "jogi", "guru nanak"],
      answer: "Tilla Jogian means 'hill of the Jogis' — an old complex built for Nath yogi ascetics. Local tradition holds Guru Nanak visited and debated with the yogis here, though the site's exact founding date isn't well documented."
    }
  ],
  nandana: [
    {
      triggers: ["nandana", "al-biruni", "biruni", "earth", "circumference"],
      answer: "At Nandana Fort in the early 11th century, the polymath Al-Biruni measured the Earth's circumference using only the height of a nearby hill and the dip of the horizon — no long-distance travel needed, unlike earlier methods."
    }
  ],
  rohtas: [
    {
      triggers: ["rohtas", "sher shah", "humayun", "unesco"],
      answer: "Sher Shah Suri built Rohtas Fort starting in 1541 — not against a foreign army, but to control the Gakhar tribes and block Emperor Humayun's route back into India. It's now a UNESCO World Heritage Site, 21km from Jhelum."
    }
  ],
  khewra: [
    {
      triggers: ["khewra", "salt", "pink salt", "mine"],
      answer: "Khewra holds one of the world's largest and oldest salt mines — mined informally for centuries before the British formally developed it from 1872. The 'Alexander's horses discovered it' story is local legend, not documented fact."
    }
  ],
  victoriabridge: [
    {
      triggers: ["victoria bridge", "railway bridge", "galwey"],
      answer: "Victoria Bridge was built 1873-1878 by Irish engineer William St. John Galwey — 50 iron-truss spans across the Jhelum River, still carrying trains today, and widely cited as Pakistan's longest railway bridge."
    }
  ],
  mangladam: [
    {
      triggers: ["mangla", "dam", "mirpur", "diaspora", "uk"],
      answer: "Mangla Dam, built 1961-1967, submerged over 280 villages and displaced 100,000+ people from the Mirpur area. Many were resettled with UK work permits — which is a real reason such a large share of Britain's Pakistani community traces back to this one dam."
    }
  ]
};

const CHRONICLE_SUGGESTIONS = {
  general: [
    "Who are you?",
    "How many sites are there?",
    "What happened at Hydaspes?",
    "Why does Mangla Dam matter?"
  ],
  hydaspes: [
    "What happened at Hydaspes?",
    "Who was King Porus?",
    "Tell me about Bucephala",
    "What about Alexander's horse?"
  ],
  tillajogian: [
    "What is Tilla Jogian?",
    "Who were the yogis?",
    "Did Guru Nanak visit?"
  ],
  nandana: [
    "What is Nandana Fort?",
    "What did Al-Biruni do here?",
    "How was Earth's circumference measured?"
  ],
  rohtas: [
    "Who built Rohtas Fort?",
    "Why did Sher Shah build it?",
    "Is it a UNESCO site?"
  ],
  khewra: [
    "What is Khewra known for?",
    "Is pink salt from here?",
    "Did Alexander discover the mine?"
  ],
  victoriabridge: [
    "When was Victoria Bridge built?",
    "Who was Galwey?",
    "Is it a railway bridge?"
  ],
  mangladam: [
    "What happened at Mangla Dam?",
    "How did it affect Mirpur?",
    "Why is there a UK diaspora?"
  ]
};

function initChronicler() {
  const fab = document.getElementById('chroniclerFab');
  const panel = document.getElementById('chroniclerPanel');
  const closeBtn = document.getElementById('chroniclerClose');
  const log = document.getElementById('chroniclerLog');
  const form = document.getElementById('chroniclerForm');
  const input = document.getElementById('chroniclerInput');
  const chips = document.getElementById('chroniclerChips');
  let currentSiteId = null;
  let greeted = false;

  function siteName() {
    const site = SITES.find(s => s.id === currentSiteId);
    return site ? site.title : 'one of the seven places';
  }

  function matchBucket(text, bucket) {
    if (!bucket) return null;
    for (let i = 0; i < bucket.length; i++) {
      const qa = bucket[i];
      for (let t = 0; t < qa.triggers.length; t++) {
        if (text.indexOf(qa.triggers[t]) !== -1) return qa.answer;
      }
    }
    return null;
  }

  function findChronicleAnswer(raw) {
    const text = String(raw).toLowerCase().trim();
    let answer = matchBucket(text, CHRONICLE_QA[currentSiteId]);
    if (answer) return answer;
    answer = matchBucket(text, CHRONICLE_QA.general);
    if (answer) return answer;
    const keys = Object.keys(CHRONICLE_QA);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key === 'general' || key === currentSiteId) continue;
      answer = matchBucket(text, CHRONICLE_QA[key]);
      if (answer) return answer;
    }
    return "I don't have an answer for that one yet — try asking about " + siteName() + ", or tap one of the suggested questions below.";
  }

  function appendMsg(role, text) {
    const el = document.createElement('div');
    el.className = 'chronicler-msg ' + (role === 'user' ? 'user' : 'bot');
    el.textContent = text;
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
  }

  function ask(question) {
    const q = String(question).trim();
    if (!q) return;
    appendMsg('user', q);
    appendMsg('bot', findChronicleAnswer(q));
  }

  function renderChips() {
    const list = CHRONICLE_SUGGESTIONS[currentSiteId] || CHRONICLE_SUGGESTIONS.general;
    chips.innerHTML = '';
    list.forEach(label => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chronicler-chip';
      btn.textContent = label;
      btn.addEventListener('click', () => ask(label));
      chips.appendChild(btn);
    });
  }

  function setOpen(open) {
    panel.classList.toggle('open', open);
    if (open) panel.removeAttribute('hidden');
    else panel.setAttribute('hidden', '');
    fab.setAttribute('aria-expanded', open ? 'true' : 'false');
    fab.setAttribute('aria-label', open ? 'Close The Chronicler' : 'Open The Chronicler');
    if (open) {
      if (!greeted) {
        appendMsg('bot', CHRONICLE_QA.general[0].answer);
        greeted = true;
      }
      renderChips();
      input.focus();
    }
  }

  fab.addEventListener('click', () => setOpen(!panel.classList.contains('open')));
  closeBtn.addEventListener('click', () => setOpen(false));
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = input.value;
    input.value = '';
    ask(q);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) setOpen(false);
  });

  const ratios = {};
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id.replace(/^section-/, '');
      ratios[id] = entry.isIntersecting ? entry.intersectionRatio : 0;
    });
    let bestId = null;
    let best = 0;
    Object.keys(ratios).forEach(id => {
      if (ratios[id] > best) {
        best = ratios[id];
        bestId = id;
      }
    });
    const next = best > 0.12 ? bestId : null;
    if (next !== currentSiteId) {
      currentSiteId = next;
      if (panel.classList.contains('open')) renderChips();
    }
  }, { threshold: [0, 0.12, 0.25, 0.4, 0.55, 0.7, 0.85, 1], rootMargin: '-18% 0px -42% 0px' });

  document.querySelectorAll('section.site').forEach(sec => observer.observe(sec));
  renderChips();
}

initChronicler();
