import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { When, Then } = createBdd();

When('je clique sur le POI {string}', async ({ page }, poiId) => {
  await page.locator(`.mm-poi[data-poi="${poiId}"]`).click();
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
