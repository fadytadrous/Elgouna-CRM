import {test} from "@playwright/test";
import * as fs from 'fs';
const { urls } = require('../config/urls.ts');
import QualifiedLead from '../Pages/gounaPlus/qualified-lead.ts';


let cookies: any;
let qualifiedLead: QualifiedLead;

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

test.beforeEach( async({page}) => {
    if (cookies) {
        await page.context().addCookies(cookies.cookies);
      } 
    // Load the session storage (cookies, tokens) from the auth file
    await page.goto(urls.gounaPlus);
    //qualified lead or parent lead
    qualifiedLead = new QualifiedLead(page);
})

test.describe('Validate that user can generate quote', () => {

    test('Create standard packages', async ({ page }) => {
        await qualifiedLead.navigateToNewStandardPackagePage();
      
    })
})