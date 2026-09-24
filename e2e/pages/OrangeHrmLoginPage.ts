import { expect, Page } from "@playwright/test";

export class OrangeHrmLoginPage {
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(process.env.OPENSOURCE_URL!);
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  async verifySuccessfulLogin(): Promise<void> {
    await this.page.waitForURL(/dashboard/, { timeout: 15000 });
    await expect(
      this.page.getByRole("heading", { name: "Dashboard" }),
    ).toBeVisible({ timeout: 10000 });
  }
}
