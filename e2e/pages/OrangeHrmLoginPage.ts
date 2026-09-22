import { expect, Page } from "@playwright/test";

export class OrangeHrmLoginPage {
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(
      process.env.OPENSOURCE_URL!,
    );
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  async verifySuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(/dashboard/);
    await expect(
      this.page.getByRole("heading", { name: "Dashboard" }),
    ).toBeVisible();
  }
}
