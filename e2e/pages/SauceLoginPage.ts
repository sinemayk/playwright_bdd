import { expect, Page } from "@playwright/test";
export class SauceLoginPage {
    /*
    constructor(private page: Page) bu sekilde yazdigimizda ts otomatik olarak class icinde private
    olarak page olusturur ve constructordan gelen page i this.page e atar
     */
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto("https://saucedemo.com/");
  }

  async fillUserName(kullaniciAdi: string): Promise<void> {
    await this.page.getByPlaceholder("Username").fill(kullaniciAdi);
  }

  async fillPassword(sifre: string): Promise<void> {
    await this.page.getByPlaceholder("Password").fill(sifre);
  }

  async clickLogin(): Promise<void> {
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  async verifyProductsPageIsOpened(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory/);
  }
}
