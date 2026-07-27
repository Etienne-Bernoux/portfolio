import { describe, it, expect } from 'vitest';
import { calculerXp, DEBUT_CARRIERE } from './xp.js';

const debut = new Date(DEBUT_CARRIERE);
const AN = 365.2425 * 24 * 60 * 60 * 1000;

describe('calculerXp', () => {
  it('donne le niveau 0 au tout début', () => {
    expect(calculerXp(debut, debut)).toEqual({ niveau: 0, progression: 0 });
  });

  it('monte d\'un niveau par année révolue', () => {
    const troisAns = new Date(debut.getTime() + 3 * AN);
    expect(calculerXp(troisAns, debut).niveau).toBe(3);
  });

  it('expose la progression vers le niveau suivant', () => {
    const septAnsEtDemi = new Date(debut.getTime() + 7.5 * AN);
    const { niveau, progression } = calculerXp(septAnsEtDemi, debut);
    expect(niveau).toBe(7);
    expect(progression).toBeCloseTo(0.5, 3);
  });

  it('garde la progression dans [0, 1[', () => {
    for (const mois of [1, 5, 11, 23, 47, 95]) {
      const { progression } = calculerXp(new Date(debut.getTime() + mois * AN / 12), debut);
      expect(progression).toBeGreaterThanOrEqual(0);
      expect(progression).toBeLessThan(1);
    }
  });

  it('ne descend pas sous zéro avant le début', () => {
    const avant = new Date(debut.getTime() - 5 * AN);
    expect(calculerXp(avant, debut)).toEqual({ niveau: 0, progression: 0 });
  });

  it('a passé le niveau 7 en 2026', () => {
    expect(calculerXp(new Date('2026-07-27')).niveau).toBe(7);
  });
});
