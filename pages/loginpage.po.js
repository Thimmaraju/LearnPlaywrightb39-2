import { expect } from "allure-playwright"

export class loginpage {

     constructor(page){

         this.page = page
         this.usernameInput = page.locator('input[name="username"]')
         this.passwordInput = page.locator('//input[@name="password"]')
         this.loginButton = page.getByRole('button', { name: 'Login' })
         this.loginErroMessage = page.locator("//p[text()='Invalid credentials']")
     }

     async launchApp(){

        await this.page.goto("/web/index.php/auth/login")
     }

     async loginwithCreds(username, password){

       await  this.usernameInput.fill(username)
       await  this.passwordInput.fill(password)
       await  this.loginButton.click()
     }

     async loginSuccss(){

        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
     }

     async loginFailure(){

        await expect(this.loginErroMessage).toBeVisible()
     }


}