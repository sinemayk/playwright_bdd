// Generated from: e2e\features\saucelogin.feature
import { test } from "playwright-bdd";

test.describe('US001 Sauce Demo Login Test', () => {

  test('TC01 Gecerli kullanici girisi', { tag: ['@Login', '@TC01', '@smoke'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('kullanici login sayfasindadir', null, { page }); 
    await When('kullanici adi "standard_user" girer', null, { page }); 
    await And('sifre "secret_sauce" girer', null, { page }); 
    await And('login butonuna tiklar', null, { page }); 
    await Then('urunler sayfasi acilmalidir', null, { page }); 
  });

  test('TC02 Gecerli kullanici girisi', { tag: ['@Login', '@TC02'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('kullanici login sayfasindadir', null, { page }); 
    await When('kullanici adi "error_user" girer', null, { page }); 
    await And('sifre "secret_sauce" girer', null, { page }); 
    await And('login butonuna tiklar', null, { page }); 
    await Then('urunler sayfasi acilmalidir', null, { page }); 
  });

  test('TC03 Gecerli kullanici girisi', { tag: ['@Login', '@TC03', '@smoke'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('kullanici login sayfasindadir', null, { page }); 
    await When('kullanici adi "problem_user" girer', null, { page }); 
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
  {"pwTestLine":6,"pickleLine":5,"tags":["@Login","@TC01","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given kullanici login sayfasindadir","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When kullanici adi \"standard_user\" girer","stepMatchArguments":[{"group":{"start":14,"value":"\"standard_user\"","children":[{"start":15,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And sifre \"secret_sauce\" girer","stepMatchArguments":[{"group":{"start":6,"value":"\"secret_sauce\"","children":[{"start":7,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And login butonuna tiklar","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then urunler sayfasi acilmalidir","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":13,"tags":["@Login","@TC02"],"steps":[{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given kullanici login sayfasindadir","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When kullanici adi \"error_user\" girer","stepMatchArguments":[{"group":{"start":14,"value":"\"error_user\"","children":[{"start":15,"value":"error_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And sifre \"secret_sauce\" girer","stepMatchArguments":[{"group":{"start":6,"value":"\"secret_sauce\"","children":[{"start":7,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And login butonuna tiklar","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then urunler sayfasi acilmalidir","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":21,"tags":["@Login","@TC03","@smoke"],"steps":[{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given kullanici login sayfasindadir","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When kullanici adi \"problem_user\" girer","stepMatchArguments":[{"group":{"start":14,"value":"\"problem_user\"","children":[{"start":15,"value":"problem_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And sifre \"secret_sauce\" girer","stepMatchArguments":[{"group":{"start":6,"value":"\"secret_sauce\"","children":[{"start":7,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And login butonuna tiklar","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then urunler sayfasi acilmalidir","stepMatchArguments":[]}]},
]; // bdd-data-end