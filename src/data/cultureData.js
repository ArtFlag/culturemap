// The Culture Map dataset based on Erin Meyer's research and book
// "The Culture Map: Breaking Through the Invisible Boundaries of Global Business" (2014)

export const REGIONS = [
  'All',
  'Europe',
  'North America',
  'Asia-Pacific',
  'Latin America',
  'Middle East & Africa'
]

export const SCALES = [
  {
    id: 'communicating',
    number: 1,
    name: 'Communicating',
    shortName: 'Communication',
    question: 'How do people express ideas and transmit meaning?',
    leftPole: 'Low-Context',
    rightPole: 'High-Context',
    leftDesc: 'Good communication is precise, simple, and clear. Messages are expressed and understood at face value. Repetition is appreciated and anything important is put in writing.',
    rightDesc: 'Communication is sophisticated, nuanced, and layered. Messages are spoken and read between the lines. Messages are often implied rather than plainly stated ("reading the air").',
    color: '#3b82f6', // blue
    bgLight: 'bg-blue-50 text-blue-700 border-blue-200',
    accentColor: 'blue',
    icon: 'MessageSquare',
    practicalTip: 'When working with high-context colleagues, listen to what is NOT said and pay attention to body language. When high-context people work with low-context cultures, be direct, transparent, and recap key points in writing without assuming shared understanding.',
    linguisticMarkers: {
      left: 'Explicit, direct statements, bullet points, written recaps ("As agreed today..."), summary emails.',
      right: 'Subtle cues, hints, shared context, metaphor, reading unspoken atmosphere ("Kuuki wo yomu" in Japan).'
    }
  },
  {
    id: 'evaluating',
    number: 2,
    name: 'Evaluating',
    shortName: 'Feedback',
    question: 'How is negative feedback delivered and received?',
    leftPole: 'Direct Negative Feedback',
    rightPole: 'Indirect Negative Feedback',
    leftDesc: 'Negative feedback is frank, blunt, and honest. Critiques are delivered standalone without softening. Upgraders (words like "totally", "completely", "absolutely") are common.',
    rightDesc: 'Negative feedback is soft, subtle, and diplomatic. Critiques are cushioned in positive messages or delivered in private. Downgraders (words like "sort of", "maybe", "slightly") are used.',
    color: '#ef4444', // red
    bgLight: 'bg-red-50 text-red-700 border-red-200',
    accentColor: 'red',
    icon: 'AlertCircle',
    practicalTip: 'Beware of the American "positive feedback sandwich" (praising first, slipping negative feedback in the middle, praising at the end). Dutch or French colleagues may only remember the compliments and miss the criticism, while Asians may feel humiliated if criticized publicly.',
    linguisticMarkers: {
      left: 'Upgraders: "absolutely unacceptable", "totally wrong", "completely unprofessional". Feedback given in front of others.',
      right: 'Downgraders: "kind of", "sort of", "a little bit", "food for thought", "could perhaps consider". Private delivery.'
    }
  },
  {
    id: 'persuading',
    number: 3,
    name: 'Persuading',
    shortName: 'Persuasion',
    question: 'How do you build arguments and convince others?',
    leftPole: 'Principles-First (Deductive)',
    rightPole: 'Applications-First (Inductive)',
    leftDesc: 'Individuals trained to first develop the theoretical framework, concepts, and underlying principles before arriving at conclusions or practical applications (Descartes style).',
    rightDesc: 'Individuals trained to begin with a fact, case study, practical example, or bottom-line conclusion, and generalize principles later (Bacon / Anglo-Saxon empirical style).',
    color: '#8b5cf6', // purple
    bgLight: 'bg-purple-50 text-purple-700 border-purple-200',
    accentColor: 'purple',
    icon: 'Lightbulb',
    practicalTip: 'When presenting to French, Italian, or German managers, start with the conceptual framework, method, and background before showing the tool. To US, British, or Dutch audiences, start with the executive summary and concrete business case.',
    linguisticMarkers: {
      left: '"Why does this work?", theoretical models, methodology, rigorous logic from first principles.',
      right: '"How does it work in practice?", executive summary, case studies, concrete action steps, "the bottom line".'
    }
  },
  {
    id: 'leading',
    number: 4,
    name: 'Leading',
    shortName: 'Leadership & Power',
    question: 'How is power, status, and authority perceived?',
    leftPole: 'Egalitarian',
    rightPole: 'Hierarchical',
    leftDesc: 'The ideal boss is a facilitator among equals. Flat organizational structures. Subordinates can disagree openly with the boss and bypass hierarchical channels.',
    rightDesc: 'The ideal boss is a strong director who leads from the front. Steep hierarchical pyramids. Status matters deeply and communication honors the chain of command.',
    color: '#f59e0b', // amber
    bgLight: 'bg-amber-50 text-amber-700 border-amber-200',
    accentColor: 'amber',
    icon: 'Crown',
    practicalTip: 'In egalitarian cultures (Denmark, Netherlands, Sweden), copying your boss\'s boss on an email is normal. In hierarchical cultures (China, Japan, India, Nigeria), bypassing your immediate manager is considered a serious breach of protocol.',
    linguisticMarkers: {
      left: 'First-name basis across all ranks, open doors, minimal status symbols, self-directed teams.',
      right: 'Formal titles (Mr., Director, Professor), seating arrangements by rank, deferential posture to elders/seniors.'
    }
  },
  {
    id: 'deciding',
    number: 5,
    name: 'Deciding',
    shortName: 'Decision-Making',
    question: 'How are organizational decisions made?',
    leftPole: 'Consensual',
    rightPole: 'Top-Down',
    leftDesc: 'Decisions are made by group consensus. The process takes longer upfront as all stakeholders must align, but implementation is swift once agreed (e.g. Ringi system in Japan).',
    rightDesc: 'Decisions are made by the individual leader. Decisions are made quickly and flexibly, but can change frequently as new input emerges during execution.',
    color: '#10b981', // emerald
    bgLight: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentColor: 'emerald',
    icon: 'Vote',
    practicalTip: 'Notice the fascinating paradox: Japan is Hierarchical in Leading, yet Consensual in Deciding! The United States is Egalitarian in Leading, but relatively Top-Down in Deciding (the boss makes the final call).',
    linguisticMarkers: {
      left: 'Informal pre-meetings (Nemawashi), unanimous buy-in, thorough consultations, fixed decisions once sealed.',
      right: 'Leader acts as executive decider, swift agility, rapid pivoting, decisions treated as iterative hypotheses.'
    }
  },
  {
    id: 'trusting',
    number: 6,
    name: 'Trusting',
    shortName: 'Trust Building',
    question: 'How do colleagues and business partners build trust?',
    leftPole: 'Task-Based (Cognitive)',
    rightPole: 'Relationship-Based (Affective)',
    leftDesc: 'Trust is built through work and performance: doing good work, being reliable, meeting deadlines. Professional relationships are easily dropped if business changes.',
    rightDesc: 'Trust is built through emotional connection, meals, drinks, and personal bonding. You don\'t do business until you build an affective mutual bond (e.g. Guanxi in China).',
    color: '#06b6d4', // cyan
    bgLight: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    accentColor: 'cyan',
    icon: 'Handshake',
    practicalTip: 'In relationship-based cultures (Brazil, Saudi Arabia, China, India), skipping dinner or rushing into negotiations on day one damages your prospects. Spending 2 hours over lunch is not wasted time; it is the real work.',
    linguisticMarkers: {
      left: '"Business is business", strict division between personal and professional life, legal contracts dictate trust.',
      right: '"Friends do business with friends", shared meals, WhatsApp chats outside work hours, long-term personal loyalty.'
    }
  },
  {
    id: 'disagreeing',
    number: 7,
    name: 'Disagreeing',
    shortName: 'Conflict & Debate',
    question: 'How is open disagreement and conflict handled?',
    leftPole: 'Confrontational',
    rightPole: 'Avoids Confrontation',
    leftDesc: 'Disagreement and debate are positive for the team and organization. Open confrontation will not harm the relationship; playing devil\'s advocate is valued.',
    rightDesc: 'Disagreement and debate are negative for the team. Open confrontation breaks harmony, damages group cohesion, and causes others to lose face.',
    color: '#ec4899', // pink
    bgLight: 'bg-pink-50 text-pink-700 border-pink-200',
    accentColor: 'pink',
    icon: 'Swords',
    practicalTip: 'In France, Israel, or the Netherlands, vigorous verbal debate is seen as intellectual passion and respect. In Japan, Thailand, or Indonesia, stating "I disagree" in a meeting is perceived as an aggressive personal attack.',
    linguisticMarkers: {
      left: '"I completely disagree!", animated debate, interrupting to counter-argue, rigorous debate in team forums.',
      right: '"That could be interesting...", silence, nodding (meaning "I hear you", not "I agree"), raising concerns offline.'
    }
  },
  {
    id: 'scheduling',
    number: 8,
    name: 'Scheduling',
    shortName: 'Time & Punctuality',
    question: 'How is time, punctuality, and project workflow perceived?',
    leftPole: 'Linear-Time',
    rightPole: 'Flexible-Time',
    leftDesc: 'Project steps are approached sequentially. Focus is on one task at a time. Deadlines and promptness are strict. Promptness is a sign of respect and professionalism.',
    rightDesc: 'Project steps are approached in a fluid manner. Tasks are changed as opportunities arise. Many things are dealt with at once, and interruptions are accepted. Adaptability is prized.',
    color: '#eab308', // yellow
    bgLight: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    accentColor: 'yellow',
    icon: 'Clock',
    practicalTip: 'In linear cultures (Germany, Switzerland, Japan, US), a 10:00 AM meeting starts at 10:00 sharp and follows an agenda. In flexible cultures (India, Brazil, Kenya), meetings start when people gather, agendas evolve dynamically, and relationships override clocks.',
    linguisticMarkers: {
      left: 'Agendas sent in advance, 5-minute schedule buffers, strict deadlines, Gantt charts followed meticulously.',
      right: 'Fluid timetables, "Jugaad" / improvisation, relationships and real-time situations prioritize over static plans.'
    }
  }
]

