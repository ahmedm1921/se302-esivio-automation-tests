import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { PlanPage } from '../pages/PlanPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ContactPage } from '../pages/ContactPage';

// Table 1 
test('Functional: View eSIM plan details', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();
  await home.selectFirstPlan();
  await expect(page.locator('body')).toBeVisible();
});

// Table 2 
test('Functional: Purchase eSIM (positive)', async ({ page }) => {
  const home = new HomePage(page);
  const plan = new PlanPage(page);

  await home.open();
  await home.selectFirstPlan();
  await plan.proceedToCheckout();

  await expect(page.url()).toContain('checkout');
});

// Table 3 
test('Functional: Checkout with missing required fields', async ({ page }) => {
  const home = new HomePage(page);
  const plan = new PlanPage(page);

  await home.open();
  await home.selectFirstPlan();
  await plan.proceedToCheckout();

  await expect(page.locator('text=required')).toBeVisible();
});

// Table 4 
test('Functional: Invalid email format', async ({ page }) => {
  const checkout = new CheckoutPage(page);
  await page.goto('https://www.esivio.com/checkout');
  await checkout.fillEmail('invalid-email');
  await expect(page.locator('text=invalid')).toBeVisible();
});

// Table 5 
test('Functional: Select different country eSIM', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();
  await home.searchCountry('Germany');
  await home.searchCountry('France');
  await expect(page.locator('body')).toBeVisible();
});

// Table 6 
test('Functional: Search supported country', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();
  await home.searchCountry('Italy');
  await expect(page.locator('body')).toBeVisible();
});

// Table 7 
test('Functional: Search unsupported country', async ({ page }) => {
  const home = new HomePage(page);
  await home.open();
  await home.searchCountry('Atlantis');
  await expect(page.locator('text=No results')).toBeVisible();
});

// Table 8 
test('Functional: Open FAQ page', async ({ page }) => {
  await page.goto('https://www.esivio.com/faq');
  await expect(page.locator('body')).toBeVisible();
});

// Table 9 
test('Functional: Open Contact page', async ({ page }) => {
  await page.goto('https://www.esivio.com/contact');
  await expect(page.locator('body')).toBeVisible();
});

// Table 10 
test('Functional: Send contact form', async ({ page }) => {
  const contact = new ContactPage(page);
  await contact.open();
  await contact.sendMessage('Test User', 'test@mail.com', 'Test message');
  await expect(page.locator('text=success')).toBeVisible();
});
