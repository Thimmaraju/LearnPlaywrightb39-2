
import {test, expect} from "@playwright/test"
import { loginpage } from "../pages/loginpage.po"
import { dashboardpage } from "../pages/dashboardpage.po"
import { addemployeepage } from "../pages/addemployeepage.po"
import data from "../testdata/login.json"

import { faker } from '@faker-js/faker';

test("Verify add Employee", async  ({page} )=>{

    const login = new loginpage(page)
    const dashbaord = new dashboardpage(page)
    const addemp = new addemployeepage(page)

    await login.launchApp()
    await login.loginwithCreds(data.username, data.password)
    await login.loginSuccss()
    await dashbaord.navigateToPIM()
    await addemp.navigateToAddEmployee()
    await addemp.addemployee(faker.person.firstName(), faker.person.lastName())
    await addemp.employeeCreationSuccess()
})