import { describe, it, expect } from 'vitest';
import { creerAvion, creerAvions, mettreAJourAvions } from './avions.js';

describe('avions', () => {
  it('crée un avion avec les propriétés requises', () => {
    const avion = creerAvion(800, 600);
    expect(avion).toHaveProperty('x');
    expect(avion).toHaveProperty('y');
    expect(avion).toHaveProperty('vx');
    expect(avion).toHaveProperty('vy');
    expect(avion).toHaveProperty('trail');
    expect(avion).toHaveProperty('trailMax');
    expect(avion).toHaveProperty('size');
    expect(avion.trail).toEqual([]);
  });

  it('crée le bon nombre d\u2019avions', () => {
    const avions = creerAvions(800, 600, 5);
    expect(avions).toHaveLength(5);
  });

  it('la trail grandit à chaque mise à jour', () => {
    const avions = [creerAvion(800, 600)];
    avions[0].x = 400; avions[0].y = 300;
    mettreAJourAvions(avions, 800, 600);
    expect(avions[0].trail.length).toBe(1);
    mettreAJourAvions(avions, 800, 600);
    expect(avions[0].trail.length).toBe(2);
  });

  it('la trail est limitée à trailMax', () => {
    const avions = [creerAvion(800, 600)];
    avions[0].x = 400; avions[0].y = 300;
    avions[0].trailMax = 3;
    for (let i = 0; i < 10; i++) mettreAJourAvions(avions, 800, 600);
    expect(avions[0].trail.length).toBeLessThanOrEqual(3);
  });

  it('respawn quand hors écran', () => {
    const avions = [creerAvion(800, 600)];
    avions[0].x = 1000; // hors écran à droite
    avions[0].trail = [{ x: 999, y: 300 }];
    mettreAJourAvions(avions, 800, 600);
    expect(avions[0].trail).toEqual([]);
  });
});
