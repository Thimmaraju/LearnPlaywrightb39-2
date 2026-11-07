import { expect } from "allure-playwright"

export class addemployeepage {

     constructor(page){

         this.page = page

         this.addemsubmenu = page.locator("//a[text()='Add Employee']")
         this.firstNameInput = page.locator('//input[@name="firstName"]')
         this.lastnameInput = page.locator('//input[@name="lastName"]')
         this.saveBtn = page.locator('//button[@type="submit"]')
         this.empDetails = page.locator("//h6[text()='Personal Details']")

     }

     async navigateToAddEmployee(){

           await this.addemsubmenu.click()
     }

     async addemployee(firstName, lastName){

        await this.firstNameInput.fill(firstName)
         await this.lastnameInput.fill(lastName)
         await this.saveBtn.click()
     }

     async employeeCreationSuccess(){

        await expect(this.empDetails).toBeVisible()
     }

}