import { describe, it, expect } from 'vitest';
import { POIS } from './pois.js';

const ZONES = ['code', 'spatial', 'atelier', 'famille'];
// Dimensions de rendu de la minimap en desktop (max-width 760px, ratio 16/9)
const LARGEUR_PX = 760;
const HAUTEUR_PX = 760 * 9 / 16;
// Chaque POI est un bouton de 28px (pastille 8px + 10px de padding) : en dessous, les cibles se marchent dessus
const ECART_MIN_PX = 28;

describe('POIS', () => {
  it('donne un identifiant unique à chaque POI', () => {
    const ids = POIS.map(p => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('range chaque POI dans une zone connue de la minimap', () => {
    for (const poi of POIS) expect(ZONES, poi.id).toContain(poi.zone);
  });

  it('traduit chaque champ affiché', () => {
    for (const poi of POIS) {
      for (const champ of ['name', 'ctx', 'desc', 'tip']) {
        expect(poi[champ]?.fr, `${poi.id}.${champ}.fr`).toBeTruthy();
        expect(poi[champ]?.en, `${poi.id}.${champ}.en`).toBeTruthy();
      }
    }
  });

  it('positionne chaque POI dans la carte', () => {
    for (const poi of POIS) {
      expect(poi.top, poi.id).toBeGreaterThan(0);
      expect(poi.top, poi.id).toBeLessThan(100);
      expect(poi.left, poi.id).toBeGreaterThan(0);
      expect(poi.left, poi.id).toBeLessThan(100);
    }
  });

  it('espace les POI pour que les cibles de clic ne se recouvrent pas', () => {
    for (let i = 0; i < POIS.length; i++) {
      for (let j = i + 1; j < POIS.length; j++) {
        const a = POIS[i], b = POIS[j];
        const distance = Math.hypot(
          (a.left - b.left) / 100 * LARGEUR_PX,
          (a.top - b.top) / 100 * HAUTEUR_PX,
        );
        expect(distance, `${a.id} / ${b.id}`).toBeGreaterThan(ECART_MIN_PX);
      }
    }
  });

  it('n\'expose que des liens https', () => {
    for (const poi of POIS.filter(p => p.link)) {
      expect(poi.link, poi.id).toMatch(/^https:\/\//);
    }
  });
});
