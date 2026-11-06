



import { test, expect } from '@playwright/test';



 async function printRaju(){
  
    return "Raju"

}

 async function printShashank(){
  
    return "Shashank"

}

 async function printBhavya(){
  
    return "Bhavya"

}

test(`Verify login with Valid credentials`,async  function (){
    
    console.log("Raju")

    let x = await  printRaju()
    let y = await  printShashank()
    let z = await  printBhavya()

    console.log(x)
    console.log(y)
    console.log(z)

})