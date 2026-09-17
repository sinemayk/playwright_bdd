// Generated from: e2e\features\orange-hrm-login.feature
import { test } from "playwright-bdd";

test.describe('US002 Open Source Login', () => {

  test('TC01 Gecerli kullanici girisi', { tag: ['@US002', '@US002_TC01'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('kullanici login sayfasina gider', null, { page }); 
    await When('gecerli kullanici adi ve sifre girer', null, { page }); 
    await And('logine tiklar', null, { page }); 
    await Then('basarili bir sekilde login oldugunu dogrular', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\features\\orange-hrm-login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@US002","@US002_TC01"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given kullanici login sayfasina gider","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When gecerli kullanici adi ve sifre girer","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And logine tiklar","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then basarili bir sekilde login oldugunu dogrular","stepMatchArguments":[]}]},
]; // bdd-data-end