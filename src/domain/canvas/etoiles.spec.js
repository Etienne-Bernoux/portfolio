import { describe, it, expect } from 'vitest';
import { creerEtoiles, mettreAJourEtoiles } from './etoiles.js';

describe('etoiles', () => {
  it('crée le bon nombre d\u2019étoiles', () => {
    const stars = creerEtoiles(800, 600, 50);
    expect(stars).toHaveLength(50);
  });

  it('chaque étoile a les propriétés requises', () => {
    const stars = creerEtoiles(800, 600, 5);
    for (const s of stars) {
      expect(s).toHaveProperty('x');
      expect(s).toHaveProperty('y');
      expect(s).toHaveProperty('vx');
      expect(s).toHaveProperty('vy');
      expect(s).toHaveProperty('r');
      expect(s.r).toBeGreaterThanOrEqual(0.5);
      expect(s.r).toBeLessThanOrEqual(2);
    }
  });

  it('les étoiles rebondissent aux bords', () => {
    const stars = [{ x: -1, y: 50, vx: -0.1, vy: 0.1, r: 1 }];
    mettreAJourEtoiles(stars, 800, 600);
    expect(stars[0].vx).toBeGreaterThan(0);
  });

  it('les étoiles rebondissent en bas', () => {
    const stars = [{ x: 50, y: 601, vx: 0.1, vy: 0.1, r: 1 }];
    mettreAJourEtoiles(stars, 800, 600);
    expect(stars[0].vy).toBeLessThan(0);
  });
});
