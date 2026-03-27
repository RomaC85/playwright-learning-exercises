import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginName = page.getByLabel('Login name');
    this.password = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('/');
    await this.page.getByRole('link', { name: 'Login or register' }).click();
  }

  async login(username: string, password: string) {
    await this.loginName.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async isLoggedIn() {
    await this.page.getByRole('heading', { name: 'My Account' }).waitFor();
  }

  getErrorMessage() {
    return this.page.getByText(/incorrect login or password/i);
  }
}