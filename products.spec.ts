import { test, expect } from '@playwright/test';

// Assignment 3 (Week 6) - Product Page Tests
test('user can open product page', async ({ page }) => {
  await page.goto('/');

  // Click the product name to open the product page
  await page.getByRole('link', { name: 'BeneFit Girl Meets Pearl' }).click();
  
  // Assertion: check that the product name appears on the page
  await expect(page.locator('h1')).toContainText('BeneFit Girl Meets Pearl');
});

// Exercise 7.4 
test('navigate to Products page and see product visibility', async ({ page }) => {
  await page.goto('/?category=Skincare');
  await expect(page.getByRole('link', { name: 'Absolute Anti-Age Spot Replenishing Unifying Treatment' })).toBeVisible();
});

// Exercise 7.5
test('user can open a product detail page', async ({ page }) => {
  await page.goto('/?category=Skincare');
  await page.getByRole('link', { name: 'Absolute Anti-Age Spot Replenishing Unifying Treatment' }).click();
  await expect(page.locator('p.product-detail-description')).toContainText('Advanced anti-aging treatment');
});

// Exercise 7.7 - Benefit vs BeneFit (diffeent casing)
test('intentionally use a wrong selector', async ({ page }) => {
  await page.goto('/'); 
  await page.getByRole('link', { name: 'BeneFit Girl Meets Pearl' }).click(); 
  await expect(page.locator('h1')).toContainText('BeneFit Girl Meets Pearl');
});