export const COUNTRIES = [
  {
    id: 'us',
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    region: 'North America',
    scores: {
      communicating: 0.8,
      evaluating: 5.6,
      persuading: 9.2,
      leading: 2.8,
      deciding: 6.8,
      trusting: 1.2,
      disagreeing: 5.2,
      scheduling: 1.8
    },
    keyInsights: [
      'The most low-context culture in the world: explicit, literal, and fond of written recaps.',
      'Paradoxically indirect with negative feedback: famous for the "positive feedback sandwich" (3 positives for every 1 critique).',
      'Extremely applications-first: expects executive summaries, case studies, and concrete "bottom line" action points.',
      'Task-based trust: professional relationships form quickly ("friendly") but dissolve just as easily ("peach culture").'
    ],
    famousQuotes: 'In the US, we spell everything out. If you did not put it in writing or speak it plainly, you did not say it.',
    workplaceAdvice: 'Start presentations with the conclusion and concrete ROI. Never jump straight to negative feedback without positive affirmation, but keep general instructions crystal clear and in writing.'
  },
  {
    id: 'nl',
    code: 'NL',
    name: 'Netherlands',
    flag: '🇳🇱',
    region: 'Europe',
    scores: {
      communicating: 2.0,
      evaluating: 1.2,
      persuading: 7.2,
      leading: 1.0,
      deciding: 1.8,
      trusting: 2.0,
      disagreeing: 2.0,
      scheduling: 2.0
    },
    keyInsights: [
      'World-famous for Dutch directness: negative feedback is stated with blunt honesty and zero sugarcoating.',
      'One of the most egalitarian societies on Earth: the CEO will bike to work and eat in the staff canteen.',
      'Deeply consensual decision making rooted in the historic "Poldermodel" (everyone must cooperate to keep the dykes dry).',
      'Confrontational debate is welcomed as an intellectual search for truth, not personal hostility.'
    ],
    famousQuotes: 'In the Netherlands, calling an idea "stupid" or "pointless" is not an insult to the person; it is honesty.',
    workplaceAdvice: 'Do not take direct negative feedback personally. Prepare to debate ideas vigorously with anyone regardless of rank. Never try to pull rank or impose unilateral decisions.'
  },
  {
    id: 'fr',
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    region: 'Europe',
    scores: {
      communicating: 6.2,
      evaluating: 2.2,
      persuading: 1.5,
      leading: 6.5,
      deciding: 6.0,
      trusting: 6.2,
      disagreeing: 1.8,
      scheduling: 4.8
    },
    keyInsights: [
      'Archetype of Principles-First reasoning: Cartesian deductive logic dictates that theoretical framework comes before action.',
      'Very direct negative feedback paired with high-context nuance: blunt critiques are normal, but praise is given sparingly.',
      'Debate is an art form: disagreeing passionately is a sign of intellectual engagement and respect for the conversation.',
      'Hierarchical authority: the "Patron" holds decisive power and social status matters in corporate structures.'
    ],
    famousQuotes: 'In France, if you say "I agree with you", the conversation dies. We debate because it exercises the intellect.',
    workplaceAdvice: 'When pitching in France, explain "Why" and develop the underlying methodology before proposing solutions. Expect passionate challenge and pushback; do not treat it as disrespect.'
  },
  {
    id: 'de',
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    region: 'Europe',
    scores: {
      communicating: 1.8,
      evaluating: 2.5,
      persuading: 2.8,
      leading: 4.8,
      deciding: 3.0,
      trusting: 2.5,
      disagreeing: 2.8,
      scheduling: 0.8
    },
    keyInsights: [
      'Pinnacle of Linear-Time: punctuality is non-negotiable. Arriving 5 minutes early is considered on time.',
      'Objective feedback ("Sachlichkeit"): separation of factual analysis from personal emotion.',
      'Principles-first persuasion: engineering rigor, thorough technical background, and deep competence precede business action.',
      'Structured consensus: decisions take time to deliberate, but once fixed in a plan, deviation is strongly discouraged.'
    ],
    famousQuotes: 'Punctuality and structure reflect respect for other people\'s time and commitment.',
    workplaceAdvice: 'Show up on time, stick strictly to the agenda, provide deep technical data, and separate factual critiques from personal feelings.'
  },
  {
    id: 'jp',
    code: 'JP',
    name: 'Japan',
    flag: '🇯🇵',
    region: 'Asia-Pacific',
    scores: {
      communicating: 9.8,
      evaluating: 9.5,
      persuading: 7.5,
      leading: 7.8,
      deciding: 0.8,
      trusting: 7.8,
      disagreeing: 9.6,
      scheduling: 1.2
    },
    keyInsights: [
      'Highest-context culture in the world: reading the air ("Kuuki wo yomu") is an essential social and business skill.',
      'The famous Ringi & Nemawashi system: decisions require exhaustive bottom-up consensus before official sign-off.',
      'Social harmony ("Wa"): direct negative feedback and public disagreement are strictly avoided to preserve face.',
      'Linear scheduling: Japanese train precision applies to business timelines and schedules.'
    ],
    famousQuotes: 'In Japan, you listen not only to what is spoken, but to the silence between the words.',
    workplaceAdvice: 'Conduct private informal discussions (Nemawashi) before proposing anything in a formal meeting. Never criticize anyone in front of their peers, and watch for polite hesitation that indicates disagreement.'
  },
  {
    id: 'cn',
    code: 'CN',
    name: 'China',
    flag: '🇨🇳',
    region: 'Asia-Pacific',
    scores: {
      communicating: 9.0,
      evaluating: 8.5,
      persuading: 7.8,
      leading: 9.0,
      deciding: 8.8,
      trusting: 9.2,
      disagreeing: 8.8,
      scheduling: 7.8
    },
    keyInsights: [
      'Guanxi (关系): Business is built entirely on reciprocal personal trust, dinners, and long-term human connections.',
      'Holistic thinking: Asian holistic cognitive style connects macro-picture contexts rather than isolated parts.',
      'Preserving "Face" (Mianzi): Direct confrontation or public criticism causes catastrophic loss of face.',
      'Hierarchical & Top-Down: The leader has final unquestioned authority, and junior members show deference.'
    ],
    famousQuotes: 'First we become friends, then we do business together for a lifetime.',
    workplaceAdvice: 'Invest substantial time in shared meals, tea ceremonies, and relationship building. Never put a Chinese counterpart on the spot in front of colleagues.'
  },
  {
    id: 'gb',
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    region: 'Europe',
    scores: {
      communicating: 3.2,
      evaluating: 6.8,
      persuading: 8.0,
      leading: 3.5,
      deciding: 5.0,
      trusting: 3.0,
      disagreeing: 6.0,
      scheduling: 2.5
    },
    keyInsights: [
      'Masters of the Downgrader: phrases like "with the greatest respect" often mean "I think you are completely wrong".',
      'Low-context yet rich in irony and understatement: when a Brit says "That is quite good", it may mean disappointing.',
      'Applications-first persuasion: practical pragmatism, empirical evidence, and case studies work best.',
      'Avoids sharp confrontation: conflicts are navigated with polite humor, self-deprecation, and diplomatic hedging.'
    ],
    famousQuotes: 'When a British colleague says "I hear what you say", it often means "I disagree and do not wish to discuss it further".',
    workplaceAdvice: 'Decode British downgraders carefully. Listen for subtleties under polite humor, and avoid coming across as aggressive or boastful.'
  },
  {
    id: 'in',
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    region: 'Asia-Pacific',
    scores: {
      communicating: 8.2,
      evaluating: 7.5,
      persuading: 6.8,
      leading: 8.2,
      deciding: 8.0,
      trusting: 8.5,
      disagreeing: 7.8,
      scheduling: 8.5
    },
    keyInsights: [
      'Fluid Flexible-Time: famous for "Jugaad" (creative problem-solving through adaptability and agility).',
      'Relationship-based trust: family inquiries, shared chai, and warm personal bonds are central to working life.',
      'Hierarchical respect: deference to seniority and executive hierarchy is ingrained.',
      'High-context non-verbal communication: the subtle Indian head bobble can mean affirmation, understanding, or polite listening.'
    ],
    famousQuotes: 'In India, a relationship is not built through an email exchange; it is built through tea, empathy, and shared time.',
    workplaceAdvice: 'Build personal rapport before talking business. In project management, build in regular check-ins and recognize that deadlines may be fluid if circumstances shift.'
  },
  {
    id: 'il',
    code: 'IL',
    name: 'Israel',
    flag: '🇮🇱',
    region: 'Middle East & Africa',
    scores: {
      communicating: 2.0,
      evaluating: 0.8,
      persuading: 5.0,
      leading: 1.5,
      deciding: 5.5,
      trusting: 3.5,
      disagreeing: 0.6,
      scheduling: 4.0
    },
    keyInsights: [
      'Dugri culture: speaking frankly, directly, and fearlessly without diplomatic camouflage.',
      'The most confrontational on the disagreeing scale: aggressive intellectual debate is a sign of passion, respect, and intellect.',
      'Extremely egalitarian: anyone from junior intern to senior engineer can challenge the CEO loudly in any meeting.',
      'Direct negative feedback: critiques are voiced instantly and vigorously.'
    ],
    famousQuotes: 'Dugri means cutting through the polite nonsense and speaking straight from the gut.',
    workplaceAdvice: 'Do not be intimidated by loud voices or direct challenges; they are a sign of interest, not hostility. Speak up clearly, state your case, and stand your ground.'
  },
  {
    id: 'br',
    code: 'BR',
    name: 'Brazil',
    flag: '🇧🇷',
    region: 'Latin America',
    scores: {
      communicating: 7.5,
      evaluating: 7.8,
      persuading: 3.8,
      leading: 6.8,
      deciding: 7.2,
      trusting: 8.8,
      disagreeing: 6.8,
      scheduling: 8.2
    },
    keyInsights: [
      'Deeply relationship-based: warmth, personal chemistry, and emotional connection precede transactional contracts.',
      'Flexible-Time: agendas are guidelines; interpersonal interactions and emergent opportunities take precedence.',
      'Indirect negative feedback: critique is cushioned gently to avoid hurting personal affection and pride.',
      'Principles-first persuasion: influenced by Latin Roman legal and philosophical traditions.'
    ],
    famousQuotes: 'For friends, everything; for enemies, the law; for strangers, nothing.',
    workplaceAdvice: 'Never dive straight into the spreadsheet. Spend time chatting about life, family, and hobbies over a long coffee or lunch.'
  },
  {
    id: 'dk',
    code: 'DK',
    name: 'Denmark',
    flag: '🇩🇰',
    region: 'Europe',
    scores: {
      communicating: 1.5,
      evaluating: 3.0,
      persuading: 6.8,
      leading: 0.8,
      deciding: 1.5,
      trusting: 1.8,
      disagreeing: 3.2,
      scheduling: 1.5
    },
    keyInsights: [
      'World leader in egalitarian leadership: minimal power distance, flat workplace autonomy, and Janteloven mindset.',
      'Consensual decision-making: the team expects to be consulted on decisions affecting their work.',
      'Task-based trust: trust is earned by reliable delivery and professional competence.',
      'Direct communication: clear, frank, and low-context clarity.'
    ],
    famousQuotes: 'In Danish workplaces, the boss manages by asking questions, not by barking orders.',
    workplaceAdvice: 'Empower team members with autonomy. Do not flaunt hierarchy or status symbols, and solicit team opinions before locking in decisions.'
  },
  {
    id: 'se',
    code: 'SE',
    name: 'Sweden',
    flag: '🇸🇪',
    region: 'Europe',
    scores: {
      communicating: 2.2,
      evaluating: 4.8,
      persuading: 6.5,
      leading: 1.0,
      deciding: 1.0,
      trusting: 2.2,
      disagreeing: 6.0,
      scheduling: 1.5
    },
    keyInsights: [
      'Ultra-consensual (Lagom): decisions require complete alignment and consensus across all participants.',
      'Egalitarian leadership: flat hierarchy, collaborative work ethic, and shared accountability.',
      'Avoids sharp confrontation: unlike the Dutch or French, Swedes avoid overt public debate that could polarize the room.',
      'Linear-time: meetings start on time and follow strict schedules.'
    ],
    famousQuotes: 'In Sweden, we hold another meeting until everyone has spoken and genuine consensus is found.',
    workplaceAdvice: 'Give everyone space to contribute. Do not push for a unilateral vote or rapid top-down decision if key members are still hesitant.'
  },
  {
    id: 'it',
    code: 'IT',
    name: 'Italy',
    flag: '🇮🇹',
    region: 'Europe',
    scores: {
      communicating: 6.8,
      evaluating: 3.8,
      persuading: 1.2,
      leading: 6.8,
      deciding: 6.8,
      trusting: 6.8,
      disagreeing: 2.2,
      scheduling: 6.2
    },
    keyInsights: [
      'Highest Principles-First score in Europe: concepts, theories, and philosophical framework come before practical details.',
      'Expressive debate: animated argument and passionate disagreement demonstrate dedication and intellectual energy.',
      'Hierarchical respect: status and respect for seniority remain prominent in business.',
      'Relationship-based trust: personal bonds and shared meals are essential.'
    ],
    famousQuotes: 'Explain the philosophy and beauty of the concept first; the mechanics will follow naturally.',
    workplaceAdvice: 'Present the theoretical architecture and conceptual rationale before jumping into functional specs.'
  },
  {
    id: 'es',
    code: 'ES',
    name: 'Spain',
    flag: '🇪🇸',
    region: 'Europe',
    scores: {
      communicating: 6.5,
      evaluating: 3.5,
      persuading: 2.0,
      leading: 6.2,
      deciding: 6.5,
      trusting: 7.0,
      disagreeing: 2.8,
      scheduling: 6.5
    },
    keyInsights: [
      'Principles-first reasoning: conceptual grounding before practical implementation.',
      'Relationship-based business: trust flourishes around coffee and extended lunches.',
      'Flexible approach to time: dynamic scheduling adapts to the flow of relationships.',
      'Direct feedback with expressive passion: open discussion without personal resentment.'
    ],
    famousQuotes: 'We work to live, not live to work; relationships sustain every deal.',
    workplaceAdvice: 'Emphasize human contact over pure email. Allow meetings to flow organically rather than enforcing strict minute-by-minute agendas.'
  },
  {
    id: 'ru',
    code: 'RU',
    name: 'Russia',
    flag: '🇷🇺',
    region: 'Europe',
    scores: {
      communicating: 6.0,
      evaluating: 1.0,
      persuading: 2.0,
      leading: 8.5,
      deciding: 8.6,
      trusting: 7.5,
      disagreeing: 2.5,
      scheduling: 6.0
    },
    keyInsights: [
      'Extreme direct negative feedback: Russian "Pravda" (truth) means sugarcoating feedback is seen as hypocritical.',
      'Deeply hierarchical and top-down: the boss is expected to lead with firm decisiveness.',
      'Principles-first thinking: deep theoretical and mathematical foundations are revered.',
      'Relationship-based "inner circle": initial skepticism melts into intense, lifelong personal loyalty once trust is established ("coconut culture").'
    ],
    famousQuotes: 'A Russian friend will criticize you directly to your face, but will defend you against the world.',
    workplaceAdvice: 'Do not sugarcoat negative feedback. Show strong, decisive direction and invest time in private social gatherings to enter the trusted inner circle.'
  },
  {
    id: 'kr',
    code: 'KR',
    name: 'South Korea',
    flag: '🇰🇷',
    region: 'Asia-Pacific',
    scores: {
      communicating: 9.2,
      evaluating: 8.8,
      persuading: 7.5,
      leading: 8.8,
      deciding: 7.8,
      trusting: 8.5,
      disagreeing: 9.0,
      scheduling: 3.0
    },
    keyInsights: [
      'High-context & indirect negative feedback: deference to age, status, and collective cohesion.',
      'Strict Confucian hierarchy: clear communication protocol through the chain of command.',
      'Relationship-based trust fostered via "Hoeshik" (after-work company dinners and drinks).',
      'Punctual and intense work pace ("Ppalli-ppalli" / hurry-hurry).'
    ],
    famousQuotes: 'Respect for elders and organizational seniority creates clarity and collective speed.',
    workplaceAdvice: 'Attend after-work social dinners (Hoeshik) to build real trust. Deliver constructive feedback privately and tactfully to protect your colleague\'s standing.'
  },
  {
    id: 'sa',
    code: 'SA',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    region: 'Middle East & Africa',
    scores: {
      communicating: 8.8,
      evaluating: 8.0,
      persuading: 6.2,
      leading: 9.2,
      deciding: 9.0,
      trusting: 9.5,
      disagreeing: 8.5,
      scheduling: 9.0
    },
    keyInsights: [
      'Deeply relationship-based (Wasta): trust and reputation are built through extensive personal and familial connection.',
      'Hierarchical & Top-down: supreme respect for organizational heads and elders.',
      'High-context and indirect feedback: honor and face are paramount.',
      'Flexible-Time: relationship commitments and prayer schedules naturally transcend rigid calendar blocks.'
    ],
    famousQuotes: 'Trust is built eye-to-eye over cardamom coffee, never over an electronic document.',
    workplaceAdvice: 'Visit in person whenever possible. Show profound respect to the most senior decision maker and never rush a meeting.'
  },
  {
    id: 'ng',
    code: 'NG',
    name: 'Nigeria',
    flag: '🇳🇬',
    region: 'Middle East & Africa',
    scores: {
      communicating: 8.0,
      evaluating: 5.0,
      persuading: 6.0,
      leading: 9.5,
      deciding: 9.2,
      trusting: 9.0,
      disagreeing: 4.5,
      scheduling: 9.2
    },
    keyInsights: [
      'Highest hierarchical score in the book: authority, titles, and deference to leaders are respected without question.',
      'Decisive top-down decision-making: the boss is expected to lead firmly and take ownership.',
      'Flexible-time: fluidity, responsiveness to unpredictable real-world dynamics, and relational priorities.',
      'Relationship-based trust: warmth, charisma, and personal loyalty form the bedrock of business.'
    ],
    famousQuotes: 'The chief leads, and the team moves forward with loyalty and determination.',
    workplaceAdvice: 'Address senior leaders with full titles and honorifics. Align directly with key decision-makers rather than trying to build consensus from the bottom up.'
  },
  {
    id: 'mx',
    code: 'MX',
    name: 'Mexico',
    flag: '🇲🇽',
    region: 'North America',
    scores: {
      communicating: 7.8,
      evaluating: 8.0,
      persuading: 4.2,
      leading: 7.5,
      deciding: 7.5,
      trusting: 8.6,
      disagreeing: 7.2,
      scheduling: 8.0
    },
    keyInsights: [
      'Relationship-based trust (Confianza): you must build mutual affection and warmth before closing deals.',
      'Indirect negative feedback: gentle, polite phrasing that protects personal dignity.',
      'Hierarchical leadership: respect for the "Jefe" and status markers.',
      'Flexible scheduling: punctuality yields to ongoing interpersonal connection.'
    ],
    famousQuotes: 'Confianza is the oil that keeps every Mexican business engine turning.',
    workplaceAdvice: 'Invest time in relationship-building conversations. Never offer blunt criticism in front of colleagues.'
  },
  {
    id: 'id',
    code: 'ID',
    name: 'Indonesia',
    flag: '🇮🇩',
    region: 'Asia-Pacific',
    scores: {
      communicating: 9.2,
      evaluating: 9.2,
      persuading: 7.2,
      leading: 8.5,
      deciding: 7.5,
      trusting: 8.8,
      disagreeing: 9.4,
      scheduling: 8.8
    },
    keyInsights: [
      'Extreme harmony preservation: open disagreement is seen as disruptive and culturally offensive.',
      'High-context communication: listening for the polite refusal concealed within a verbal "Yes".',
      'Indirect negative feedback: criticism is conveyed via a trusted third party or gentle metaphors.',
      'Flexible time ("Jam Karet" / rubber time): schedule elasticity is customary.'
    ],
    famousQuotes: 'Saying no directly is uncivilized; wisdom lies in knowing how to decline with grace.',
    workplaceAdvice: 'A smile and nod often means "I acknowledge you", not "I agree". Check in one-on-one and create psychological safety for candid feedback.'
  },
  {
    id: 'th',
    code: 'TH',
    name: 'Thailand',
    flag: '🇹🇭',
    region: 'Asia-Pacific',
    scores: {
      communicating: 9.0,
      evaluating: 9.4,
      persuading: 7.0,
      leading: 8.6,
      deciding: 7.6,
      trusting: 8.9,
      disagreeing: 9.5,
      scheduling: 8.0
    },
    keyInsights: [
      'Greng Jai concept: deep consideration for others\' feelings and avoiding causing discomfort.',
      'Avoids confrontation: public conflict is seen as a severe breakdown of self-control.',
      'Hierarchical deference: deep respect for elders, teachers, and bosses (the Wai greeting reflects status).',
      'Relationship-based: business blossoms through gentleness, warmth, and shared hospitality.'
    ],
    famousQuotes: 'Preserving harmony and smiling through adversity keeps the community intact.',
    workplaceAdvice: 'Never raise your voice, show anger, or criticize someone in public. Frame feedback as joint exploration rather than deficiency.'
  },
  {
    id: 'ca',
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    region: 'North America',
    scores: {
      communicating: 1.5,
      evaluating: 6.2,
      persuading: 8.5,
      leading: 2.2,
      deciding: 5.5,
      trusting: 2.2,
      disagreeing: 5.8,
      scheduling: 2.0
    },
    keyInsights: [
      'Low-context clarity paired with Canadian politeness: slightly softer on negative feedback than the US.',
      'Egalitarian leadership: flat hierarchies and accessible leadership.',
      'Applications-first persuasion: practical, pragmatic, and outcomes-oriented.',
      'Linear scheduling: punctual and organized.'
    ],
    famousQuotes: 'Politeness and direct clarity go hand in hand.',
    workplaceAdvice: 'Be clear and organized, but adopt a polite, respectful demeanor. Avoid aggressive self-promotion.'
  },
  {
    id: 'au',
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    region: 'Asia-Pacific',
    scores: {
      communicating: 1.2,
      evaluating: 4.0,
      persuading: 8.8,
      leading: 1.6,
      deciding: 5.0,
      trusting: 2.0,
      disagreeing: 3.5,
      scheduling: 2.2
    },
    keyInsights: [
      'Strong egalitarian ethos ("Mateship"): disdain for pretentiousness and "tall poppies".',
      'Direct feedback with informal candor: calling a spade a spade without corporate jargon.',
      'Applications-first: practical, plain-speaking, and focused on pragmatic outcomes.',
      'Low-context communication: words mean what they say.'
    ],
    famousQuotes: 'Don\'t beat around the bush; treat everyone like a mate and get straight to the point.',
    workplaceAdvice: 'Keep presentations down-to-earth and unpretentious. Avoid boasting or pulling rank.'
  },
  {
    id: 'ch',
    code: 'CH',
    name: 'Switzerland',
    flag: '🇨🇭',
    region: 'Europe',
    scores: {
      communicating: 2.0,
      evaluating: 3.0,
      persuading: 3.5,
      leading: 3.0,
      deciding: 2.5,
      trusting: 2.2,
      disagreeing: 3.5,
      scheduling: 0.5
    },
    keyInsights: [
      'The world champion of Linear-Time: punctuality to the minute is mandatory.',
      'Consensual decision-making: thorough consultation and respect for process.',
      'Low-context and task-based: clear agendas, documented agreements, and precision.',
      'Objective, professional feedback without dramatic confrontation.'
    ],
    famousQuotes: 'Precision, punctuality, and methodical preparation are the bedrock of excellence.',
    workplaceAdvice: 'Never be late. Send materials ahead of time and ensure your calculations and technical data are bulletproof.'
  },
  {
    id: 'ar',
    code: 'AR',
    name: 'Argentina',
    flag: '🇦🇷',
    region: 'Latin America',
    scores: {
      communicating: 6.8,
      evaluating: 5.5,
      persuading: 3.0,
      leading: 6.0,
      deciding: 6.5,
      trusting: 8.0,
      disagreeing: 3.8,
      scheduling: 7.5
    },
    keyInsights: [
      'Expressive debate: European philosophical roots combined with Latin emotional expressiveness.',
      'Principles-first persuasion: conceptual discourse and intellectual background are valued.',
      'Relationship-based trust: friendship and chemistry make or break agreements.',
      'Flexible time: meetings start leisurely with personal conversation before business.'
    ],
    famousQuotes: 'Passion in debate shows commitment; business without personal connection is cold.',
    workplaceAdvice: 'Engage actively in personal and intellectual discussions. Build personal warmth before pushing for transactional closures.'
  },
  {
    id: 'tr',
    code: 'TR',
    name: 'Turkey',
    flag: '🇹🇷',
    region: 'Middle East & Africa',
    scores: {
      communicating: 7.2,
      evaluating: 4.8,
      persuading: 5.0,
      leading: 7.8,
      deciding: 7.5,
      trusting: 8.2,
      disagreeing: 3.5,
      scheduling: 6.8
    },
    keyInsights: [
      'Expressive debate combined with high relationship value.',
      'Hierarchical leadership: respect for leadership and executive figures.',
      'Relationship-based trust: hospitality, Turkish tea, and personal bonding are vital.',
      'Comfortable with spirited intellectual argument when mutual respect exists.'
    ],
    famousQuotes: 'A cup of coffee commits one to forty years of friendship.',
    workplaceAdvice: 'Accept offers of tea and hospitality. Combine warm personal rapport with respect for the senior leader.'
  },
  {
    id: 'pl',
    code: 'PL',
    name: 'Poland',
    flag: '🇵🇱',
    region: 'Europe',
    scores: {
      communicating: 4.5,
      evaluating: 2.8,
      persuading: 3.2,
      leading: 5.8,
      deciding: 5.8,
      trusting: 5.5,
      disagreeing: 3.2,
      scheduling: 4.0
    },
    keyInsights: [
      'Direct feedback with frank assessments: straightforward, honest evaluation.',
      'Principles-first persuasion: theoretical grounding and thorough analysis.',
      'Respectful hierarchy with growing egalitarian agility in modern sectors.',
      'Relationship-based trust that deepens with shared professional challenges.'
    ],
    famousQuotes: 'Straightforward truth builds genuine respect over time.',
    workplaceAdvice: 'Provide rigorous background analysis and be honest about obstacles rather than overpromising.'
  },
  {
    id: 'sg',
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    region: 'Asia-Pacific',
    scores: {
      communicating: 5.5,
      evaluating: 6.8,
      persuading: 6.5,
      leading: 6.5,
      deciding: 6.0,
      trusting: 5.5,
      disagreeing: 7.2,
      scheduling: 1.8
    },
    keyInsights: [
      'Global crossroads bridging Asian high-context nuance with Western linear precision.',
      'Linear scheduling: world-class efficiency, strict punctuality, and clear governance.',
      'Indirect negative feedback: retaining Asian face-saving diplomacy in multicultural teams.',
      'Pragmatic hybrid persuasion style.'
    ],
    famousQuotes: 'A bridge between East and West: Asian values of respect paired with global commercial speed.',
    workplaceAdvice: 'Be punctual, professional, and efficient, while remaining sensitive to interpersonal harmony.'
  },
  {
    id: 'ke',
    code: 'KE',
    name: 'Kenya',
    flag: '🇰🇪',
    region: 'Middle East & Africa',
    scores: {
      communicating: 7.8,
      evaluating: 7.2,
      persuading: 6.0,
      leading: 8.0,
      deciding: 8.0,
      trusting: 8.8,
      disagreeing: 7.5,
      scheduling: 9.0
    },
    keyInsights: [
      'Flexible-Time: human interaction and communal relationships take precedence over fixed clocks.',
      'Relationship-based trust: personal warmth, greetings, and community ties are primary.',
      'Hierarchical leadership: respect for leadership and communal hierarchy.',
      'Indirect negative feedback: gentle, face-saving critique.'
    ],
    famousQuotes: 'If you want to go fast, go alone; if you want to go far, go together.',
    workplaceAdvice: 'Take time for genuine greetings and inquiries about well-being before discussing business matters.'
  },
  {
    id: 'vn',
    code: 'VN',
    name: 'Vietnam',
    flag: '🇻🇳',
    region: 'Asia-Pacific',
    scores: {
      communicating: 8.8,
      evaluating: 8.8,
      persuading: 7.2,
      leading: 8.2,
      deciding: 8.0,
      trusting: 8.8,
      disagreeing: 9.2,
      scheduling: 7.8
    },
    keyInsights: [
      'Harmonious consensus and avoidance of confrontation: preserving collective face is paramount.',
      'High-context communication: subtle non-verbal signals and unspoken understanding.',
      'Relationship-based trust: meals, tea, and personal bonding are required.',
      'Hierarchical structure: deference to senior leadership and community elders.'
    ],
    famousQuotes: 'Harmony in the room is worth more than winning a fleeting argument.',
    workplaceAdvice: 'Frame suggestions with humility and respect. Give constructive feedback in private with gentle reassurance.'
  }
]

