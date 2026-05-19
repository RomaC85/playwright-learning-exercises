/**
 * Search and Filter Test Suite for LuxeHome
 * Covers:
 * - Keyword Search
 * - Category Filtering
 */

import { test, expect } from '@playwright/test';

test.describe('LuxeHome Search & FilterPage Tests', () => {

  test.beforeEach(async ({ page }) => {

    // ARRANGE
    await page.goto('#/search', { waitUntil: 'networkidle' });
    await expect(page).toHaveURL(/#\/search/);

  });

  test('User can search for a product using keyword search', async ({ page }) => {

    // ACT
    // Use the accessible textbox role and label so the test targets the actual search field.
    const searchInput = page.getByRole('textbox', { name: /search products/i });
    await expect(searchInput).toBeVisible({ timeout: 10000 });
    await searchInput.fill('chair');
    await expect(searchInput).toHaveValue('chair');
    await searchInput.press('Enter');

    // Wait for the first visible search result to appear after the search action.
    const visibleResultCards = page.locator('.product-card:visible');
    await expect(visibleResultCards.first()).toBeVisible();

    // ASSERT
    const chairResultCards = visibleResultCards.filter({ hasText: /chair/i });
    const totalResultCount = await visibleResultCards.count();
    const chairResultCount = await chairResultCards.count();

    // Confirm the search returns at least one product,
    // and every visible result card includes the search term.
    await expect(totalResultCount).toBeGreaterThan(0);
    await expect(chairResultCount).toBe(totalResultCount);

  });

  test('User can filter products by category', async ({ page }) => {

    // ACT
    const categoryCheckbox = page.getByRole('checkbox', { name: /chairs/i });
    await expect(categoryCheckbox).toBeVisible({ timeout: 10000 });
    await categoryCheckbox.check();
    await expect(categoryCheckbox).toBeChecked();

    // Wait until the first visible filtered product card appears.
    const visibleFilteredCards = page.locator('.product-card:visible');
    await expect(visibleFilteredCards.first()).toBeVisible();

    // ASSERT
    const chairCategoryCards = visibleFilteredCards.filter({ has: page.locator('.product-card-category', { hasText: /chairs/i }) });
    const totalFilteredCount = await visibleFilteredCards.count();
    const chairCategoryCount = await chairCategoryCards.count();

    // Confirm the category filter returns at least one product,
    // and every visible card belongs to the selected 'Chairs' category.
    await expect(totalFilteredCount).toBeGreaterThan(0);
    await expect(chairCategoryCount).toBe(totalFilteredCount);

  });

});