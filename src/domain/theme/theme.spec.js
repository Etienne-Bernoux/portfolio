import { describe, it, expect, beforeEach } from 'vitest';
import { getTheme, applyTheme, toggleTheme, initTheme } from './theme.js';

function creerDoc(theme) {
  const attrs = {};
  if (theme) attrs['data-theme'] = theme;
  return {
    documentElement: {
      getAttribute: (k) => attrs[k] || null,
      setAttribute: (k, v) => { attrs[k] = v; },
    },
  };
}

function creerStorage(data = {}) {
  const store = { ...data };
  return {
    getItem: (k) => store[k] ?? null,
    setItem: (k, v) => { store[k] = v; },
  };
}

describe('theme', () => {
  it('getTheme retourne dark par défaut', () => {
    expect(getTheme(creerDoc())).toBe('dark');
  });

  it('getTheme retourne le thème courant', () => {
    expect(getTheme(creerDoc('light'))).toBe('light');
  });

  it('applyTheme définit le data-theme', () => {
    const doc = creerDoc();
    applyTheme('light', doc);
    expect(doc.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('toggleTheme bascule dark → light', () => {
    const doc = creerDoc('dark');
    const storage = creerStorage();
    const result = toggleTheme(doc, storage);
    expect(result).toBe('light');
    expect(storage.getItem('theme')).toBe('light');
  });

  it('toggleTheme bascule light → dark', () => {
    const doc = creerDoc('light');
    const storage = creerStorage();
    const result = toggleTheme(doc, storage);
    expect(result).toBe('dark');
    expect(storage.getItem('theme')).toBe('dark');
  });

  it('initTheme utilise localStorage en priorité', () => {
    const doc = creerDoc();
    const storage = creerStorage({ theme: 'light' });
    const result = initTheme(doc, storage, () => ({ matches: false }));
    expect(result).toBe('light');
  });

  it('initTheme utilise prefers-color-scheme si pas de localStorage', () => {
    const doc = creerDoc();
    const storage = creerStorage();
    const result = initTheme(doc, storage, () => ({ matches: true }));
    expect(result).toBe('light');
  });

  it('initTheme retourne dark par défaut', () => {
    const doc = creerDoc();
    const storage = creerStorage();
    const result = initTheme(doc, storage, () => ({ matches: false }));
    expect(result).toBe('dark');
  });
});
