import {test} from "./fixtures/sharedFixture.ts";
const { urls } = require('../config/urls.ts');
import PropertyPage from '../Pages/commercial/property-page.ts';
import { navBarSelectors } from "../Pages/common/commonSelectors.ts";


let propertyPage: PropertyPage;



test.beforeEach( async({page}) => {
    await page.goto(urls.property);
    //property page
    propertyPage = new PropertyPage(page);
    await navBarSelectors.copilotTab(page).click({ timeout: 35000 });

    
})

test.describe('Validate that user can create a commercial unit', () => {

    test('Create commercial RE property', async ({ page }) => {
        await propertyPage.selectItemFromDropdown(propertyPage.unitType, 14);
        // Generate a unique name
        const uniqueUnitName = `test-${Date.now()}`; 
        await propertyPage.unitName.fill(uniqueUnitName);
        // Generate a random 6-digit number
        const randomUnitId = Math.floor(100000 + Math.random() * 900000).toString();
        await propertyPage.unitId.fill(randomUnitId);
        await propertyPage.selectItemFromDropdown(propertyPage.unitHierarchy,'FL-block l');
 
      
    })
})