# Elgouna-CRM Project

## Overview
This repository contains the Customer Relationship Management (CRM) system for Orascom. The system is designed to manage customer relationships, track interactions, and streamline business processes.

## Features
- Customer data management
- Interaction tracking
- Reporting and analytics
- User management system
- Automated workflows

## Getting Started
1. Clone the repository
    ```bash
    git clone https://github.com/your-org/Elgouna-CRM.git
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Configure environment variables
    Create a [.env](http://_vscodecontentref_/1) file in the root directory with the following content:
    ```plaintext
    USEREMAIL=your-email@example.com
    PASSWORD=your-password
    ```

4. Run the login script to save the authentication state
    ```bash
    node tests/login.js
    ```
    This will create an [auth.json](http://_vscodecontentref_/2) file that stores cookies and session storage for login to avoid logging in between tests.

5. Run the Community Care Case spec test cases
    ```bash
    npx playwright test tests/CommunityCareCase.spec.ts
    ```
    This will cover all the SLAs in the Owest community care project. You can test a certain SLA by commenting out the SLAs in the [testData.ts](http://_vscodecontentref_/3) file.

## Project Structure
- **Playwright JS**: This project uses Playwright for end-to-end testing.
- **POM Design**: The project follows the Page Object Model (POM) design pattern.

## Reports
After running the tests, you will find a report in the [playwright-report](http://_vscodecontentref_/4) folder.

## Common Fixtures
For common fixtures, please refer to the `sharedFixture.ts` file.

## Common Selectors and Methods
Any common selectors or methods are added in the [commonSelectors.ts](http://_vscodecontentref_/5) file.

## URLs
All URLs are added in the [urls.ts](http://_vscodecontentref_/6) file to avoid code repetition.

## Documentation
For detailed documentation, please refer to the `/docs` directory.

## Contributing
Please read our contributing guidelines before submitting pull requests.

## Support
For support inquiries, please contact the development team.