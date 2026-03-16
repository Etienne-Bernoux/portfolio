import { creerDetecteurKonami } from '../domain/easter-eggs/konami.js';

export function initialiserKonami() {
  const toast = document.getElementById('konami-toast');
  const onKey = creerDetecteurKonami(() => {
    document.body.classList.add('konami-active');
    toast.classList.add('show');
    for (let i = 0; i < 15; i++) {
      setTimeout(() => spawnStar(), i * 120);
    }
    setTimeout(() => {
      document.body.classList.remove('konami-active');
      toast.classList.remove('show');
    }, 4000);
  });

  document.addEventListener('keydown', (e) => onKey(e.key));
}

function spawnStar() {
  const star = document.createElement('div');
  star.textContent = '\u2605';
  star.style.cssText = `
    position: fixed;
    top: ${Math.random() * 60}%;
    left: ${Math.random() * 100}%;
    font-size: ${12 + Math.random() * 20}px;
    color: #eab308;
    pointer-events: none;
    z-index: 99;
    opacity: 1;
    transition: all 1.5s ease-out;
  `;
  document.body.appendChild(star);
  requestAnimationFrame(() => {
    star.style.transform = `translateY(${60 + Math.random() * 100}px) rotate(${Math.random() * 360}deg)`;
    star.style.opacity = '0';
  });
  setTimeout(() => star.remove(), 2000);
}
