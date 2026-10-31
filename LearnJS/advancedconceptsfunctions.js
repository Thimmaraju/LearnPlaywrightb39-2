

// anonymous function 

// function without name 


// function (){

//     console.log(4+6)
// }

//callback function 

//A function passes as parmeter to another function 


function student1(){

    console.log("Shashank")
}

function student2(){

    console.log("Durga")
}

function  trainer(callback){

    console.log("Raju")
    callback()
}

trainer(student1)

//here student1 is a callback function 
//callback function (student1) is passed as argument to another function (trainer)


function add(a,b ){

    console.log(a+b)
}


function substract(a,b ){

    console.log(a-b)
}

function multiply(a,b ){

    console.log(a*b)
}

function devide(a,b ){

    console.log(a/b)
}

function calculator(a,b, callback){

    let x = a 
    let y = b 

    callback(x,y)
}

calculator(3, 7, add)
calculator(3, 7, substract)
calculator(3, 7, multiply)
calculator(3, 7, devide)


// Higher order function - its main function which accepts the callback as argument 
//ex: calculator 

//closure function 

// closure function is a callback function, which take data from higher order function 
// ex : add 