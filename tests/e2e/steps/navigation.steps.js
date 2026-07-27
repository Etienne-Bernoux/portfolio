import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { POIS } from '../../../src/domain/donnees/pois.js';
import { ACHIEVEMENTS } from '../../../src/domain/donnees/achievements.js';

const { Given, When, Then } = createBdd();

Given('j\'ouvre le portfolio', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('.hero');
  // Wait for ES modules to be loaded and POIs generated
  await page.waitForSelector('.mm-poi');
});

Then('je vois la section hero avec le nom {string}', async ({ page }, nom) => {
  await expect(page.locator('.hero h1')).toContainText(nom);
});

Then('je vois la section achievements', async ({ page }) => {
  await expect(page.locator('#achievements-section')).toBeVisible();
  await expect(page.locator('.achievement')).toHaveCount(ACHIEVEMENTS.length);
});

Then('je vois la section carte', async ({ page }) => {
  await expect(page.locator('#map-section')).toBeVisible();
  await expect(page.locator('.mm-poi')).toHaveCount(POIS.length);
});

Then('je vois la section skill tree', async ({ page }) => {
  await expect(page.locator('#skills-section')).toBeVisible();
});

Then('je vois la section about', async ({ page }) => {
  await expect(page.locator('.about')).toBeVisible();
});

Then('je vois le footer', async ({ page }) => {
  await expect(page.locator('footer')).toBeVisible();
});

Then('la barre XP affiche un niveau et une progression', async ({ page }) => {
  await expect(page.locator('#xp-level')).toHaveText(/^\d+$/);
  await expect(page.locator('#xp-track')).toHaveAttribute('aria-valuenow', /^\d+$/);
  await expect(page.locator('#xp-fill')).toHaveAttribute('style', /width:\s*\d+%/);
});

When('je passe en viewport mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
});

Then('chaque lien externe porte rel noopener', async ({ page }) => {
  const liens = page.locator('a[target="_blank"]');
  const total = await liens.count();
  expect(total).toBeGreaterThan(0);
  for (let i = 0; i < total; i++) {
    await expect(liens.nth(i)).toHaveAttribute('rel', /noopener/);
  }
});

Then('rien ne déborde horizontalement', async ({ page }) => {
  const debordement = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  expect(debordement).toBeLessThanOrEqual(0);
});

Then('l\'arbre de compétences tient dans son viewBox', async ({ page }) => {
  const depassement = await page.locator('#skill-tree').evaluate((svg) => {
    const [, , , hauteur] = svg.getAttribute('viewBox').split(' ').map(Number);
    const bas = [...svg.querySelectorAll('.node-label')]
      .map(t => Number(t.getAttribute('y')))
      .reduce((max, y) => Math.max(max, y), 0);
    return bas - hauteur;
  });
  expect(depassement).toBeLessThanOrEqual(0);
});
