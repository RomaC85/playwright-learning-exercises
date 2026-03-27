import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly productLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productLink = page.getByRole('link', {
      name: 'Absolute Anti-Age Spot Replenishing Unifying Treatment'
    });
  }

  async gotoSkincare() {
    await this.page.goto('/?category=Skincare');
  }
}