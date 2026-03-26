import { test, expect } from '@playwright/test';

// Exercise 7.6
test('navigate menu to visit each page and verify URL', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
  await expect(page).toHaveURL('/');

  await page.getByRole('link', { name: 'Apparel & Accessories' }).click();
  await expect(page).toHaveURL(/Apparel/);

  await page.getByRole('link', { name: 'Makeup' }).click();
  await expect(page).toHaveURL(/Makeup/);

  await page.getByRole('link', { name: 'Skincare' }).click();
  await expect(page).toHaveURL(/Skincare/);

  await page.getByRole('link', { name: 'Fragrance' }).click();
  await expect(page).toHaveURL(/Fragrance/);

  await page.getByRole('link', { name: 'Men' }).click();
  await expect(page).toHaveURL(/Men/);

  await page.getByRole('link', { name: 'Hair Care' }).click();
  await expect(page).toHaveURL(/Hair%20Care/);

  await page.getByRole('link', { name: 'Books' }).click();
  await expect(page).toHaveURL(/Books/);
});