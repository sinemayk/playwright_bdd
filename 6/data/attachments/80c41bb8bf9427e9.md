# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/features/saucelogin.feature.spec.js >> US001 Sauce Demo Login Test >> TC01 Gecerli kullanici girisi
- Location: .features-gen/e2e/features/saucelogin.feature.spec.js:6:7

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { expect, Page } from "@playwright/test";
  2  | export class SauceLoginPage {
  3  |     /*
  4  |     constructor(private page: Page) bu sekilde yazdigimizda ts otomatik olarak class icinde private
  5  |     olarak page olusturur ve constructordan gelen page i this.page e atar
  6  |      */
  7  |   constructor(private page: Page) {}
  8  | 
  9  |   async goto(): Promise<void> {
  10 |     await this.page.goto("https://saucedemo.com/");
  11 |   }
  12 | 
  13 |   async fillUserName(kullaniciAdi: string): Promise<void> {
  14 |     await this.page.getByPlaceholder("Username").fill(kullaniciAdi);
  15 |   }
  16 | 
  17 |   async fillPassword(sifre: string): Promise<void> {
  18 |     await this.page.getByPlaceholder("Password").fill(sifre);
  19 |   }
> 20 | 
     |                                                  ^ Error: locator.fill: value: expected string, got undefined
  21 |   async clickLogin(): Promise<void> {
  22 |     await this.page.getByRole("button", { name: "Login" }).click();
  23 |   }
  24 | 
  25 |   async verifyProductsPageIsOpened(): Promise<void> {
  26 |     await expect(this.page).toHaveURL(/inventory/);
  27 |   }
  28 | }
  29 | 
```