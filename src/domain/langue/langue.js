export function getLang(doc = document) {
  return doc.documentElement.lang || 'fr';
}

export function toggleLang(doc = document) {
  const next = getLang(doc) === 'fr' ? 'en' : 'fr';
  doc.documentElement.lang = next;
  return next;
}
