PLAYWRIGHT UI TESTING - WEEK 7 (POM REFACTOR & REPORTING)

This submission includes Week 7 Playwright assignments, focusing on reducing code duplication, improving test structure, and implementing the Page Object Model (POM).

All tests were refactored to remove raw selectors from test files and organise them into reusable change classes.

TEST ENVIRONMENT

All tests are executed against https://raider-test-site.onrender.com/

OBJECTIVES:

The goals of this week was to:
- Identify and reduce duplicated test code
- Use hooks (test.describe, test.beforeEach) for better structure
- Implement the Page Object Model
- Improve test maintability and readability
- Use Playwright reporting and debugging tools

THE DUPLICATION PROBLEM

In Week 6, many steps and selectors were repeated across files, such as:
- await page.goto('/')
- Clicking the login link
- Reusing the same form field selectors (Login name, Password, Login)

This duplication made tests harder to maintain and update.

REFACTORING WITH HOOKS

Login tests were refatored using:
- test.describe() to group related tests
- test.beforeEach() to handle repeated navigation steps

Result:
- Cleaner test files
- Reduced duplication
- Improved readability

PAGE OBJECT MODEL (POM)

Created reusable page classes in a /pages folder.

LoginPage.ts
- Constructor with Page
- Readonly locators
- goto() method
- login() method

HomePage.ts
- Navigation locators
- navigateTo(linkName) method

ProducsPage.ts
- Product-related locators and actions

Refactor outcome:
- All .spec.ts files now use Page Objects
- No raw selectors remain in test files

REPORTING & DEBUGGING

Configured Playwright reporting in playwright.config.ts:
- screenshot: 'only-on-failure'
- trace: 'on first.retry'
- retries: 1 (for debugging failed tests)

What I practiced:
- Running tests: npx playwright test
- Viewing reports: npx playwright show-report
- Debugging failures:
  - Intentionally broke a test
  - Located failure in HTML report
  - Viewed screenshot and trace

What I learned:
1. Understanding Playwright reprts and failure output
   - identify failing steps
   - analyze error messages
   - locate screenshots captured on failure
3. Debugging with screenshots and trace viewer
   - How to inspect text execution visually and trace step by-step interactions to pinpoint issues more effectively

DEBUGGING & TROUBLESHOOTING EXPERIENCE

During this assignment, I encountered several issues while working with Playwright's configuration and test structure:
- Retry configuration confusion
    - Writing a new property: retries: 1, instead of replacing 2 with 1 in   'retries: process.env.CI ? 2 : 0'.
    - This means ending up with two 'retries' properties in the same object.
- Test initialization issues (page context setup)
    - Some tests initially failed due to improper setup of the Page object or missing navigation steps. I fixed this with the help of GithubAI. The fix ensured that each test (or beforeEach hook) correctly initializes and navigates to the required page state before performing actions.
    
BONUS ASSIGNMENT 

Created a custom Playwright fixture to provide a pre-configured LoginPage.

Purpose
- Reduce repeated setup in tests
- Replace manual login steps

Comparison:
- beforeEach - runs setup before every test
- Fixture - injects ready-to-use objects directly into tests

MY KEY TAKEAWAYS
- Repeated code is a sign that refactoring is needed
- Hooks help reduce duplication and organize tests
- Page Object Model (POM) improves scalability and maintainability
- Separating test logic from UI structure makes tests cleaner
- Playwright reports and traces are essential for debugging
- Fixtures provide a more advanced way to manage setup

FINAL RESULTS
- All tests refactored using POM
- No raw selectors in test files
- Reporting and debugging fully configured
- All tests passing successfully



