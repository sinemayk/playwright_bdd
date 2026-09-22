//Bu 2 satiri her step definition basina yazmak zorundayiz
//Bu kodlar bize BDD step yazmak icin gerekli fonk lari kullanima
//hazir hale getirir

import { createBdd } from "playwright-bdd";
import { SauceLoginPage } from "../pages/SauceLoginPage";

const { Given, When, Then } = createBdd();
const usernameMap: Record<string, string> = {
  standard: process.env.SAUCE_DEMO_USERNAME_STANDARD!,
  locked: process.env.SAUCE_DEMO_USERNAME_LOCKED!,
  problem: process.env.SAUCE_DEMO_USERNAME_PROBLEM!,
};
let sauceLoginPage: SauceLoginPage;

Given("kullanici login sayfasindadir", async ({ page }) => {
  sauceLoginPage = new SauceLoginPage(page);
  await sauceLoginPage.goto();
});

When("kullanici adi {string} turunde girer", async ({ page }, kullaniciTuru: string) => {
  const kullaniciAdi = usernameMap[kullaniciTuru];
  await sauceLoginPage.fillUserName(kullaniciAdi);
});

When("sifre {string} girer", async ({ page }, sifre: string) => {
  await sauceLoginPage.fillPassword(sifre);
});

When("login butonuna tiklar", async ({ page }) => {
  await sauceLoginPage.clickLogin();
});

Then("urunler sayfasi acilmalidir", async ({ page }) => {
  await sauceLoginPage.verifyProductsPageIsOpened();
});
