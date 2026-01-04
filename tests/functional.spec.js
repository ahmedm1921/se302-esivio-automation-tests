import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { PlanPage } from '../pages/PlanPage';

test('Functional: Select eSIM plan', async ({ page }) => {
  const home = new HomePage(page);
  const plan = new PlanPage(page);

  await home.open();
  await home.selectFirstPlan();
  await plan.proceedToCheckout();

  await expect(page.url()).toContain('checkout');
});
