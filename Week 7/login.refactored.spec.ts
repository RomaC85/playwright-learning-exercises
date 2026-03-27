// Custom Playwright Login Fixture vs beforeEach – A Comparison
// Setup location: Fixture = external fixture file vs. beforeEach = inside test file 
// Code style: Fixture = declarative usage vs. beforeEach = imperative setup  
// Reusability: Fixture = high (can be reused across files) vs. beforeEach = limited
// Variables: Fixture = injected ({ loginPage }) vs beforeEach = shared variable (let loginPage) 
// Pattern: Fixture = dependency injection vs beforeEach = manual setup 

import { test, expect } from './fixtures/testFixtures';

test.describe('Login Tests', () => {

  test('Successful login', async ({ loginPage }) => {
    // The loginPage fixture is injected automatically.

    // Perform login with valid credentials
    await loginPage.login('testuserjr', 'password246');

    // Verify that the user is successfully logged in
    await loginPage.isLoggedIn();
  });

  test('Failed login', async ({ loginPage }) => {

    // Attempt login with invalid credentials
    await loginPage.login('testuserjr', 'wrongpassword');

    // Verify that an error message is displayed to the user
    await expect(loginPage.getErrorMessage()).toBeVisible();
  });

});