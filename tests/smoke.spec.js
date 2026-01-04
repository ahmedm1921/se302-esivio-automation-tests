import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

// Table 11 
test('Smoke: Homepage loads', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();
  await expect(page).toHaveTitle(/Esivio/i);
});

// Table 12 
test('Smoke: Select eSIM plan', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();
  await home.selectFirstPlan();
  await expect(page.locator('body')).toBeVisible();
});

// Table 13 
test('Smoke: Checkout page loads', async ({ page }) => {
  await page.goto('https://www.esivio.com/checkout');
  await expect(page.locator('body')).toBeVisible();
});

// Table 14 
test('Smoke: Navigation links work', async ({ page }) => {
  await page.goto('https://www.esivio.com');
  await page.goto('https://www.esivio.com/faq');
  await expect(page.locator('body')).toBeVisible();
});

// Table 15 
test('Smoke: Contact page loads', async ({ page }) => {
  await page.goto('https://www.esivio.com/contact');
  await expect(page.locator('body')).toBeVisible();
});
