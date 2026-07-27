import { calculerXp } from '../domain/xp/xp.js';

export function initialiserXp() {
  const track = document.getElementById('xp-track');
  const fill = document.getElementById('xp-fill');
  const niveauEl = document.getElementById('xp-level');
  const suivantEl = document.getElementById('xp-next');

  const { niveau, progression } = calculerXp();
  const pourcent = Math.round(progression * 100);

  niveauEl.textContent = niveau;
  suivantEl.textContent = niveau + 1;
  track.setAttribute('aria-valuenow', pourcent);
  track.setAttribute('aria-valuetext', `lvl ${niveau} — ${pourcent}%`);

  // Laisse un frame au navigateur pour que la transition CSS part de 0
  requestAnimationFrame(() => { fill.style.width = pourcent + '%'; });
}
