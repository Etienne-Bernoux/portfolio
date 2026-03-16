import { creerEtoiles, mettreAJourEtoiles, dessinerEtoiles } from '../domain/canvas/etoiles.js';
import { creerAvions, mettreAJourAvions, dessinerAvions } from '../domain/canvas/avions.js';
import { getTheme } from '../domain/theme/theme.js';

let canvas, ctx, w, h, entities, animId, mode;

export function initialiserCanvas() {
  if (!canvas) {
    canvas = document.getElementById('bg');
    ctx = canvas.getContext('2d');
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(animId); else loop();
    });
    window.addEventListener('resize', resize);
  }

  cancelAnimationFrame(animId);
  resize();
  mode = getTheme();
  entities = mode === 'light' ? creerAvions(w, h) : creerEtoiles(w, h);
  loop();
}

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function draw() {
  if (mode === 'light') {
    mettreAJourAvions(entities, w, h);
    dessinerAvions(ctx, entities, w, h);
  } else {
    mettreAJourEtoiles(entities, w, h);
    dessinerEtoiles(ctx, entities, w, h);
  }
}

function loop() {
  draw();
  animId = requestAnimationFrame(loop);
}
