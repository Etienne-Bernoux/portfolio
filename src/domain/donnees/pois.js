export const POIS = Object.freeze([
  // ── CODE ──
  {
    id: 'jardiland', zone: 'code', top: 22, left: 18,
    name: { fr: 'Jardiland \u00b7 Gammvert', en: 'Jardiland \u00b7 Gammvert' },
    ctx: { fr: 'invivo \u00b7 2021\u2014now', en: 'invivo \u00b7 2021\u2014now' },
    desc: { fr: 'E-commerce multi-enseignes. Paiement, logistique, int\u00e9gration SAP.', en: 'Multi-brand e-commerce. Payment, logistics, SAP integration.' },
    color: '#22d3ee', link: '', img: '',
    tip: { fr: 'Jardiland', en: 'Jardiland' },
  },
  {
    id: 'aladin', zone: 'code', top: 35, left: 10,
    name: { fr: 'Aladin.farm \u00b7 Farmi', en: 'Aladin.farm \u00b7 Farmi' },
    ctx: { fr: 'invivo + octo \u00b7 2018\u2014now', en: 'invivo + octo \u00b7 2018\u2014now' },
    desc: { fr: 'Plateforme B2Ag pour le monde agricole. Du d\u00e9veloppement initial au pilotage.', en: 'B2Ag platform for agriculture. From initial development to technical leadership.' },
    color: '#22d3ee', link: '', img: '',
    tip: { fr: 'Aladin.farm', en: 'Aladin.farm' },
  },
  {
    id: 'rg', zone: 'code', top: 28, left: 32,
    name: { fr: 'Roland-Garros', en: 'Roland-Garros' },
    ctx: { fr: 'octo \u00b7 rg.com \u00b7 2019', en: 'octo \u00b7 rg.com \u00b7 2019' },
    desc: { fr: 'Billetterie du tournoi de Roland-Garros.', en: 'Tournament ticketing system for Roland-Garros.' },
    color: '#22d3ee', link: '', img: '',
    tip: { fr: 'Roland-Garros', en: 'Roland-Garros' },
  },
  {
    id: 'gouv', zone: 'code', top: 42, left: 24,
    name: { fr: 'numerique.gouv.fr', en: 'numerique.gouv.fr' },
    ctx: { fr: 'octo \u00b7 dinsic \u00b7 2019', en: 'octo \u00b7 dinsic \u00b7 2019' },
    desc: { fr: 'Site officiel du num\u00e9rique de l\u2019\u00c9tat. Jekyll, Foundation, CircleCI.', en: 'French government digital website. Jekyll, Foundation, CircleCI.' },
    color: '#22d3ee', link: '', img: '',
    tip: { fr: '.gouv.fr', en: '.gouv.fr' },
  },
  {
    id: 'spacebreakout', zone: 'code', top: 38, left: 36,
    name: { fr: 'Space Breakout', en: 'Space Breakout' },
    ctx: { fr: 'canvas \u00b7 js \u00b7 2025', en: 'canvas \u00b7 js \u00b7 2025' },
    desc: { fr: 'Casse-briques spatial en pur JS Canvas. Parce que m\u00eame les side projects m\u00e9ritent des \u00e9toiles.', en: 'Space-themed breakout game in pure JS Canvas. Because even side projects deserve stars.' },
    color: '#22d3ee', link: 'https://etienne-bernoux.github.io/space-breakout/', img: 'img/space-breakout.png',
    tip: { fr: 'Space Breakout', en: 'Space Breakout' },
  },

  // ── SPATIAL ──
  {
    id: 'space-veille', zone: 'spatial', top: 20, left: 72,
    name: { fr: 'Veille a\u00e9rospatiale', en: 'Aerospace watch' },
    ctx: { fr: 'passion', en: 'passion' },
    desc: { fr: 'SpaceX, Ariane, exploration spatiale. Le ciel comme horizon.', en: 'SpaceX, Ariane, space exploration. The sky as a horizon.' },
    color: '#a78bfa', link: '', img: '',
    tip: { fr: 'Veille a\u00e9ro', en: 'Aerospace' },
  },
  {
    id: 'drone', zone: 'spatial', top: 32, left: 82,
    name: { fr: 'Drone ECE', en: 'ECE Drone' },
    ctx: { fr: 'ece \u00b7 2012\u20142014', en: 'ece \u00b7 2012\u20142014' },
    desc: { fr: 'Conception d\u2019un drone sur 2 ans. Chef de projet, ECE Inov-Award.', en: 'Drone built over 2 years. Project lead, ECE Inov-Award.' },
    color: '#a78bfa', link: '', img: '',
    tip: { fr: 'Drone ECE', en: 'ECE Drone' },
  },

  // ── ATELIER ──
  {
    id: 'meubles', zone: 'atelier', top: 68, left: 70,
    name: { fr: 'Plans de meubles', en: 'Furniture plans' },
    ctx: { fr: 'bois \u00b7 conception \u00b7 en cours', en: 'wood \u00b7 design \u00b7 ongoing' },
    desc: { fr: 'Conception et fabrication de meubles. Plans, d\u00e9coupes, assemblage.', en: 'Furniture design and building. Plans, cuts, assembly.' },
    color: '#34d399', link: 'https://etienne-bernoux.github.io/plan-meubles/', img: '',
    tip: { fr: 'Meubles', en: 'Furniture' },
  },
  {
    id: 'bricolage', zone: 'atelier', top: 78, left: 82,
    name: { fr: 'Bricolage', en: 'DIY' },
    ctx: { fr: 'maison \u00b7 r\u00e9parations', en: 'home \u00b7 repairs' },
    desc: { fr: 'Tout ce qui se r\u00e9pare, s\u2019am\u00e9liore, se construit \u00e0 la main.', en: 'Anything that can be fixed, improved, or built by hand.' },
    color: '#34d399', link: '', img: '',
    tip: { fr: 'Bricolage', en: 'DIY' },
  },

  // ── FAMILLE ──
  {
    id: 'mathquiz', zone: 'famille', top: 70, left: 18,
    name: { fr: 'MathQuiz', en: 'MathQuiz' },
    ctx: { fr: 'react \u00b7 pwa \u00b7 2025', en: 'react \u00b7 pwa \u00b7 2025' },
    desc: { fr: 'App pour apprendre les tables de multiplication. Faite pour ceux qui comptent le plus.', en: 'Multiplication tables app. Built for the ones who matter most.' },
    color: '#eab308', link: 'https://etienne-bernoux.github.io/math-learner/', img: 'img/math-learner.png',
    tip: { fr: 'MathQuiz', en: 'MathQuiz' },
  },
  {
    id: 'tictacaventure', zone: 'famille', top: 80, left: 28,
    name: { fr: 'Tic Tac Aventure', en: 'Tic Tac Aventure' },
    ctx: { fr: 'vanilla js \u00b7 canvas \u00b7 2025', en: 'vanilla js \u00b7 canvas \u00b7 2025' },
    desc: { fr: 'Apprendre \u00e0 lire l\u2019heure en s\u2019amusant. Horloge interactive, niveaux et badges pour les petits explorateurs.', en: 'Learn to read time through play. Interactive clock, levels and badges for little explorers.' },
    color: '#eab308', link: 'https://etienne-bernoux.github.io/tic-tac-aventure/', img: 'img/tic-tac-aventure.png',
    tip: { fr: 'Tic Tac Aventure', en: 'Tic Tac Aventure' },
  },
  {
    id: 'lotohistoire', zone: 'famille', top: 60, left: 12,
    name: { fr: 'Loto d\u2019Histoire', en: 'Loto d\u2019Histoire' },
    ctx: { fr: 'vanilla js \u00b7 ddd \u00b7 2025', en: 'vanilla js \u00b7 ddd \u00b7 2025' },
    desc: { fr: 'Apprendre les grandes dates de l\u2019Histoire de France en jouant. D\u00e9couvrir, associer, restituer \u2014 pour les CE1-CE2.', en: 'Learn key dates in French history through play. Discover, match, recall \u2014 for ages 7-8.' },
    color: '#eab308', link: 'https://etienne-bernoux.github.io/loto-histoire/', img: 'img/loto-histoire.png',
    tip: { fr: 'Loto d\u2019Histoire', en: 'Loto d\u2019Histoire' },
  },
]);
