// Generated from: e2e\features\saucelogin.feature
import { test } from "playwright-bdd";

test.describe('US001 Sauce Demo Login Test', () => {

  test('TC001 Gecerli Veri ile Login Olabilmeliyim', async ({ Given, When, Then, And, page }) => { 
    await Given('kullanici login sayfasindadir', null, { page }); 
    await When('kullanici adi "standard_user" girer', null, { page }); 
    await And('sifre "secret_sauce" girer', null, { page }); 
    await And('login butonuna tiklar', null, { page }); 
    await Then('urunler sayfasi acilmalidir', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\features\\saucelogin.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given kullanici login sayfasindadir","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When kullanici adi \"standard_user\" girer","stepMatchArguments":[{"group":{"start":14,"value":"\"standard_user\"","children":[{"start":15,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"And sifre \"secret_sauce\" girer","stepMatchArguments":[{"group":{"start":6,"value":"\"secret_sauce\"","children":[{"start":7,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And login butonuna tiklar","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then urunler sayfasi acilmalidir","stepMatchArguments":[]}]},
]; // bdd-data-end