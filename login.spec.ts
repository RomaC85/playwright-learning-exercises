import { test, expect } from '@playwright/test';

// Exercise 6. Write a login test from scratch
test.describe('Login Tests', () => {
    test('Successful login', async ({ page }) => {

    // Arrange
    await page.goto('/');

    // Act
    await page.getByRole('link', { name: 'Login or register' }).click();
    await page.getByLabel('Login name').fill('testuserjr');
    await page.getByLabel('Password').fill('password246');
    await page.getByRole('button', { name: 'Login' }).click();

    // Assert
    await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();

  });
    test('Failed login with wrong password', async ({ page }) => {

    // Arrange
    await page.goto('/');

    // Act
    await page.getByRole('link', { name: 'Login or register' }).click();
    await page.getByLabel('Login name').fill('testuserjr');
    await page.getByLabel('Password').fill('wrongpassword');
    await page.getByRole('button', { name: 'Login' }).click();

    // Assert
    await expect(page.getByText(/incorrect login or password/i)).toBeVisible();
  });
    test('failed login with empty form submission', async ({ page }) => {

    // Arrange
    await page.goto('/');

    // Act
    await page.getByRole('link', { name: 'Login or register' }).click();
    await page.getByRole('button', { name: 'Login' }).click();

    // Assert
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });
// Week 6 - Assignment 1: Complete test suite for login
    test('failed login with empty password', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Login or register' }).click();
    await page.getByRole('textbox', { name: 'Login name' }).fill('usertestjr');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
    test('failed login with empty login name', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Login or register' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('password246');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
    test('failed login with wrong login name', async ({ page }) => {  
    await page.goto('/');
    await page.getByRole('link', { name: 'Login or register' }).click();
    await page.getByRole('textbox', { name: 'Login name' }).fill('usertest');
    await page.getByRole('textbox', { name: 'Password' }).fill('password246');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText(/incorrect login or password/i)).toBeVisible();
});
    test('failed login with wrong login name and password', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Login or register' }).click();
    await page.getByRole('textbox', { name: 'Login name' }).fill('usetestjr');
    await page.getByRole('textbox', { name: 'Password' }).fill('passwword246_');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText(/incorrect login or password/i)).toBeVisible();
});
});