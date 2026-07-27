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
  // Le domaine dessine en pixels CSS : on monte la résolution du bitmap et on
  // laisse la transformation absorber le ratio, sinon tout est flou en retina.
  const ratio = window.devicePixelRatio || 1;
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = Math.round(w * ratio);
  canvas.height = Math.round(h * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
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
