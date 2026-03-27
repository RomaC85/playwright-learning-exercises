import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly navMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navMenu = page.getByRole('navigation');
  }

  async goto() {
    await this.page.goto('/');
  }

  async navigateTo(linkName: string) {
    await this.navMenu.getByRole('link', { name: linkName }).click();
  }
  async assertURLContains(text: string) {
    await this.page.waitForURL(new RegExp(text));
  }
}