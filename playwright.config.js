import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'tests/e2e/features/**/*.feature',
  steps: 'tests/e2e/steps/**/*.js',
});

export default defineConfig({
  testDir,
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'npx serve . -l 3000 -s',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    // PW_CHANNEL=chrome pilote le Chrome installé, utile quand les binaires
    // Playwright ne peuvent pas être téléchargés.
    { name: 'chromium', use: { browserName: 'chromium', channel: process.env.PW_CHANNEL } },
  ],
});
