import { createBdd } from "playwright-bdd";
import { OrangeHrmLoginPage } from "../pages/OrangeHrmLoginPage";

const { Given, When, Then } = createBdd();

let orangeHrmLoginPage: OrangeHrmLoginPage;

Given("kullanici login sayfasina gider", async ({ page }) => {
  orangeHrmLoginPage = new OrangeHrmLoginPage(page);
  await orangeHrmLoginPage.goto();
});

When("gecerli kullanici adi ve sifre girer", async ({ page }) => {
  await orangeHrmLoginPage.login("Admin", "admin123");
});

When("logine tiklar", async ({ page }) => {
  await orangeHrmLoginPage.clickLogin();
});

Then("basarili bir sekilde login oldugunu dogrular", async ({ page }) => {
  await orangeHrmLoginPage.verifySuccessfulLogin();
});
