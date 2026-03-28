This folder contains my first automated UI tests using Playwright. It contains Assignments 1, 2, and 3, and Exercises 6 and 7 of Week 6.

TEST ENVIRONMENT:
All tests are executed against the test site: https://raider-test-site.onrender.com/

This submission is an improved version based on teacher's feedback from a previous submission: https://hyf-automation.onrender.com/corrections.html#maria

OBJECTIVES:
The focus of this assignment was to:
- Understand Playwright test structure
- Use locators and direct selectors
- Write basic test cases
- Practice assertions
- Explore positive and negative scenarios
- Run Playwright tests

TEST FILES OVERVIEW

1. login.spec.ts
This file tests the login functionality of the test site.

Test Coverage:
- Navigate to the homepage
- Click on "login or Register"
- Fill in login credentials
- Submit the login form

Test cases:
- Successful login with valid credentials
- Failed login with wrong password
- Failed login with empty form
- Failed login with empty username
- Failed login with empty password
- Failed login with wrong username
- Failed login with invalid username and password

What I learned:
- Writing structured login tests 
- Using getBylabel() for form inputs
- Using getByRole() for buttons
- Writing both positive and negative test scenarios
- Verifying UI feedback with assertions
- Using CSS selectors only as a fallback when better locators are not available
- Running Playwright tests

2. navigation.spect.ts
This file tests the main navigation menu of the test site.

Test coverage:
- Navigate to the homepage
- Click through the different menu categories

Pages tested:
- Home, Apparel and Accessories, Makeup, Skincare, Fragrance, Men, HairCare and Books

Assertions:
. verified correct page navigation using toHaveURL()

What I learned:
- Navigating through UI elements
- Using role-based selectors for links
- Validating navigation through URL assertions

3. products.spec.ts
This file tests product-related functionality

Test Coverage:
- Navigate to product pages
- Verify that products are visible
- Check product details (e.g. product description)

Additional practice: 
- Created an intentionally failing test to observe Playwright behavior

What I learned:
- Using locator() for flexible selection
- Verifying text content with assertions
- Understanding how Playwright reports failures

My Key Takeaways:
- Playwrights tests follow the pattern: Arrange > Act > Assert
- Locators are essential for reliable element interaction
- Tests should cover both success and failure scenarios
- Clear test structure improves readability and maintainability.
- CSS selectors should be  used only as a fallback, when more user-focused locators (e.g. roles or labels) are available
