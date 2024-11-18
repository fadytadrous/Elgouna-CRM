import { expect, Locator, Page } from "@playwright/test";

export class qualifiedLead{

    //variables
    readonly page: Page;
    readonly newPackageBtn: Locator; 
    readonly copilotBtn: Locator; 

    //constructor
    constructor(page: Page){
        this.page = page;
        this.newPackageBtn = this.page.getByLabel('Standard Packages').getByLabel('New Lead Additional Package.');
        this.copilotBtn = this.page.getByRole("tab", { name : 'Copilot'} );
    }

    //methods
    async navigateToNewStandardPackagePage(){
        await this.copilotBtn.click();
        await this.newPackageBtn.click();
    }
}

export default qualifiedLead;