// The 4 famous 2x2 matrices Erin Meyer features in The Culture Map
export const QUADRANTS = [
  {
    id: 'comm-eval',
    title: 'Communicating vs. Evaluating',
    subtitle: 'Low/High Context vs. Direct/Indirect Negative Feedback',
    xAxis: {
      id: 'communicating',
      name: 'Communicating',
      leftLabel: 'Low-Context (Explicit)',
      rightLabel: 'High-Context (Implicit)'
    },
    yAxis: {
      id: 'evaluating',
      name: 'Evaluating Feedback',
      leftLabel: 'Direct Negative Feedback',
      rightLabel: 'Indirect Negative Feedback'
    },
    quadrantLabels: [
      {
        name: 'Low-Context & Direct',
        description: 'Blunt, explicit, literal, and transparent feedback. Critique is standalone.',
        examples: ['Netherlands', 'Germany', 'Israel', 'Denmark']
      },
      {
        name: 'High-Context & Direct',
        description: 'Layered communication, yet negative feedback is direct and unspared.',
        examples: ['France', 'Russia', 'Italy', 'Spain']
      },
      {
        name: 'Low-Context & Indirect',
        description: 'Explicit verbal style, BUT negative feedback is softened and cushioned (Feedback Sandwich).',
        examples: ['United States', 'United Kingdom', 'Canada', 'Australia']
      },
      {
        name: 'High-Context & Indirect',
        description: 'Nuanced reading between lines, negative feedback is subtle, private, and face-saving.',
        examples: ['Japan', 'China', 'India', 'Indonesia', 'Thailand', 'Brazil', 'Saudi Arabia']
      }
    ],
    meyerTakeaway: 'The most dangerous quadrant trap is Low-Context + Indirect (e.g. US) working with High-Context + Direct (e.g. France/Netherlands): Americans think the Dutch are needlessly cruel, while the Dutch think Americans are dishonest because of the feedback sandwich!'
  },
  {
    id: 'lead-decide',
    title: 'Leading vs. Deciding',
    subtitle: 'Egalitarian/Hierarchical vs. Consensual/Top-Down',
    xAxis: {
      id: 'leading',
      name: 'Leading Style',
      leftLabel: 'Egalitarian (Flat)',
      rightLabel: 'Hierarchical (Status)'
    },
    yAxis: {
      id: 'deciding',
      name: 'Deciding Style',
      leftLabel: 'Consensual (Group Buy-in)',
      rightLabel: 'Top-Down (Leader Decides)'
    },
    quadrantLabels: [
      {
        name: 'Consensual & Egalitarian',
        description: 'Flat hierarchy and unanimous group alignment. Everyone gets a voice.',
        examples: ['Sweden', 'Netherlands', 'Denmark']
      },
      {
        name: 'Consensual & Hierarchical',
        description: 'The famous Japanese anomaly! Hierarchical structure, yet decisions require exhaustive bottom-up consensus (Ringi).',
        examples: ['Japan']
      },
      {
        name: 'Top-Down & Egalitarian',
        description: 'Accessible boss, open doors, but the individual leader makes the final call quickly.',
        examples: ['United States', 'United Kingdom', 'Australia', 'Canada']
      },
      {
        name: 'Top-Down & Hierarchical',
        description: 'Steep pyramid hierarchy with strong top-down command and control.',
        examples: ['China', 'India', 'Nigeria', 'Russia', 'Saudi Arabia', 'Brazil']
      }
    ],
    meyerTakeaway: 'Do not confuse Egalitarian with Consensual! Americans are egalitarian in manners, but top-down in decisions. The boss decides, the team executes. In Sweden or Japan, trying to decide unilaterally will cause passive revolt.'
  },
  {
    id: 'trust-disagree',
    title: 'Trusting vs. Disagreeing',
    subtitle: 'Task/Relationship-Based vs. Confrontational/Avoids Conflict',
    xAxis: {
      id: 'trusting',
      name: 'Trusting Basis',
      leftLabel: 'Task-Based (Cognitive)',
      rightLabel: 'Relationship-Based (Affective)'
    },
    yAxis: {
      id: 'disagreeing',
      name: 'Disagreeing Style',
      leftLabel: 'Confrontational (Debate)',
      rightLabel: 'Avoids Confrontation (Harmony)'
    },
    quadrantLabels: [
      {
        name: 'Confrontational & Task-Based',
        description: 'Debate is objective and separated from friendship. Disagreeing openly does not risk trust.',
        examples: ['Germany', 'Netherlands', 'Israel', 'Denmark']
      },
      {
        name: 'Confrontational & Relationship-Based',
        description: 'Intense intellectual debate is a sign of passion, yet deep personal bonds sustain business.',
        examples: ['France', 'Italy', 'Spain', 'Russia']
      },
      {
        name: 'Avoids Confrontation & Task-Based',
        description: 'Work is professional and contract-driven, but debate is handled diplomatically.',
        examples: ['Sweden', 'United Kingdom']
      },
      {
        name: 'Avoids Confrontation & Relationship-Based',
        description: 'Personal relationships are sacred, and public disagreement would destroy both trust and face.',
        examples: ['Japan', 'China', 'India', 'Thailand', 'Indonesia', 'Saudi Arabia', 'Brazil']
      }
    ],
    meyerTakeaway: 'In France or Israel, arguing fiercely over an idea is considered fun and intellectually respectful. In China or Japan, the exact same argument will permanently destroy a professional relationship.'
  },
  {
    id: 'persuade-comm',
    title: 'Persuading vs. Communicating',
    subtitle: 'Principles/Applications-First vs. Low/High Context',
    xAxis: {
      id: 'communicating',
      name: 'Communicating',
      leftLabel: 'Low-Context',
      rightLabel: 'High-Context'
    },
    yAxis: {
      id: 'persuading',
      name: 'Persuading',
      leftLabel: 'Principles-First',
      rightLabel: 'Applications-First / Holistic'
    },
    quadrantLabels: [
      {
        name: 'Principles-First & Low-Context',
        description: 'Clear, explicit communication backed by foundational theory and rigorous logic.',
        examples: ['Germany', 'Switzerland']
      },
      {
        name: 'Principles-First & High-Context',
        description: 'Theoretical, philosophical grounding delivered with nuance and cultural layering.',
        examples: ['France', 'Italy', 'Spain', 'Russia']
      },
      {
        name: 'Applications-First & Low-Context',
        description: 'Pragmatic, action-oriented, executive summaries, bottom line, literal words.',
        examples: ['United States', 'Australia', 'Canada', 'United Kingdom']
      },
      {
        name: 'Holistic & High-Context',
        description: 'Macro-picture dialectical thinking, interconnected context, reading the air.',
        examples: ['Japan', 'China', 'India', 'Korea', 'Indonesia']
      }
    ],
    meyerTakeaway: 'Anglo-Saxons build from practical case studies to principles (Inductive), Latin/Germans build from principles to application (Deductive), and Asian cultures think holistically about the entire interconnected picture.'
  }
]

