
//Primitive Data types 

// number 
// string 
// boolean 
// undefined 
// null 

// JAVA  ----- french 
// Javascript  - japaneesh

// no relation - both different lanugues 

   
// IN JAVA 
// string studentname = "Bhavya"

// int    num1 = 10
//int, float , double 


//In JavaScript

//  x= 120    // number 

//  y  = "Raju"   // string 

//javascript is a dynamically typed languege 

//typeof - keyword 



// x = true  // string 

// console.log(typeof(x))


// num1 = "10" 

// console.log(typeof(num1))


// //string can be declared in 3 ways 

// // "" // string 

// // '' // string 

// // `` // backticks  - string 


// str = "Raju's Place Bangalore"

// console.log(typeof(str))

// z = false // boolean 

// x = true // boolean 


// console.log(typeof(x))

// 1. declaration of variable is done however not assigned any value 
// 2. declaration of variable is done assigned value as undefined 

let x ;

console.log(typeof(x))  // undefined 


const trainername = undefined

console.log(typeof(trainername)) 

// Null - empty 

x = null 


console.log(typeof(x))   // it should be null however in JS this defect, it print object 

// Initially JS is compared with C language that time they given null type  is Object.

//Non Primitive types 


// arrays 
// objects 


arr = ["Raju", "xyz", 43, true, undefined , null ]

console.log(arr[2])


car = {

    model : 2026,
    make : "Kia"
}

console.log(car.make )

console.log(car.model)

// objectname = {

//     propertyname : propertyvalue ,
//     property2  : peroperty2value ,
// }