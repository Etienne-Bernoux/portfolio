import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { When, Then } = createBdd();

When('je clique sur le POI {string}', async ({ page }, poiId) => {
  await page.locator(`.mm-poi[data-poi="${poiId}"]`).click();
});

When('j\'active le POI {string} au clavier', async ({ page }, poiId) => {
  const poi = page.locator(`.mm-poi[data-poi="${poiId}"]`);
  await poi.focus();
  await expect(poi).toBeFocused();
  await page.keyboard.press('Enter');
});

When('j\'appuie sur Échap', async ({ page }) => {
  await page.keyboard.press('Escape');
});

Then('le detail panel est visible', async ({ page }) => {
  await expect(page.locator('#map-detail')).toHaveClass(/show/);
});

Then('le detail panel affiche {string}', async ({ page }, texte) => {
  await expect(page.locator('#detail-name')).toContainText(texte);
});

Then('le detail panel est masqué', async ({ page }) => {
  await expect(page.locator('#map-detail')).not.toHaveClass(/show/);
});

Then('le POI {string} est annoncé comme déplié', async ({ page }, poiId) => {
  await expect(page.locator(`.mm-poi[data-poi="${poiId}"]`))
    .toHaveAttribute('aria-expanded', 'true');
});

Then('le detail panel pointe vers {string} en rel noopener', async ({ page }, fragment) => {
  const lien = page.locator('#detail-name a');
  await expect(lien).toHaveAttribute('href', new RegExp(fragment));
  await expect(lien).toHaveAttribute('rel', /noopener/);
});
