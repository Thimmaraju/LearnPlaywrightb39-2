
// // async function add(a,b){



// //     return a+b
// // }

// // console.log(add(6,9))


// const p = new Promise( (resolve, reject) =>{


//     let x = 3

//     if(x== 2){

//         resolve("Abhishek")
//     }
//     else{

//         reject("Shashank")
//     }
// })

// // Promise is Object it will have some result 

// // based on condition it will single value 

// // if resolved - a value 
// // if reject - another value 

// //console.log(p)

// //.then 
// //.catch 

// p.then( data => console.log(data))  // get the resolved value 
//  .catch(data => console.log(data))  // get the reject value 



// async function add(a,b){

//     return a+b
// }


// add(4,7).then(number => console.log(number))


// console.log("Start");

// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Data received");
//     }, 3000);
// });

// promise.then((result) => {
//     console.log(result);
// });

// console.log("End");

// UI or front end develoer use these concepts to make it asynchronous 

// async function xyz(){

//     return "ABC"
// }

// xyz().then(message => console.log(message))


async function printRaju(){
  
    return "Raju"

}

async function printShashank(){
  
    return "Shashank"

}

async function printBhavya(){
  
    return "Bhavya"

}

async function printnames(){

    let x = await printRaju()
    let y = await printShashank()
    let z = await printBhavya()

    console.log(x,y,z)
}

printnames()