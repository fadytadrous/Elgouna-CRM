import {test} from "./fixtures/sharedFixture.ts";
const { urls } = require('../config/urls.ts');
import { navBarSelectors } from "../Pages/common/commonSelectors.ts";
import CasePage from "../Pages/community care/case-page.ts";


let casePage: CasePage;



test.beforeEach( async({page}) => {
    await page.goto(urls.oWestNewCase);
    //new case page 
    casePage = new CasePage(page);
    // await navBarSelectors.copilotTab(page).click({ timeout: 35000 });

    
})

test.describe('Validate that user can create a new case', () => {

    test('Create general case', async ({ page }) => { 
       
        await casePage.summaryTab.click({ timeout: 10000 });
        await casePage.selectItemFromDropdown(casePage.requestType, 1);
        // Generate a unique name
        const uniqueUnitName = `test-${Date.now()}`; 
 
       
    })
})