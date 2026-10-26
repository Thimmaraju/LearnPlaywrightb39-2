const { constants } = require("node:buffer")
const console = require("node:console")

    console.log(2 + 2) //4 
    console.log(2 - 7)  // -5
    console.log(2 * 2) //4 
	console.log(4 / 2)  // 2
	
	 5/2 - 1 
	
	console.log(5 % 2)  // 1
	 
	console.log(15 % 4)  // 3
	
    console.log(2**6)  // 64
	
	let x = 5 
	
	x++   // x = x+1
	
   console.log(x)  // 6

   let y = 10 

   y-- // y =y-1

   y--

   y--

   console.log(y) 

   120+60  // 180 

//    "180"

//    180 == "180"  // true

//    180 === "180"  // false 

// comparison 

// >
// <
// >=
// <=
// ===
// ==

// Logical operators 


// AND 
// OR 
// NOT 

//AND 

// x    y     result 

// 1    0      0 
// 0    1      0
// 0    0      0 
// 1    1      1

//&&

console.log(false && true)


//OR   

//   ||

// x    y     result 

// 1    0      1
// 0    1      1
// 0    0      0 
// 1    1      1


console.log( false || false) //   false
// NOT 

//  ! 

// x   result 

// 1    0

// 0    1 

// marks = 100

// if(marks <=100 && marks >= 90 ){

//     console.log("Grade A+")
// }

//if button1 and button2 both disabled then click on button3 



// if(page.locator(button1).isDisabled() &&  page.locator(button2).isDisabled() ){


//     await page.locator(button3).click()
// }



console.log(!(false) )



// let status = await page.locator(checkbox).isChecked() // true 


// if( !(status)){

//     await page.locator("xpath edit box ").fill()
// }


// stu1 = 

// stu2 = 


// x =   false? "Abhishek" : "Kavya" 

// console.log(x)


//  workers = process.env.CI ? 6 : 3,


// + numbers converted to string 

console.log(2+ 2)  //  4

console.log(2+ "Raju")  //"2Raju"


console.log(4+"4") // "44"

console.log("Raju" + "G")  // "RajuG"

// - * / 

console.log(10 -"15")

console.log(10-"kavya")  // NaN - not a number 

console.log(1+3+5+"5"+4+5+1)  

console.log(34-"20")// 14 

console.log(34 -"xyz")

//4500 test cases 

//850 

//70+ test cases 


// payemntamont = vehicleprice+ deliveryfee

// 2600 + undefined  // NaN


// paymentApi(NaN)

console.log(45+undefined)