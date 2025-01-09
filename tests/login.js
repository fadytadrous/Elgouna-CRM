const { chromium } = require('playwright');
const { urls } = require('../config/urls.ts');
require('dotenv').config();

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to CRM Dynamics login page
  await page.goto(urls.gounaPlus);

  // Perform login manually to handle MFA
    await page.getByPlaceholder("someone@example.com").fill(process.env.USEREMAIL);
    await page.getByText("Next", {exact:true}).click();
    // page.waitForTimeout(60000);

    await page.getByPlaceholder("Password").fill(process.env.PASSWORD);
    await page.getByText("Sign in", {exact:true}).click();

  // After completing login, save storage state (cookies and session)
  await context.storageState({ path: 'auth.json' });

  await browser.close();
})();
