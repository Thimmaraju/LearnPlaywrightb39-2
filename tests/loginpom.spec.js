
import {test, expect} from "@playwright/test"
import { loginpage } from "../pages/loginpage.po"

import data from "../testdata/login.json"

test("Verify login with valid credentials", async  ({page} )=>{

    const login = new loginpage(page)

    await login.launchApp()
    await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)
    await login.loginSuccss()


})

test("Verify login with valid Username and Invalid password ", async  ({page} )=>{

    const login = new loginpage(page)

    await login.launchApp()
    await login.loginwithCreds(process.env.APP_USERNAME, data.wrongpassword )
    await login.loginFailure()


})

test("Verify login with invalid username and valid password ", async  ({page} )=>{

    const login = new loginpage(page)

    await login.launchApp()
    await login.loginwithCreds(data.wrongusername, process.env.APP_PASSWORD)
    await login.loginFailure()


})

test("Verify login with invalid username and invalid password ", async  ({page} )=>{

    const login = new loginpage(page)

    await login.launchApp()
    await login.loginwithCreds(data.wrongusername, data.wrongpassword)
    await login.loginFailure()


})
