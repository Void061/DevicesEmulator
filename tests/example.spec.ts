import { test } from '@playwright/test';
import { CONFIGURATIONS_EMULATOR } from '../configurations';

test('Emulator', async ({ page }) => {
  await page.goto(CONFIGURATIONS_EMULATOR.TARGET_URL);
  await page.pause();
});


