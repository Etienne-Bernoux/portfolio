import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const ici = dirname(fileURLToPath(import.meta.url));
const carte = resolve(ici, 'og-card.svg');
const sortie = resolve(ici, '..', 'img', 'og.png');

const navigateur = await chromium.launch();
const page = await navigateur.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto(`file://${carte}`, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: sortie, type: 'png' });
await navigateur.close();

console.log(`og:image → ${sortie}`);
