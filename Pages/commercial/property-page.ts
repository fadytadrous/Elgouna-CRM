import { Locator, Page } from "@playwright/test";

export class PropertyPage {

    // variables
    readonly page: Page;
    readonly unitType: Locator;
    readonly unitName: Locator;
    readonly unitId: Locator;
    readonly unitHierarchy: Locator;
    readonly validFrom: Locator;
    readonly validTo: Locator;
    readonly priceList: Locator;
    readonly decimalSupported: Locator;
    readonly project: Locator;
    readonly phase: Locator;
    readonly propertyPurpose: Locator;
    
    
    
    //constructor
    constructor(page: Page){
        this.page = page;
        this.unitType = this.page.locator('[data-id="inn_type.fieldControl-option-set-select"]');
        this.unitName = this.page.getByLabel('Name');
        this.unitId = this.page.locator( '[data-id="inn_id.fieldControl-text-box-text"]');
        this.unitHierarchy = this.page.locator( '[data-id="inn_hierarchy.fieldControl-LookupResultsDropdown_inn_hierarchy_textInputBox_with_filter_new"]');
        this.validFrom = this.page.getByLabel('Date of Valid From');
        this.validTo = this.page.getByLabel('Date of Valid To');
        this.priceList = this.page.getByLabel('Price List, Lookup');
        this.decimalSupported = this.page.getByLabel('Decimals Supported');
        this.propertyPurpose = this.page.locator('[data-id="new_propertypurpose.fieldControl-option-set-select"]');
        this.project = this.page.getByLabel('Project, Lookup');
        this.phase = this.page.getByLabel('Phase, Lookup');
    }

    //methods
    async selectItemFromDropdown(locator:Locator, noOfItem:number){
        await locator.click();
        for(let i=0; i<noOfItem; i++){
            await this.page.keyboard.press('ArrowDown');
        }
        await this.page.keyboard.press('Enter');

    }

    async selectItemFromLookup(locator:Locator, itemName:string){
        await locator.click();
        await locator.fill(itemName);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

    }

}
export default PropertyPage;