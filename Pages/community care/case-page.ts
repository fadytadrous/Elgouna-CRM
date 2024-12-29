import { Locator, Page } from "@playwright/test";

export class CasePage {

    // variables
    readonly page: Page;
    readonly summaryTab: Locator;
    readonly requestType: Locator;
    readonly caseCategory: Locator;
    readonly caseSubCategory: Locator;
    readonly description: Locator;
    readonly customer: Locator;
    readonly unitId: Locator;
    
    
    
    //constructor
    constructor(page: Page){
        this.page = page;
        this.customer = this.page.locator('[data-id="customerid.fieldControl-LookupResultsDropdown_customerid_textInputBox_with_filter_new"]');
        this.requestType = this.page.locator('[data-id="ohd_requesttype.fieldControl-option-set-select"]');
        this.unitId = this.page.locator( '[data-id="ohd_unitid.fieldControl-LookupResultsDropdown_ohd_unitid_textInputBox_with_filter_new"]');
        this.summaryTab = this.page.getByLabel('Summary');
       
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
export default CasePage;