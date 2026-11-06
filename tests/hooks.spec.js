
import { test, expect } from "@playwright/test"



// test.describe("group 1", () => {


//     test("test case 1", () => {

//         console.log("This is test case 1")

//     })

//     test("test case 2", () => {


//         console.log("This is test case 2")
//     })

//     test("test case 3", () => {


//         console.log("This is test case  3")
//     })

//     test("test case 4", () => {


//         console.log("This is test case 4")
//     })


// })


test.describe("group 2", () => {

   test.afterAll(()=>{

        console.log("this should print only once after all tests")
   })

    test.beforeEach(() => {

        console.log("print before Each test this")
    })

    test.afterEach(() => {

        console.log("print After Each test this")
    })


       test.beforeAll(()=>{

        console.log("this should print only once before all tests")
    })


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