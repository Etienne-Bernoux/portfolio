import { describe, it, expect } from 'vitest';
import { getLang, toggleLang } from './langue.js';

function creerDoc(lang = 'fr') {
  return { documentElement: { lang } };
}

describe('langue', () => {
  it('getLang retourne fr par défaut', () => {
    expect(getLang(creerDoc())).toBe('fr');
  });

  it('toggleLang bascule fr → en', () => {
    const doc = creerDoc('fr');
    expect(toggleLang(doc)).toBe('en');
    expect(doc.documentElement.lang).toBe('en');
  });

  it('toggleLang bascule en → fr', () => {
    const doc = creerDoc('en');
    expect(toggleLang(doc)).toBe('fr');
    expect(doc.documentElement.lang).toBe('fr');
  });
});
