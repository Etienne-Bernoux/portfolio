import { getTheme, toggleTheme, initTheme } from '../domain/theme/theme.js';
import { initialiserCanvas } from './canvas-bg.js';

export function initialiserTheme() {
  const btn = document.getElementById('theme-toggle');
  const theme = initTheme();
  updateIcon(btn, theme);

  btn.addEventListener('click', () => {
    const next = toggleTheme();
    updateIcon(btn, next);
    initialiserCanvas();
  });

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      const t = e.matches ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', t);
      updateIcon(btn, t);
      initialiserCanvas();
    }
  });
}

function updateIcon(btn, theme) {
  btn.innerHTML = theme === 'light' ? '&#9728;' : '&#9790;';
}
