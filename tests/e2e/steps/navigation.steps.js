import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, Then } = createBdd();

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
  await expect(page.locator('.achievement')).toHaveCount(9);
});

Then('je vois la section carte', async ({ page }) => {
  await expect(page.locator('#map-section')).toBeVisible();
  await expect(page.locator('.mm-poi')).toHaveCount(12);
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
