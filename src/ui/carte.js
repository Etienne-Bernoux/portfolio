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

  // Generate POI dots from data
  for (const poi of POIS) {
    const div = document.createElement('div');
    div.className = 'mm-poi';
    div.style.top = poi.top + '%';
    div.style.left = poi.left + '%';
    div.dataset.zone = poi.zone;
    div.dataset.poi = poi.id;
    div.innerHTML = `
      <div class="mm-dot" style="background:${poi.color};color:${poi.color}"></div>
      <span class="mm-tip" data-lang="fr">${poi.tip.fr}</span>
      <span class="mm-tip" data-lang="en">${poi.tip.en}</span>
    `;

    div.addEventListener('click', () => {
      const l = lang();
      const name = poi.name[l] || poi.name.fr;
      const ctx = poi.ctx[l] || poi.ctx.fr;
      const desc = poi.desc[l] || poi.desc.fr;

      document.querySelectorAll('.mm-poi.active').forEach(p => p.classList.remove('active'));

      if (activePoi === poi.id) {
        panel.classList.remove('show');
        activePoi = null;
        return;
      }
      activePoi = poi.id;
      div.classList.add('active');

      zoneName.textContent = poi.zone.toUpperCase();
      zoneName.style.color = poi.color;
      nameEl.innerHTML = poi.link ? `<a href="${poi.link}" target="_blank">${name}</a>` : name;
      ctxEl.textContent = ctx;
      descEl.textContent = desc;
      if (poi.img) { imgEl.src = poi.img; imgEl.alt = name; imgEl.classList.add('show'); }
      else { imgEl.classList.remove('show'); imgEl.removeAttribute('src'); }
      panel.style.borderColor = poi.color;
      panel.classList.add('show');
    });

    minimap.appendChild(div);
  }

  // Click outside closes panel
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#map-section')) {
      panel.classList.remove('show');
      activePoi = null;
    }
  });
}
