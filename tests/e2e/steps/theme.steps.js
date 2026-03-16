import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { When, Then } = createBdd();

let themeBefore;

When('je note le thème courant', async ({ page }) => {
  await page.waitForSelector('.mm-poi');
  themeBefore = await page.locator('html').getAttribute('data-theme');
});

When('je clique sur le bouton thème', async ({ page }) => {
  await page.locator('#theme-toggle').click();
});

Then('le thème a changé', async ({ page }) => {
  const themeAfter = await page.locator('html').getAttribute('data-theme');
  expect(themeAfter).not.toBe(themeBefore);
});
