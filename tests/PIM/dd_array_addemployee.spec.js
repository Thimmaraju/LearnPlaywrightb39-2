import { test, expect } from '@playwright/test';

import logindata from "../../testdata/login.json"


const employees = [
    { firstname: "Raju", lastname: "G" , empid : "12345"},
    { firstname: "Durga", lastname: "prasad",empid : "12346" },
    { firstname: "kavya", lastname: "k",empid : "12347"  },
    { firstname: "Bhavya", lastname: "M",empid : "12348"  },

]

//for (let emp of employees) {

employees.forEach(emp => {

    test(`Verify Admin can employee - ${emp.firstname}`, async ({ page }) => {

        await page.goto('/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
        await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: 'PIM' }).click();
        await page.getByRole('link', { name: 'Add Employee' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).fill(emp.firstname);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(emp.lastname);

        console.log(emp.empid)
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();  // 5sec 

    });




}

)

