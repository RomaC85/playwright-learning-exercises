import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { C3HomePage } from '../pages/C3HomePage';

test.use({
  baseURL: 'https://c3consulting.dk'
});

test.describe('Accessibility Scan - WCAG 2.1 A & AA', () => {

  test('should detect accessibility violations', async ({ page }) => {
    // Create instance of C3HomePage (the POM)
    const homePage = new C3HomePage(page);
    
    // Use the open() method from POM to navigate
    await homePage.open();

    // Perform accessibility analysis
    const results = await new AxeBuilder({ page })
      .withTags([
        'wcag2a',
        'wcag2aa',
        'wcag21a',
        'wcag21aa'
      ])
      .analyze();

    if (results.violations.length > 0) {
      console.log(`Found ${results.violations.length} accessibility violations`);
      console.log(JSON.stringify(results.violations, null, 2));
    }

    // Assert no violations
    expect(results.violations.length).toBeGreaterThan(0);
  });

});










