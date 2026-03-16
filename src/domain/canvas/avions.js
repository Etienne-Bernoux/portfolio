export function creerAvion(w, h) {
  const angle = (Math.random() * 0.4 - 0.2) + (Math.random() < 0.5 ? 0 : Math.PI);
  const speed = 0.4 + Math.random() * 0.6;
  return {
    x: Math.random() * w, y: Math.random() * h,
    vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
    trail: [], trailMax: 60 + Math.floor(Math.random() * 40),
    size: 3 + Math.random() * 2,
  };
}

export function creerAvions(w, h, count = 8) {
  return Array.from({ length: count }, () => creerAvion(w, h));
}

export function mettreAJourAvions(entities, w, h) {
  for (const p of entities) {
    p.x += p.vx; p.y += p.vy;
    p.trail.push({ x: p.x, y: p.y });
    if (p.trail.length > p.trailMax) p.trail.shift();
    if (p.x < -100 || p.x > w + 100 || p.y < -100 || p.y > h + 100) {
      const fresh = creerAvion(w, h);
      Object.assign(p, fresh);
      if (p.vx > 0) p.x = -20; else if (p.vx < 0) p.x = w + 20;
      if (p.vy > 0) p.y = -20; else if (p.vy < 0) p.y = h + 20;
      p.trail = [];
    }
  }
}

export function dessinerAvions(ctx, entities, w, h) {
  ctx.clearRect(0, 0, w, h);
  for (const p of entities) {
    // trail (contrail)
    for (let i = 1; i < p.trail.length; i++) {
      const alpha = (i / p.trail.length) * 0.12;
      ctx.beginPath();
      ctx.moveTo(p.trail[i - 1].x, p.trail[i - 1].y);
      ctx.lineTo(p.trail[i].x, p.trail[i].y);
      ctx.strokeStyle = `rgba(120, 120, 140, ${alpha})`;
      ctx.lineWidth = p.size * 0.6;
      ctx.stroke();
    }
    // plane (small triangle)
    const angle = Math.atan2(p.vy, p.vx);
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(p.size * 2, 0);
    ctx.lineTo(-p.size, -p.size * 0.8);
    ctx.lineTo(-p.size * 0.3, 0);
    ctx.lineTo(-p.size, p.size * 0.8);
    ctx.closePath();
    ctx.fillStyle = 'rgba(100, 100, 120, 0.35)';
    ctx.fill();
    ctx.restore();
  }
}
