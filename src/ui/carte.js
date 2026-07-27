import { POIS } from '../domain/donnees/pois.js';

export function initialiserCarte() {
  const minimap = document.querySelector('.minimap');
  const panel = document.getElementById('map-detail');
  const zoneName = document.getElementById('detail-zone');
  const nameEl = document.getElementById('detail-name');
  const ctxEl = document.getElementById('detail-ctx');
  const descEl = document.getElementById('detail-desc');
  const imgEl = document.getElementById('detail-img');
  const lang = () => document.documentElement.lang || 'fr';
  let activePoi = null;

  const fermer = () => {
    panel.classList.remove('show');
    minimap.querySelectorAll('.mm-poi').forEach(p => {
      p.classList.remove('active');
      p.setAttribute('aria-expanded', 'false');
    });
    activePoi = null;
  };

  // Generate POI dots from data
  for (const poi of POIS) {
    const bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.className = 'mm-poi';
    bouton.style.top = poi.top + '%';
    bouton.style.left = poi.left + '%';
    bouton.dataset.zone = poi.zone;
    bouton.dataset.poi = poi.id;
    bouton.setAttribute('aria-controls', 'map-detail');
    bouton.setAttribute('aria-expanded', 'false');
    bouton.innerHTML = `
      <span class="mm-dot" style="background:${poi.color};color:${poi.color}"></span>
      <span class="mm-tip" data-lang="fr">${poi.tip.fr}</span>
      <span class="mm-tip" data-lang="en">${poi.tip.en}</span>
    `;

    bouton.addEventListener('click', () => {
      const l = lang();
      const name = poi.name[l] || poi.name.fr;
      const ctx = poi.ctx[l] || poi.ctx.fr;
      const desc = poi.desc[l] || poi.desc.fr;
      const dejaOuvert = activePoi === poi.id;

      fermer();
      if (dejaOuvert) return;

      activePoi = poi.id;
      bouton.classList.add('active');
      bouton.setAttribute('aria-expanded', 'true');

      zoneName.textContent = poi.zone.toUpperCase();
      zoneName.style.color = poi.color;
      nameEl.innerHTML = poi.link
        ? `<a href="${poi.link}" target="_blank" rel="noopener noreferrer">${name}</a>`
        : name;
      ctxEl.textContent = ctx;
      descEl.textContent = desc;
      if (poi.img) { imgEl.src = poi.img; imgEl.alt = name; imgEl.classList.add('show'); }
      else { imgEl.classList.remove('show'); imgEl.removeAttribute('src'); }
      panel.style.borderColor = poi.color;
      panel.classList.add('show');
    });

    minimap.appendChild(bouton);
  }

  // Click outside closes panel
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#map-section')) fermer();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activePoi) fermer();
  });
}
