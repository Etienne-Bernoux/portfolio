import { describe, it, expect } from 'vitest';
import { SKILLS } from './skills.js';

const [, , LARGEUR, HAUTEUR] = SKILLS.viewBox.split(' ').map(Number);
// arbre.js place le label du nœud à cy + r + 15
const OFFSET_LABEL = 15;

const point = (n) => `${n.cx},${n.cy}`;

describe('SKILLS', () => {
  it('nomme chaque nœud de façon unique — le nom est la clé du tooltip', () => {
    const noms = SKILLS.nodes.map(n => n.name);
    expect(new Set(noms).size).toBe(noms.length);
  });

  it('fournit une description bilingue à chaque nœud', () => {
    for (const node of SKILLS.nodes) {
      expect(node.desc?.fr, node.name).toBeTruthy();
      expect(node.desc?.en, node.name).toBeTruthy();
    }
  });

  it('garde chaque cercle dans le viewBox', () => {
    for (const node of SKILLS.nodes) {
      expect(node.cx - node.r, node.name).toBeGreaterThanOrEqual(0);
      expect(node.cx + node.r, node.name).toBeLessThanOrEqual(LARGEUR);
      expect(node.cy - node.r, node.name).toBeGreaterThanOrEqual(0);
      expect(node.cy + node.r, node.name).toBeLessThanOrEqual(HAUTEUR);
    }
  });

  it('garde chaque label dans le viewBox', () => {
    for (const node of SKILLS.nodes.filter(n => n.label)) {
      expect(node.cy + node.r + OFFSET_LABEL, node.label).toBeLessThanOrEqual(HAUTEUR);
    }
  });

  it('relie uniquement des nœuds existants', () => {
    const positions = new Set(SKILLS.nodes.map(point));
    for (const edge of SKILLS.edges) {
      expect(positions, `départ ${edge.x1},${edge.y1}`).toContain(`${edge.x1},${edge.y1}`);
      expect(positions, `arrivée ${edge.x2},${edge.y2}`).toContain(`${edge.x2},${edge.y2}`);
    }
  });

  it('rattache chaque nœud non racine à au moins une arête', () => {
    const relies = new Set(SKILLS.edges.flatMap(e => [`${e.x1},${e.y1}`, `${e.x2},${e.y2}`]));
    for (const node of SKILLS.nodes) {
      expect(relies, node.name).toContain(point(node));
    }
  });

  it('ne fait pas se chevaucher deux nœuds', () => {
    const { nodes } = SKILLS;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const distance = Math.hypot(a.cx - b.cx, a.cy - b.cy);
        expect(distance, `${a.name} / ${b.name}`).toBeGreaterThan(a.r + b.r);
      }
    }
  });
});
