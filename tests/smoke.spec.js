import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Smoke: Homepage loads', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();
  await expect(page).toHaveTitle(/Esivio/i);
});
