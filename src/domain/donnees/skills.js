export const SKILLS = Object.freeze({
  viewBox: '0 0 720 480',
  edges: [
    // Stack (cyan)
    { x1: 360, y1: 210, x2: 200, y2: 110, color: '#22d3ee', width: 1.5, delay: 'd0' },
    { x1: 200, y1: 110, x2: 100, y2: 50,  color: '#22d3ee', width: 1.5, delay: 'd1' },
    { x1: 200, y1: 110, x2: 100, y2: 170, color: '#22d3ee', width: 1.5, delay: 'd1' },
    { x1: 100, y1: 50,  x2: 30,  y2: 50,  color: '#22d3ee', width: 1,   delay: 'd2' },
    { x1: 100, y1: 170, x2: 30,  y2: 130, color: '#22d3ee', width: 1,   delay: 'd2' },
    { x1: 100, y1: 170, x2: 30,  y2: 210, color: '#22d3ee', width: 1,   delay: 'd2' },
    // Architecture (purple)
    { x1: 360, y1: 210, x2: 240, y2: 330, color: '#a78bfa', width: 1.5, delay: 'd0' },
    { x1: 240, y1: 330, x2: 140, y2: 390, color: '#a78bfa', width: 1.5, delay: 'd1' },
    { x1: 240, y1: 330, x2: 250, y2: 430, color: '#a78bfa', width: 1.5, delay: 'd1' },
    { x1: 240, y1: 330, x2: 350, y2: 390, color: '#a78bfa', width: 1.5, delay: 'd1' },
    // AI & Agents (gold)
    { x1: 360, y1: 210, x2: 480, y2: 330, color: '#eab308', width: 1.5, delay: 'd0' },
    { x1: 480, y1: 330, x2: 590, y2: 390, color: '#eab308', width: 1.5, delay: 'd1' },
    { x1: 480, y1: 330, x2: 480, y2: 430, color: '#eab308', width: 1.5, delay: 'd1' },
    // Leadership (green)
    { x1: 360, y1: 210, x2: 530, y2: 110, color: '#34d399', width: 1.5, delay: 'd0' },
    { x1: 530, y1: 110, x2: 630, y2: 50,  color: '#34d399', width: 1.5, delay: 'd1' },
    { x1: 530, y1: 110, x2: 630, y2: 170, color: '#34d399', width: 1.5, delay: 'd1' },
    { x1: 630, y1: 170, x2: 690, y2: 130, color: '#34d399', width: 1,   delay: 'd2' },
    { x1: 630, y1: 170, x2: 690, y2: 220, color: '#34d399', width: 1,   delay: 'd2' },
  ],
  nodes: [
    // Root
    { name: 'Craft', icon: '⚙', cx: 360, cy: 210, r: 24, color: '#22d3ee', strokeWidth: 2.5, delay: 'd0', label: 'Craft', desc: { fr: 'Le noyau — code, bois, idées', en: 'The core — code, wood, ideas' } },
    // Stack (cyan)
    { name: 'TypeScript / JS', icon: 'TS', cx: 200, cy: 110, r: 18, color: '#22d3ee', strokeWidth: 2, delay: 'd1', label: 'TypeScript', desc: { fr: 'Langage principal · 7+ ans — TypeScript par défaut', en: 'Primary language · 7+ years — TypeScript by default' }, iconSize: 13 },
    { name: 'Vue.js', icon: 'V', cx: 100, cy: 50, r: 15, color: '#22d3ee', strokeWidth: 1.5, delay: 'd2', label: 'Vue.js', desc: { fr: 'Framework front de prédilection', en: 'Go-to frontend framework' }, iconSize: 11 },
    { name: 'Node.js', icon: 'N', cx: 100, cy: 170, r: 15, color: '#22d3ee', strokeWidth: 1.5, delay: 'd2', label: 'Node.js', desc: { fr: 'Backend runtime · APIs, microservices', en: 'Backend runtime · APIs, microservices' }, iconSize: 11 },
    { name: 'Full Stack', icon: 'FS', cx: 30, cy: 50, r: 12, color: '#22d3ee', strokeWidth: 1, delay: 'd3', desc: { fr: 'Front + Back + Infra', en: 'Front + Back + Infra' }, iconSize: 9 },
    { name: 'Payment Systems', icon: '€', cx: 30, cy: 130, r: 12, color: '#22d3ee', strokeWidth: 1, delay: 'd3', desc: { fr: 'Payplug, Alma, PSP', en: 'Payplug, Alma, PSP integration' }, iconSize: 9 },
    { name: 'SAP Integration', icon: 'SAP', cx: 30, cy: 210, r: 12, color: '#22d3ee', strokeWidth: 1, delay: 'd3', desc: { fr: 'OMS ↔ SAP · flux ERP', en: 'OMS ↔ SAP · ERP flows' }, iconSize: 8 },
    // Architecture (purple)
    { name: 'Architecture', icon: '■', cx: 240, cy: 330, r: 18, color: '#a78bfa', strokeWidth: 2, delay: 'd1', label: 'Architecture', desc: { fr: 'Conception de systèmes distribués', en: 'Distributed systems design' } },
    { name: 'Design Patterns', icon: '◆', cx: 140, cy: 390, r: 15, color: '#a78bfa', strokeWidth: 1.5, delay: 'd2', label: 'Patterns', desc: { fr: 'SOLID, DDD, Clean Architecture', en: 'SOLID, DDD, Clean Architecture' }, iconSize: 11 },
    { name: 'Craftsmanship', icon: '✩', cx: 250, cy: 430, r: 15, color: '#a78bfa', strokeWidth: 1.5, delay: 'd2', label: 'Craftsmanship', desc: { fr: 'Clean code, refactoring, cause racine', en: 'Clean code, refactoring, root causes' }, iconSize: 11 },
    { name: 'Tests', icon: '✓', cx: 350, cy: 390, r: 15, color: '#a78bfa', strokeWidth: 1.5, delay: 'd2', label: 'Tests', desc: { fr: 'Vitest, Playwright — BDD en français, TDD quand ça compte', en: 'Vitest, Playwright — Gherkin specs, TDD where it counts' }, iconSize: 11 },
    // AI & Agents (gold)
    { name: 'AI & Agents', icon: '◈', cx: 480, cy: 330, r: 18, color: '#eab308', strokeWidth: 2, delay: 'd1', label: 'AI & Agents', desc: { fr: 'Concevoir avec des agents, pas seulement les utiliser', en: 'Designing with agents, not just using them' } },
    { name: 'Agentic workflows', icon: '✦', cx: 590, cy: 390, r: 15, color: '#eab308', strokeWidth: 1.5, delay: 'd2', label: 'Agents', desc: { fr: 'Skills, hooks, sous-agents, orchestration', en: 'Skills, hooks, subagents, orchestration' }, iconSize: 11 },
    { name: 'Compound engineering', icon: '∞', cx: 480, cy: 430, r: 15, color: '#eab308', strokeWidth: 1.5, delay: 'd2', label: 'Compound', desc: { fr: 'Chaque session laisse une trace réutilisable : learnings, plans, mémoire', en: 'Every session leaves something reusable: learnings, plans, memory' }, iconSize: 11 },
    // Leadership (green)
    { name: 'Leadership', icon: '▶', cx: 530, cy: 110, r: 18, color: '#34d399', strokeWidth: 2, delay: 'd1', label: 'Leadership', desc: { fr: 'Donner le cap, fédérer, décider', en: 'Set direction, rally, decide' } },
    { name: 'Tech Lead', icon: 'TL', cx: 630, cy: 50, r: 15, color: '#34d399', strokeWidth: 1.5, delay: 'd2', label: 'Tech Lead', desc: { fr: 'Vision technique, décisions rapides, mentoring', en: 'Technical vision, fast decisions, mentoring' }, iconSize: 10 },
    { name: 'Team Management', icon: 'TM', cx: 630, cy: 170, r: 15, color: '#34d399', strokeWidth: 1.5, delay: 'd2', label: 'Team Mgmt', desc: { fr: 'Recrutement, délégation, montée en compétences', en: 'Hiring, delegation, skill development' }, iconSize: 10 },
    { name: 'E-commerce', icon: '🛒', cx: 690, cy: 130, r: 12, color: '#34d399', strokeWidth: 1, delay: 'd3', desc: { fr: 'Jardiland, Gammvert, Aladin, Farmi', en: 'Jardiland, Gammvert, Aladin, Farmi' }, iconSize: 9 },
    { name: 'Marketplace', icon: 'MKT', cx: 690, cy: 220, r: 12, color: '#34d399', strokeWidth: 1, delay: 'd3', desc: { fr: 'Multi-enseignes, marketplace', en: 'Multi-brand, marketplace' }, iconSize: 8 },
  ],
});
