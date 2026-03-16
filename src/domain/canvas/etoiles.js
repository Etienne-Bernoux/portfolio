export function creerEtoiles(w, h, count = 80) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w, y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
    r: Math.random() * 1.5 + 0.5,
  }));
}

export function mettreAJourEtoiles(entities, w, h) {
  for (const p of entities) {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
  }
}

export function dessinerEtoiles(ctx, entities, w, h) {
  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < entities.length; i++) {
    const p = entities[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(34, 211, 238, 0.45)';
    ctx.fill();
    for (let j = i + 1; j < entities.length; j++) {
      const q = entities[j];
      const dx = p.x - q.x, dy = p.y - q.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 180) {
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(34, 211, 238, ${0.2 * (1 - dist / 180)})`;
        ctx.lineWidth = 0.8; ctx.stroke();
      }
    }
  }
}
