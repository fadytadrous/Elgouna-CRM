import {test} from "./fixtures/sharedFixture.ts";
const { urls } = require('../config/urls.ts');
import QualifiedLead from '../Pages/gounaPlus/qualified-lead.ts';
import { navBarSelectors } from "../Pages/common/commonSelectors.ts";


let qualifiedLead: QualifiedLead;


test.beforeEach( async({page}) => {
    
    await page.goto(urls.gounaPlus);
    //qualified lead or parent lead
    qualifiedLead = new QualifiedLead(page);

    await navBarSelectors.copilotTab(page).click();

})

test.describe('Validate that user can generate quote', () => {

    test('Create standard packages', async ({ page }) => {
        await qualifiedLead.navigateToNewStandardPackagePage();
      
    })
})