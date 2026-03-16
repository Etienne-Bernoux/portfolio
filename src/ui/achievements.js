import { ACHIEVEMENTS } from '../domain/donnees/achievements.js';

export function initialiserAchievements() {
  const grid = document.querySelector('.achievements-grid');
  const lang = () => document.documentElement.lang || 'fr';

  grid.innerHTML = ACHIEVEMENTS.map(a => {
    const tierClass = a.tier !== 'standard' ? ` ${a.tier}` : '';
    return `<div class="achievement${tierClass}" data-icon="${a.icon}">
      <div class="ach-title" data-lang="fr">${a.title.fr}</div>
      <div class="ach-title" data-lang="en">${a.title.en}</div>
      <div class="ach-desc" data-lang="fr">${a.desc.fr}</div>
      <div class="ach-desc" data-lang="en">${a.desc.en}</div>
      <div class="ach-year">${a.year}</div>
    </div>`;
  }).join('');

  // Scroll reveal
  const items = grid.querySelectorAll('.achievement');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = [...items].indexOf(e.target);
        setTimeout(() => e.target.classList.add('revealed'), idx * 100);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => observer.observe(el));
}
