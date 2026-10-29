
import { test, expect } from '@playwright/test';

import details from "../testdata/demoqa.json"
import sampledata from "../testdata/sampledata.js"

const { fullname, email_id, p_address, c_address } = sampledata

test('Verify Working with Edit boxes', async ({ page }) => {


    // Actions 
    await page.goto('https://demoqa.com/text-box')
    await page.getByRole('textbox', { name: 'Full Name' }).fill(details.fullname)
    await page.getByRole('textbox', { name: 'name@example.com' }).pressSequentially(details.emailid)
    await page.getByRole('textbox', { name: 'Current Address' }).fill(details.currentaddress)
    await page.locator('#permanentAddress').fill(details.permanentaddress)
    await page.getByRole('button', { name: 'Submit' }).click()

    // Assertions 
    await expect(page.getByText(`Name:${details.fullname}`)).toBeVisible()
    await expect(page.getByText(`Email:${details.emailid}`)).toBeVisible()
    await expect(page.getByText(`Current Address :${details.currentaddress}`)).toBeVisible()
    await expect(page.getByText(`Permananet Address :${details.permanentaddress}`)).toBeVisible()


})


test('Verify Working with Edit boxes  -2 Demonstrate variables', async ({ page }) => {


    // Actions 
    await page.goto('https://demoqa.com/text-box')
    await page.getByRole('textbox', { name: 'Full Name' }).fill(fullname)
    await page.getByRole('textbox', { name: 'name@example.com' }).pressSequentially(email_id)
    await page.getByRole('textbox', { name: 'Current Address' }).fill(c_address)
    await page.locator('#permanentAddress').fill(p_address)
    await page.getByRole('button', { name: 'Submit' }).click()

    // Assertions 
    // await expect(page.getByText(`Name:${details.fullname}`)).toBeVisible()
    // await expect(page.getByText(`Email:${details.emailid}`)).toBeVisible()
    // await expect(page.getByText(`Current Address :${details.currentaddress}`)).toBeVisible()
    // await expect(page.getByText(`Permananet Address :${details.permanentaddress}`)).toBeVisible()


})


test('Verify Working with Edit boxes  -3 Objects', async ({ page }) => {


    const formdata ={

        fullanmae : "Raju G",
        permadd : "Bangalore",
        id : "12354",
        caddress : "chennai",
        emailid : "abcd@gmail.com"
    }

    // Actions 
    await page.goto('https://demoqa.com/text-box')
    await page.getByRole('textbox', { name: 'Full Name' }).fill(formdata['fullanmae'])
    await page.getByRole('textbox', { name: 'name@example.com' }).pressSequentially(formdata.emailid)
    await page.getByRole('textbox', { name: 'Current Address' }).fill(formdata.caddress)
    await page.locator('#permanentAddress').fill(formdata.permadd)
    await page.getByRole('button', { name: 'Submit' }).click()

    // Assertions 
    // await expect(page.getByText(`Name:${details.fullname}`)).toBeVisible()
    // await expect(page.getByText(`Email:${details.emailid}`)).toBeVisible()
    // await expect(page.getByText(`Current Address :${details.currentaddress}`)).toBeVisible()
    // await expect(page.getByText(`Permananet Address :${details.permanentaddress}`)).toBeVisible()


})


test('Verify Working with Edit boxes  -4 Arary', async ({ page }) => {

const data = ["Raju g", "1234", "xyz@gmail.com", "pune", "mumbai"]

    // Actions 
    await page.goto('https://demoqa.com/text-box')
    await page.getByRole('textbox', { name: 'Full Name' }).fill(data[0])
    await page.getByRole('textbox', { name: 'name@example.com' }).pressSequentially(data[2])
    await page.getByRole('textbox', { name: 'Current Address' }).fill(data[2])
    await page.locator('#permanentAddress').fill(data[3])
    await page.getByRole('button', { name: 'Submit' }).click()
})