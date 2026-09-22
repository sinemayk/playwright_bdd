import { createBdd } from "playwright-bdd";
import { OrangeHrmLoginPage } from "../pages/OrangeHrmLoginPage";

const { Given, When, Then } = createBdd();

let orangeHrmLoginPage: OrangeHrmLoginPage;

Given("kullanici login sayfasina gider", async ({ page }) => {
  orangeHrmLoginPage = new OrangeHrmLoginPage(page);
  await orangeHrmLoginPage.goto();
});

When("gecerli kullanici adi ve sifre girer", async ({ page }) => {
  await orangeHrmLoginPage.login(process.env.OPENSOURCE_USERNAME!, process.env.OPENSOURCE_PASSWORD!);
});

When("logine tiklar", async ({ page }) => {
  await orangeHrmLoginPage.clickLogin();
});

Then("basarili bir sekilde login oldugunu dogrular", async ({ page }) => {
  await orangeHrmLoginPage.verifySuccessfulLogin();
});
