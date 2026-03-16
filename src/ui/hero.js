import { creerDetecteurTripleClic } from '../domain/easter-eggs/secret-dot.js';

export function initialiserHero() {
  const dot = document.getElementById('secret-dot');
  const msg = document.getElementById('secret-msg');
  const onClick = creerDetecteurTripleClic(() => msg.classList.toggle('show'));
  dot.addEventListener('click', onClick);
}
