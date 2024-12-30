import { test, expect } from "./fixtures/sharedFixture.ts";
const { urls } = require('../config/urls.ts');
import { navBarSelectors } from "../Pages/common/commonSelectors.ts";
import CasePage from "../Pages/community care/case-page.ts";

let casePage: CasePage;

test.beforeEach( async({page}) => {
    await page.goto(urls.oWestNewCase, { waitUntil: 'domcontentloaded' });
    //new case page 
    casePage = new CasePage(page);
    // await page.waitForTimeout(100000); // Wait for 100 seconds
    // await navBarSelectors.copilotTab(page).click({ timeout: 35000 });
})

test.describe('Validate that user can create a new case', () => {

    // Test case for creating a general community care case
    test('Create general case', async ({ page }) => { 
        // Set test to run in slow mode for stability
        test.slow(); 
        
        // Wait for search icon to be visible (ensures page is loaded)
        await navBarSelectors.searchIcon(page).waitFor();

        // Fill in the Summary tab information
        await casePage.summaryTab.click();
        await casePage.selectItemFromDropdown(casePage.requestType, 1);
        await casePage.selectItemFromLookup(casePage.caseCategory, 'general');
        await casePage.selectItemFromLookup(casePage.caseSubCategory, 'Public Kids Area');
        await casePage.fillItem(casePage.description, 'test description');

        // Select unit and customer details
        await casePage.selectItemFromLookup(casePage.unitId, '128');
        await casePage.selectItemFromLookup(casePage.customer, 'afaf badr');
        
        // Save the case
        await casePage.saveBtn.click();

        // Navigate to SLA tab
        await casePage.slaTab.click();

        // Assertion for slaItem
        const slaItemLabel = await casePage.slaItem.innerText();
        await expect(slaItemLabel).toHaveText('General Case SLA');

    });
});