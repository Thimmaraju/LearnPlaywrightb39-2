import { expect } from "allure-playwright"

export class dashboardpage {

     constructor(page){

         this.page = page

         this.PIMmenu = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')

     }

     async navigateToPIM(){

           await this.PIMmenu.click()
     }

}