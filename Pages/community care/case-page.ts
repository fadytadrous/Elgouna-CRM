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
    readonly saveBtn: Locator;
    readonly slaTab: Locator;
    readonly slaItem: Locator;
    readonly slaSection: Locator;
    
    //constructor
    constructor(page: Page){
        this.page = page;
        this.customer = this.page.locator('[data-id="customerid.fieldControl-LookupResultsDropdown_customerid_textInputBox_with_filter_new"]');
        this.requestType = this.page.locator('[data-id="ohd_requesttype.fieldControl-option-set-select"]');
        this.unitId = this.page.locator( '[data-id="ohd_unitid.fieldControl-LookupResultsDropdown_ohd_unitid_textInputBox_with_filter_new"]');
        this.summaryTab = this.page.getByLabel('Summary');
        this.slaTab = this.page.getByLabel('SLA');
        this.caseCategory = this.page.locator('[data-id="odh_casecategory.fieldControl-LookupResultsDropdown_odh_casecategory_textInputBox_with_filter_new"]');
        this.caseSubCategory = this.page.locator('[data-id="odh_casesubcategory.fieldControl-LookupResultsDropdown_odh_casesubcategory_textInputBox_with_filter_new"]');
        this.description = this.page.locator('[data-id="description.fieldControl-text-box-text"]');
        this.saveBtn = this.page.getByLabel('Save (CTRL+S)');
        
        // Locate the section tag by role and label
        this.slaSection = page.getByRole('region', { name: 'SLA KPI Instance' });
        // Define the child locator for the second link
        this.slaItem = this.slaSection.getByRole('link').nth(1);
        
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
        this.fillItem(locator, itemName);
        await this.page.keyboard.press('ArrowDown',{ delay: 5000 });
        await this.page.keyboard.press('Enter');

    }

    async fillItem(locator:Locator, text:string){
        
        await locator.click();
        await locator.fill(text);
    }


}
export default CasePage;