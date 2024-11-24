import { expect, Locator, Page } from "@playwright/test";

export class qualifiedLead{

    //variables
    readonly page: Page;
    readonly newPackageBtn: Locator; 

    //constructor
    constructor(page: Page){
        this.page = page;
        this.newPackageBtn = this.page.getByLabel('Standard Packages').getByLabel('New Lead Additional Package.');
    }

    //methods
    async navigateToNewStandardPackagePage(){
        await this.newPackageBtn.click();
    }
}

export default qualifiedLead;