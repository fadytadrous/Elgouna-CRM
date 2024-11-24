import { test as baseTest } from '@playwright/test';
import * as fs from 'fs';
import { navBarSelectors } from '../../Pages/common/commonSelectors';

// Extend Playwright's base test (no authenticatedPage logic here)
export const test = baseTest;

let cookies: any;

// Load cookies from 'auth.json' before running tests
test.beforeAll(() => {
  const cookiesFilePath = './auth.json';
  if (fs.existsSync(cookiesFilePath)) {
    const cookiesJSON = fs.readFileSync(cookiesFilePath, 'utf-8');
    cookies = JSON.parse(cookiesJSON);
  } else {
    throw new Error('auth.json not found. Please ensure it exists.');
  }
});

test.beforeEach(async ({ page }) => {
    if (cookies) {
        await page.context().addCookies(cookies.cookies);
      }   
});

// test.afterEach(async ({ page }) => {
//   // Logic to execute after each test (e.g., clearing cookies or local storage)
//   await page.close();
// });

// test.afterAll(async () => {

// });
