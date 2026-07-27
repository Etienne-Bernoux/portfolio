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

  it('ne fait passer aucune arête à travers un label', () => {
    // .node-label : mono 10px, avance 0.6em, ~7px au-dessus de la baseline et 2px sous
    const boite = (n) => {
      const largeur = n.label.length * 6;
      const baseline = n.cy + n.r + OFFSET_LABEL;
      return { x1: n.cx - largeur / 2, x2: n.cx + largeur / 2, y1: baseline - 7, y2: baseline + 2 };
    };
    // Découpe le segment finement : suffisant ici, et sans géométrie analytique à relire
    const traverse = (edge, b) => {
      const pas = 200;
      for (let i = 0; i <= pas; i++) {
        const x = edge.x1 + (edge.x2 - edge.x1) * (i / pas);
        const y = edge.y1 + (edge.y2 - edge.y1) * (i / pas);
        if (x >= b.x1 && x <= b.x2 && y >= b.y1 && y <= b.y2) return true;
      }
      return false;
    };

    for (const node of SKILLS.nodes.filter(n => n.label)) {
      const b = boite(node);
      for (const edge of SKILLS.edges) {
        expect(traverse(edge, b), `${node.label} traversé par ${edge.x1},${edge.y1}→${edge.x2},${edge.y2}`)
          .toBe(false);
      }
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
