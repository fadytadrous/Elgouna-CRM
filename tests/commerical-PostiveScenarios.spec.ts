import {test} from "./fixtures/sharedFixture.ts";
const { urls } = require('../config/urls.ts');
import PropertyPage from '../Pages/commercial/property-page.ts';
import { navBarSelectors } from "../Pages/common/commonSelectors.ts";


let propertyPage: PropertyPage;



test.beforeEach( async({page}) => {
    await page.goto(urls.property);
    //property page
    propertyPage = new PropertyPage(page);
    await navBarSelectors.copilotTab(page).click();

    
})

test.describe('Validate that user can create a commercial unit', () => {

    test('Create commercial RE property', async ({ page }) => {
        await propertyPage.selectItemFromDropdown(propertyPage.unitType, 14);
      
    })
})