
import { test, expect } from "@playwright/test"


test.describe("group 1", () => {


    test("test case 1", () => {

        test.fail()


        console.log("This is test case 1")

        expect(4).toBe(4)
    })

    test("test case 2", () => {


        console.log("This is test case 2")
    })

    test("test case 3", () => {


        console.log("This is test case  3")
    })

    test("test case 4", () => {


        console.log("This is test case 4")
    })


})


test.describe("group 2", () => {


    test("test case 5", () => {


        console.log("This is test case 5")
    })

    test("test case 6", () => {


        console.log("This is test case 6")
    })

    test("test case 7", () => {


        console.log("This is test case  7")
    })

    test("test case 8", () => {


        console.log("This is test case 8")
    })


})