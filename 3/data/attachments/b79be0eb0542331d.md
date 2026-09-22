# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/features/saucelogin.feature.spec.js >> US001 Sauce Demo Login Test >> TC03 Gecerli kullanici girisi
- Location: .features-gen/e2e/features/saucelogin.feature.spec.js:22:7

# Error details

```
Error: Missing step: When kullanici adi "problem_user" girer
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
  1  | // Generated from: e2e\features\saucelogin.feature
  2  | import { test } from "playwright-bdd";
  3  | 
  4  | test.describe('US001 Sauce Demo Login Test', () => {
  5  | 
  6  |   test('TC01 Gecerli kullanici girisi', { tag: ['@Login', '@TC01', '@smoke'] }, async ({ Given, When, Then, And, page }) => { 
  7  |     await Given('kullanici login sayfasindadir', null, { page }); 
  8  |     await When('kullanici adi "standard_user" girer', null, { page }); 
  9  |     await And('sifre "secret_sauce" girer', null, { page }); 
  10 |     await And('login butonuna tiklar', null, { page }); 
  11 |     await Then('urunler sayfasi acilmalidir', null, { page }); 
  12 |   });
  13 | 
  14 |   test('TC02 Gecerli kullanici girisi', { tag: ['@Login', '@TC02'] }, async ({ Given, When, Then, And, page }) => { 
  15 |     await Given('kullanici login sayfasindadir', null, { page }); 
  16 |     await When('kullanici adi "error_user" girer', null, { page }); 
  17 |     await And('sifre "secret_sauce" girer', null, { page }); 
  18 |     await And('login butonuna tiklar', null, { page }); 
  19 |     await Then('urunler sayfasi acilmalidir', null, { page }); 
  20 |   });
  21 | 
  22 |   test('TC03 Gecerli kullanici girisi', { tag: ['@Login', '@TC03', '@smoke'] }, async ({ Given, When, Then, And, page }) => { 
  23 |     await Given('kullanici login sayfasindadir', null, { page }); 
> 24 |     await When('kullanici adi "problem_user" girer', null, { page }); 
     |           ^ Error: Missing step: When kullanici adi "problem_user" girer
  25 |     await And('sifre "secret_sauce" girer', null, { page }); 
  26 |     await And('login butonuna tiklar', null, { page }); 
  27 |     await Then('urunler sayfasi acilmalidir', null, { page }); 
  28 |   });
  29 | 
  30 | });
  31 | 
  32 | // == technical section ==
  33 | 
  34 | test.use({
  35 |   $test: [({}, use) => use(test), { scope: 'test', box: true }],
  36 |   $uri: [({}, use) => use('e2e\\features\\saucelogin.feature'), { scope: 'test', box: true }],
  37 |   $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
  38 | });
  39 | 
  40 | const bddFileData = [ // bdd-data-start
  41 |   {"pwTestLine":6,"pickleLine":5,"tags":["@Login","@TC01","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given kullanici login sayfasindadir","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When kullanici adi \"standard_user\" girer","stepMatchArguments":[{"group":{"start":14,"value":"\"standard_user\"","children":[{"start":15,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And sifre \"secret_sauce\" girer","stepMatchArguments":[{"group":{"start":6,"value":"\"secret_sauce\"","children":[{"start":7,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And login butonuna tiklar","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then urunler sayfasi acilmalidir","stepMatchArguments":[]}]},
  42 |   {"pwTestLine":14,"pickleLine":13,"tags":["@Login","@TC02"],"steps":[{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given kullanici login sayfasindadir","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When kullanici adi \"error_user\" girer","stepMatchArguments":[{"group":{"start":14,"value":"\"error_user\"","children":[{"start":15,"value":"error_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And sifre \"secret_sauce\" girer","stepMatchArguments":[{"group":{"start":6,"value":"\"secret_sauce\"","children":[{"start":7,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And login butonuna tiklar","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then urunler sayfasi acilmalidir","stepMatchArguments":[]}]},
  43 |   {"pwTestLine":22,"pickleLine":21,"tags":["@Login","@TC03","@smoke"],"steps":[{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given kullanici login sayfasindadir","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When kullanici adi \"problem_user\" girer","stepMatchArguments":[{"group":{"start":14,"value":"\"problem_user\"","children":[{"start":15,"value":"problem_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And sifre \"secret_sauce\" girer","stepMatchArguments":[{"group":{"start":6,"value":"\"secret_sauce\"","children":[{"start":7,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And login butonuna tiklar","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then urunler sayfasi acilmalidir","stepMatchArguments":[]}]},
  44 | ]; // bdd-data-end
```