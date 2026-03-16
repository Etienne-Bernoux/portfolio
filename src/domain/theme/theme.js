export function getTheme(doc = document) {
  return doc.documentElement.getAttribute('data-theme') || 'dark';
}

export function applyTheme(theme, doc = document) {
  doc.documentElement.setAttribute('data-theme', theme);
}

export function toggleTheme(doc = document, storage = localStorage) {
  const next = getTheme(doc) === 'dark' ? 'light' : 'dark';
  applyTheme(next, doc);
  storage.setItem('theme', next);
  return next;
}

export function initTheme(doc = document, storage = localStorage, matchMedia = window.matchMedia) {
  const stored = storage.getItem('theme');
  if (stored) {
    applyTheme(stored, doc);
    return stored;
  }
  if (matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light', doc);
    return 'light';
  }
  return 'dark';
}
