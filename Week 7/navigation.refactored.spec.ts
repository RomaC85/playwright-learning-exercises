import { test } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test('navigate menu to visit each page and verify URL', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();

  await homePage.navigateTo('Home');
  await homePage.assertURLContains('/');

  await homePage.navigateTo('Apparel & Accessories');
  await homePage.assertURLContains('Apparel');

  await homePage.navigateTo('Makeup');
  await homePage.assertURLContains('Makeup');

  await homePage.navigateTo('Skincare');
  await homePage.assertURLContains('Skincare');

  await homePage.navigateTo('Fragrance');
  await homePage.assertURLContains('Fragrance');

  await homePage.navigateTo('Men');
  await homePage.assertURLContains('Men');

  await homePage.navigateTo('Hair Care');
  await homePage.assertURLContains('Hair%20Care');

  await homePage.navigateTo('Books');
  await homePage.assertURLContains('Books');
});