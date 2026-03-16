export const SKILLS = Object.freeze({
  edges: [
    // Stack (cyan)
    { x1: 360, y1: 210, x2: 200, y2: 110, color: '#22d3ee', width: 1.5, delay: 'd0' },
    { x1: 200, y1: 110, x2: 100, y2: 50,  color: '#22d3ee', width: 1.5, delay: 'd1' },
    { x1: 200, y1: 110, x2: 100, y2: 170, color: '#22d3ee', width: 1.5, delay: 'd1' },
    { x1: 100, y1: 50,  x2: 30,  y2: 50,  color: '#22d3ee', width: 1,   delay: 'd2' },
    { x1: 100, y1: 170, x2: 30,  y2: 130, color: '#22d3ee', width: 1,   delay: 'd2' },
    { x1: 100, y1: 170, x2: 30,  y2: 210, color: '#22d3ee', width: 1,   delay: 'd2' },
    // Architecture (purple)
    { x1: 360, y1: 210, x2: 360, y2: 350, color: '#a78bfa', width: 1.5, delay: 'd0' },
    { x1: 360, y1: 350, x2: 260, y2: 400, color: '#a78bfa', width: 1.5, delay: 'd1' },
    { x1: 360, y1: 350, x2: 460, y2: 400, color: '#a78bfa', width: 1.5, delay: 'd1' },
    // Leadership (green)
    { x1: 360, y1: 210, x2: 530, y2: 110, color: '#34d399', width: 1.5, delay: 'd0' },
    { x1: 530, y1: 110, x2: 630, y2: 50,  color: '#34d399', width: 1.5, delay: 'd1' },
    { x1: 530, y1: 110, x2: 630, y2: 170, color: '#34d399', width: 1.5, delay: 'd1' },
    { x1: 630, y1: 170, x2: 690, y2: 130, color: '#34d399', width: 1,   delay: 'd2' },
    { x1: 630, y1: 170, x2: 690, y2: 220, color: '#34d399', width: 1,   delay: 'd2' },
  ],
  nodes: [
    // Root
    { name: 'Craft', icon: '\u2699', cx: 360, cy: 210, r: 24, color: '#22d3ee', strokeWidth: 2.5, delay: 'd0', label: 'Craft', desc: { fr: 'Le noyau \u2014 code, bois, id\u00e9es', en: 'The core \u2014 code, wood, ideas' } },
    // Stack (cyan)
    { name: 'JavaScript', icon: 'JS', cx: 200, cy: 110, r: 18, color: '#22d3ee', strokeWidth: 2, delay: 'd1', label: 'JavaScript', desc: { fr: 'Langage principal \u00b7 7+ ans', en: 'Primary language \u00b7 7+ years' } },
    { name: 'Vue.js', icon: 'V', cx: 100, cy: 50, r: 15, color: '#22d3ee', strokeWidth: 1.5, delay: 'd2', label: 'Vue.js', desc: { fr: 'Framework front de pr\u00e9dilection', en: 'Go-to frontend framework' }, iconSize: 11 },
    { name: 'Node.js', icon: 'N', cx: 100, cy: 170, r: 15, color: '#22d3ee', strokeWidth: 1.5, delay: 'd2', label: 'Node.js', desc: { fr: 'Backend runtime \u00b7 APIs, microservices', en: 'Backend runtime \u00b7 APIs, microservices' }, iconSize: 11 },
    { name: 'Full Stack', icon: 'FS', cx: 30, cy: 50, r: 12, color: '#22d3ee', strokeWidth: 1, delay: 'd3', desc: { fr: 'Front + Back + Infra', en: 'Front + Back + Infra' }, iconSize: 9 },
    { name: 'Payment Systems', icon: '\u20ac', cx: 30, cy: 130, r: 12, color: '#22d3ee', strokeWidth: 1, delay: 'd3', desc: { fr: 'Payplug, Alma, PSP', en: 'Payplug, Alma, PSP integration' }, iconSize: 9 },
    { name: 'SAP Integration', icon: 'SAP', cx: 30, cy: 210, r: 12, color: '#22d3ee', strokeWidth: 1, delay: 'd3', desc: { fr: 'OMS \u2194 SAP \u00b7 flux ERP', en: 'OMS \u2194 SAP \u00b7 ERP flows' }, iconSize: 8 },
    // Architecture (purple)
    { name: 'Architecture', icon: '\u25a0', cx: 360, cy: 350, r: 18, color: '#a78bfa', strokeWidth: 2, delay: 'd1', label: 'Architecture', desc: { fr: 'Conception de syst\u00e8mes distribu\u00e9s', en: 'Distributed systems design' } },
    { name: 'Design Patterns', icon: '\u25c6', cx: 260, cy: 400, r: 15, color: '#a78bfa', strokeWidth: 1.5, delay: 'd2', label: 'Patterns', desc: { fr: 'SOLID, DDD, Clean Architecture', en: 'SOLID, DDD, Clean Architecture' }, iconSize: 11 },
    { name: 'Craftsmanship', icon: '\u2729', cx: 460, cy: 400, r: 15, color: '#a78bfa', strokeWidth: 1.5, delay: 'd2', label: 'Craftsmanship', desc: { fr: 'Clean code, TDD, refactoring', en: 'Clean code, TDD, refactoring' }, iconSize: 11 },
    // Leadership (green)
    { name: 'Leadership', icon: '\u25b6', cx: 530, cy: 110, r: 18, color: '#34d399', strokeWidth: 2, delay: 'd1', label: 'Leadership', desc: { fr: 'Donner le cap, f\u00e9d\u00e9rer, d\u00e9cider', en: 'Set direction, rally, decide' } },
    { name: 'Tech Lead', icon: 'TL', cx: 630, cy: 50, r: 15, color: '#34d399', strokeWidth: 1.5, delay: 'd2', label: 'Tech Lead', desc: { fr: 'Vision technique, d\u00e9cisions rapides, mentoring', en: 'Technical vision, fast decisions, mentoring' }, iconSize: 10 },
    { name: 'Team Management', icon: '\u262d', cx: 630, cy: 170, r: 15, color: '#34d399', strokeWidth: 1.5, delay: 'd2', label: 'Team Mgmt', desc: { fr: 'Recrutement, d\u00e9l\u00e9gation, mont\u00e9e en comp\u00e9tences', en: 'Hiring, delegation, skill development' }, iconSize: 10 },
    { name: 'E-commerce', icon: '\uD83D\uDED2', cx: 690, cy: 130, r: 12, color: '#34d399', strokeWidth: 1, delay: 'd3', desc: { fr: 'Jardiland, Gammvert, Aladin, Farmi', en: 'Jardiland, Gammvert, Aladin, Farmi' }, iconSize: 9 },
    { name: 'E-commerce', icon: 'MKT', cx: 690, cy: 220, r: 12, color: '#34d399', strokeWidth: 1, delay: 'd3', desc: { fr: 'Multi-enseignes, marketplace', en: 'Multi-brand, marketplace' }, iconSize: 8 },
  ],
});
