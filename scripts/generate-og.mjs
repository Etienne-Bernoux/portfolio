import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const ici = dirname(fileURLToPath(import.meta.url));
const carte = resolve(ici, 'og-card.svg');
const sortie = resolve(ici, '..', 'img', 'og.png');

// PW_CHANNEL=chrome pilote le Chrome installé, utile quand les binaires
// Playwright ne peuvent pas être téléchargés.
const canal = process.env.PW_CHANNEL;

const navigateur = await chromium.launch(canal ? { channel: canal } : {});
const page = await navigateur.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto(`file://${carte}`, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: sortie, type: 'png' });
await navigateur.close();

console.log(`og:image → ${sortie}`);
