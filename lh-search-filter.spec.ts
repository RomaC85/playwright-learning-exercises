/**
 * Search and Filter Test Suite for LuxeHome
 * Covers:
 * - Keyword Search
 * - Category Filtering
 * - Negative and combined search/filter behavior
 */

import { test, expect } from '@playwright/test';

const searchInputLocator = (page) => page.getByRole('textbox', { name: /search products/i });
const visibleProductCards = (page) => page.locator('.product-card:visible');
const categoryCheckboxLocator = (page, categoryName) => page.getByRole('checkbox', { name: new RegExp(categoryName, 'i') });
const categoryCardLocator = (page, categoryName) => page.locator('.product-card-category', { hasText: new RegExp(categoryName, 'i') });

const searchTerms = ['chair', 'table', 'sofa'];
const categoryFilters = ['chairs', 'tables', 'lighting'];

test.describe('LuxeHome Search & FilterPage Tests', () => {

  test.beforeEach(async ({ page }) => {
    // ARRANGE
    await page.goto('#/search', { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(/#\/search/);
  });

  for (const term of searchTerms) {
    test(`User can search for a product using keyword '${term}'`, async ({ page }) => {
      const searchInput = searchInputLocator(page);
      await expect(searchInput).toBeVisible({ timeout: 10000 });
      await searchInput.fill(term);
      await expect(searchInput).toHaveValue(term);
      await searchInput.press('Enter');

      const visibleResultCards = visibleProductCards(page);
      await expect(visibleResultCards.first()).toBeVisible();

      const matchingCards = visibleResultCards.filter({ hasText: new RegExp(term, 'i') });
      const totalResultCount = await visibleResultCards.count();
      const matchingResultCount = await matchingCards.count();

      await expect(totalResultCount).toBeGreaterThan(0);
      await expect(matchingResultCount).toBeGreaterThan(0);
    });
  }

  test('Search returns no results for an unknown keyword', async ({ page }) => {
    const searchInput = searchInputLocator(page);
    await expect(searchInput).toBeVisible({ timeout: 10000 });
    await searchInput.fill('unicornxyz');
    await expect(searchInput).toHaveValue('unicornxyz');
    await searchInput.press('Enter');

    const visibleResultCards = visibleProductCards(page);
    await expect(visibleResultCards).toHaveCount(0);
  });

  for (const category of categoryFilters) {
    test(`User can filter products by category: ${category}`, async ({ page }) => {
      const categoryCheckbox = categoryCheckboxLocator(page, category);
      await expect(categoryCheckbox).toBeVisible({ timeout: 10000 });
      await categoryCheckbox.check();
      await expect(categoryCheckbox).toBeChecked();

      const visibleFilteredCards = visibleProductCards(page);
      await expect(visibleFilteredCards.first()).toBeVisible();

      const categoryCards = visibleFilteredCards.filter({ has: categoryCardLocator(page, category) });
      const totalFilteredCount = await visibleFilteredCards.count();
      const categoryCount = await categoryCards.count();

      await expect(totalFilteredCount).toBeGreaterThan(0);
      await expect(categoryCount).toBe(totalFilteredCount);
    });
  }

  test('Search and category filter work together', async ({ page }) => {
    const searchInput = searchInputLocator(page);
    await expect(searchInput).toBeVisible({ timeout: 10000 });
    await searchInput.fill('chair');
    await expect(searchInput).toHaveValue('chair');
    await searchInput.press('Enter');

    const categoryCheckbox = categoryCheckboxLocator(page, 'chairs');
    await expect(categoryCheckbox).toBeVisible({ timeout: 10000 });
    await categoryCheckbox.check();
    await expect(categoryCheckbox).toBeChecked();

    const visibleResultCards = visibleProductCards(page);
    await expect(visibleResultCards.first()).toBeVisible();

    const chairResultCards = visibleResultCards.filter({ hasText: /chair/i });
    const chairCategoryCards = visibleResultCards.filter({ has: categoryCardLocator(page, 'chairs') });
    const totalResultCount = await visibleResultCards.count();
    const chairResultCount = await chairResultCards.count();
    const chairCategoryCount = await chairCategoryCards.count();

    await expect(totalResultCount).toBeGreaterThan(0);
    await expect(chairResultCount).toBe(totalResultCount);
    await expect(chairCategoryCount).toBe(totalResultCount);
  });

});
