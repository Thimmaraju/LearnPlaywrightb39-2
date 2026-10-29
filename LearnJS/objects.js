


// // objectname = {

// //     propertyname : propertyvalue,
// //     propertyname : propertyvalue,
// //     propertyname : propertyvalue,

      

// // }

// const car = {

//     model : "x6",
//     make : "BMW",
//     year: 2026,

// }

// //accessing the prrperty values 2 ways 

// //dot notation 
// // bracket notation 

// console.log(car.make)

// console.log(car['make'])   // "BMW"

// //add the Property 

// car['color'] = "RED"  // add the properties 

// console.log(car)

// car['make'] = "Maruthi Suzuki" // Edit Property values 

// console.log(car)

// console.log(car.make)

// delete car.make 

// console.log(car)

// console.log(car.milage)


// const jobtitles = {

//    title1 : "SDET 1",
//    title2 : "Account Executive 1",
//    title3 : "COO"

// }


// for(let title in jobtitles){

//     console.log("loop starts ")

//     console.log(jobtitles[title])

//     console.log("loop ends")
// }


const employees = {

   emp1 : {firstname : "Raju", lastname : "G"},
   
   emp2 : {firstname : "Shree", lastname : "charan"},
   
   emp3 : {firstname : "kavya", lastname : "K"}

}

for (let emp in employees){

    console.log("loop strats ")

    console.log(employees[emp].firstname)
    console.log(employees[emp].lastname)

      console.log("loop ends ")
}


const invaliddata = {

    dataset1 : {username : "jerhfyb", password: "admin123"},
    dataset2 : {username : "Admin", password: "ketgnujtr"},
    dataset3 : {username : "erjgfb", password: "ketgnujtr"},
}