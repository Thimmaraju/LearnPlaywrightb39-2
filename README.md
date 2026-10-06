# Learn Playwright B39

This project is a Playwright automation learning repository focused on end-to-end testing of the OrangeHRM demo application and a few additional UI checks. It uses Playwright Test with JavaScript specs and structured test data stored in JSON files.

## Tech stack

- Playwright Test
- JavaScript
- Faker.js for dynamic test data
- JSON-based test data files

## Folder structure

```text
LearnPlaywrightB39/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── e2e/
│   └── loginfrome2e.spec.js
├── testdata/
│   ├── login.json
│   ├── buzz/
│   │   └── buzzpost.json
│   └── pim/
│       └── addemp.json
├── tests/
│   ├── admin/
│   │   ├── addempstatus.spec.js
│   │   └── addjobtitle.spec.js
│   ├── buzz/
│   │   └── postamessage.spec.js
│   ├── PIM/
│   │   └── addemployee.spec.js
│   ├── example.spec.js
│   ├── login.spec.js
│   └── swaglablogin.spec.js
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
├── qa.playwright.config.js
├── preprod.playwright.config.js
├── results.json
├── playwright-report/
├── test-results/
└── README.md
```

## What is covered

- Login validation scenarios
- Admin actions such as adding job titles and employment status
- PIM employee creation flow
- Buzz post creation flow
- Additional exploration and smoke tests

## Key config files

- `playwright.config.js` - default local configuration pointing to the main OrangeHRM demo environment
- `qa.playwright.config.js` - QA environment configuration
- `preprod.playwright.config.js` - pre-production environment configuration

## How to run the tests

Install dependencies:

```bash
npm install
npx playwright install
```

Run the full suite:

```bash
npx playwright test
```

Run a specific file:

```bash
npx playwright test tests/login.spec.js
```

Run a specific browser configuration:

```bash
npx playwright test --config=qa.playwright.config.js
npx playwright test --config=preprod.playwright.config.js
```

Open the HTML report:

```bash
npx playwright show-report
```

## Test data

The repository keeps reusable inputs in `testdata/`:

- `testdata/login.json` contains username/password and invalid credentials
- `testdata/buzz/buzzpost.json` contains Buzz message payloads
- `testdata/pim/addemp.json` stores employee-related data

## Notes

This project is designed as a learning and practice repository for Playwright automation. It contains both core test flows and additional experimental tests while covering browser automation, assertions, environment-specific config, and generated test artifacts.
