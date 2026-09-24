# Playwright BDD Demo

![Playwright Tests](https://github.com/sinemayk/playwright_bdd/actions/workflows/playwright.yml/badge.svg)

📊 [Canlı Test Raporu](https://sinemayk.github.io/playwright_bdd/)

A sample end-to-end test project that combines Playwright with BDD-style feature files and TypeScript step definitions. The repository demonstrates real-world automation patterns such as page objects, scenario-based testing, and cross-browser execution using Chromium, Firefox, and WebKit.

## Overview

This project is designed to help learn and practice:

- Playwright Test automation
- BDD workflow with Gherkin feature files
- TypeScript step definitions
- Page Object Model (POM)
- Cross-browser execution
- Test execution filtering by tags

## Tech Stack

- Node.js
- TypeScript
- Playwright
- Playwright BDD
- HTML report generation

## Project Structure

```text
playwright_bdd/
├── .github/workflows/
│   └── playwright.yml
├── e2e/
│   ├── features/
│   │   ├── saucelogin.feature
│   │   └── orange-hrm-login.feature
│   ├── pages/
│   │   ├── OrangeHrmLoginPage.ts
│   │   └── SauceLoginPage.ts
│   └── steps/
│       ├── sauce-login.steps.ts
│       └── orange-hrm.steps.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── playwright-report/
```

## Prerequisites

Before running the tests, make sure the following are installed:

- Node.js 18+
- npm
- A supported operating system for Playwright

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

If WebKit is causing issues on Windows, reinstall it explicitly:

```bash
npx playwright install --force webkit
```

## Available Scripts

The project includes the following scripts in package.json:

```bash
npm run bdd
```
Runs all generated BDD tests.

```bash
npm run smoke
```
Runs only scenarios tagged with @smoke.

```bash
npm run login
```
Runs only login-related scenarios.

## Running Tests

### Full suite

```bash
npm run bdd
```

### Single browser / project

```bash
npx playwright test --project=webkit --reporter=line
```

### Run a specific project

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Example Feature File

```gherkin
@Login
Feature: US001 Sauce Demo Login Test

@TC01 @smoke
Scenario: TC01 Gecerli kullanici girisi
    Given kullanici login sayfasindadir
    When kullanici adi "standard" turunde girer
    And sifre girer
    And login butonuna tiklar
    Then urunler sayfasi acilmalidir
```

## How It Works

- Feature files define behavior in Gherkin syntax.
- Step definitions map those steps to Playwright actions.
- Page object classes encapsulate page interactions and assertions.
- Playwright executes scenarios in the defined browser projects.

## Example Flow

1. Navigate to the login page
2. Fill in username and password
3. Click login
4. Assert that the products page opens

## Windows WebKit Troubleshooting

On some Windows machines, Windows Security may block Playwright or the dependency checker used by WebKit, especially `PrintDeps.exe`. This may result in browser launch failures such as:

- "browser has been closed"
- immediate process exit
- WebKit failing before the page loads

### Fix

Add the Playwright browser folder to Windows Security exclusions:

```text
%LOCALAPPDATA%\ms-playwright
```

If prompted, allow:

- Playwright.exe
- PrintDeps.exe
- WebKit-related directories and DLLs

Then reinstall WebKit:

```bash
npx playwright install --force webkit
```
## İlgili Projeler
Bu repo, üç parçalı bir Playwright öğrenme serisinin BDD/Gherkin odaklı parçasıdır.
- [playwright_code](https://github.com/sinemayk/playwright_code) — Gelişmiş fixture/auth stratejileri ve API testleri
- [playwright-pom](https://github.com/sinemayk/playwright-pom) — Page Object Model'in temiz bir uygulaması
  
## License

This project is intended for learning, demonstration, and personal test automation experiments.
