

// jobtitles = ["SDET 11", "COO II", "CTO II"]

const { title } = require("node:process");

// // for of 

// // forEach


// for(let title of jobtitles){

//     console.log("Loop starts here ")

//     console.log(title)


//     console.log("Loop Ends here ")
// }


employees = [
    { firstname: "Raju", lastname: "G" },
    { firstname: "Durga", lastname: "prasad" },
    { firstname: "kavya", lastname: "k" },
    { firstname: "Bhavya", lastname: "M" },

]


employees.forEach(emp => {

    console.log("loop starts here ")

    console.log(emp.firstname)
     console.log(emp.lastname)
      console.log("loop ends here ")
});


// for (let emp of employees) {

//     console.log("Loop starts here ")

//     console.log(emp.firstname)
//     console.log(emp.lastname)

//     console.log("Loop Ends here ")


// }


// jobtitles = ["SDET 11", "COO II", "CTO II"]


// jobtitles.forEach(title => {

//         console.log("Loop starts here ")

//     console.log(title)


//     console.log("Loop Ends here ")
    
// });


//map 


arr = [ 1,4,7,8,9]

arr2 = arr.map(element => element/2)

console.log(arr2)


// filter 

arr4 = [ "archana", "Bhavya", "Kavya", "navya", "Raju", "duraga"]

arr3 = arr4.filter(element => element.includes("vya"))

console.log(arr3)

arr5 = [1,2,3,4,5,6,7,8,9,10,11,12]


oddnumbers = arr5.filter(element => element%2 !== 0 )

console.log(oddnumbers)


//reduce 

arr5 = [1,2,3,4,5]



const sum = arr5.reduce((total, element) => total + element, 0)
console.log(sum)