export const CULTURAL_CONCEPTS = [
  {
    title: 'The Golden Rule: Relative Positioning',
    tag: 'Core Principle',
    summary: 'What matters is never where a culture sits in absolute terms, but where it sits relative to YOUR culture.',
    description: 'A British manager might feel that Americans are loud and direct, while an Indian manager might feel the same British manager is blunt and overly literal. Both are correct relative to their own cultural baseline. Cross-cultural friction is always about the distance and direction between two points.',
    icon: 'Compass'
  },
  {
    title: 'Peach vs. Coconut Cultures',
    tag: 'Trust & Sociability',
    summary: 'A model borrowed from Kurt Lewin explaining how different societies open up to newcomers.',
    description: 'In "Peach" cultures (like the US or Brazil), people are soft on the outside: friendly to strangers, quick to smile, sharing personal stories easily. But once you reach the hard inner core, deep private access is guarded. In "Coconut" cultures (like Germany, Russia, or France), people have a hard shell initially: reserved, formal, slow to smile. But once you crack through the shell, you are in their trusted inner circle for life.',
    icon: 'ShieldCheck'
  },
  {
    title: 'The Feedback Sandwich Danger',
    tag: 'Evaluating',
    summary: 'Why American positive-cushioned critique backfires abroad.',
    description: 'American managers are trained to deliver negative feedback by sandwiching it between sincere compliments ("You did an incredible job on the intro! Just rework the financials completely. But really, great energy!"). To a German, French, or Dutch worker, this sounds disingenuous or they only hear the compliments and miss the criticism completely. To indirect cultures, even the cushioned blow may feel painfully public.',
    icon: 'Layers'
  },
  {
    title: 'Upgraders vs. Downgraders',
    tag: 'Linguistic Cues',
    summary: 'The subtle verbal modifiers cultures use to dial feedback volume up or down.',
    description: 'Direct cultures use Upgraders: words that strengthen the message, such as "absolutely", "totally", "strongly", "clearly unacceptable". Indirect cultures use Downgraders: words that soften the blow, such as "kind of", "sort of", "maybe", "slightly", "a little bit", "food for thought". Recognizing these modifiers is the key to decoding international performance reviews.',
    icon: 'Volume2'
  },
  {
    title: 'Ringi & Nemawashi',
    tag: 'Consensus Building',
    summary: 'How Japanese organizations achieve deep consensus despite hierarchical status.',
    description: '"Nemawashi" literally means digging around the roots of a tree before transplanting it. In Japanese business, proposals are circulated informally to all stakeholders one-by-one to gather feedback and build total agreement before any official meeting. When the formal "Ringisho" document is stamped (Hanko), execution is instantaneous because zero resistance remains.',
    icon: 'Workflow'
  },
  {
    title: 'Holistic vs. Specific Thinking',
    tag: 'Cognition',
    summary: 'Western focus on focal objects vs. Asian focus on the interconnected environment.',
    description: 'Psychologist Richard Nisbett demonstrated that Westerners tend to focus on the foreground object in isolation (Specific thinking), while Asians look at the entire environment, background, and relationships between elements (Holistic thinking). When pitching to Asian executives, showing how an initiative fits into the company\'s ecosystem matters more than optimizing one isolated feature.',
    icon: 'Eye'
  }
]
