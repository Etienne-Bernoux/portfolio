import { SKILLS } from '../domain/donnees/skills.js';

const SVG_NS = 'http://www.w3.org/2000/svg';

export function initialiserArbre() {
  const svg = document.getElementById('skill-tree');
  const tooltip = document.getElementById('tree-tooltip');
  const lang = () => document.documentElement.lang || 'fr';

  // Generate edges
  for (const edge of SKILLS.edges) {
    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('class', `edge ${edge.delay}`);
    line.setAttribute('x1', edge.x1); line.setAttribute('y1', edge.y1);
    line.setAttribute('x2', edge.x2); line.setAttribute('y2', edge.y2);
    line.setAttribute('stroke', edge.color);
    line.setAttribute('stroke-width', edge.width);
    svg.appendChild(line);
  }

  // Generate nodes
  for (const node of SKILLS.nodes) {
    const g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('class', `node-group ${node.delay}`);
    g.dataset.name = node.name;
    g.dataset.descFr = node.desc.fr;
    g.dataset.descEn = node.desc.en;

    const circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttribute('class', 'node-circle');
    circle.setAttribute('cx', node.cx); circle.setAttribute('cy', node.cy);
    circle.setAttribute('r', node.r);
    circle.setAttribute('fill', '#18181b');
    circle.setAttribute('stroke', node.color);
    circle.setAttribute('stroke-width', node.strokeWidth);
    circle.style.color = node.color;
    g.appendChild(circle);

    const icon = document.createElementNS(SVG_NS, 'text');
    icon.setAttribute('class', 'node-icon');
    icon.setAttribute('x', node.cx); icon.setAttribute('y', node.cy + 5);
    icon.setAttribute('text-anchor', 'middle');
    icon.setAttribute('fill', node.color);
    if (node.iconSize) icon.style.fontSize = node.iconSize + 'px';
    icon.textContent = node.icon;
    g.appendChild(icon);

    if (node.label) {
      const label = document.createElementNS(SVG_NS, 'text');
      label.setAttribute('class', 'node-label');
      label.setAttribute('x', node.cx); label.setAttribute('y', node.cy + node.r + 15);
      label.setAttribute('text-anchor', 'middle');
      label.textContent = node.label;
      g.appendChild(label);
    }

    svg.appendChild(g);
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        svg.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(svg);

  // Tooltips
  svg.querySelectorAll('.node-group').forEach(node => {
    node.addEventListener('mouseenter', () => {
      const name = node.dataset.name;
      const desc = lang() === 'en' ? node.dataset.descEn : node.dataset.descFr;
      if (!name) return;
      tooltip.querySelector('.tt-name').textContent = name;
      tooltip.querySelector('.tt-desc').textContent = desc || '';
      tooltip.classList.add('show');
    });
    node.addEventListener('mousemove', (e) => {
      let x = e.clientX + 12, y = e.clientY - 10;
      const rect = tooltip.getBoundingClientRect();
      if (x + rect.width > window.innerWidth - 8) x = e.clientX - rect.width - 12;
      if (y + rect.height > window.innerHeight - 8) y = e.clientY - rect.height - 4;
      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
    });
    node.addEventListener('mouseleave', () => {
      tooltip.classList.remove('show');
    });
  });
}
