import { Page } from '@playwright/test';

export class C3HomePage {
  constructor(private page: Page) {}

  // Navigate to the homepage
  async open() {
    await this.page.goto('/en/home/', {
      waitUntil: 'domcontentloaded'
    });
  }
}