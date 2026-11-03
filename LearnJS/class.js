

// function add(a,b){

//     console.log(a)
//     console.log(b)
//     console.log(a+b)
// }

// add(2,7)


// class classname{
    
//     v1
//     v2
//     v3
//     method1
//     method2
//     method3 
// }

class calculator {


    x = 20 
    y = 40 
    student = "Sree charan"
    trainer = "Raju"

    add(a, b) {

        console.log(a)
        console.log(b)
        console.log(a + b)
    }

    substrat(a, b) {

        console.log(a)
        console.log(b)
        console.log(a - b)
    }

    multiply(a, b) {

        console.log(a)
        console.log(b)
        console.log(a * b)
    }

    devidsion(a, b) {

        console.log(a)
        console.log(b)
        console.log(a / b)
    }
}



 const cal1 = new calculator()  // Creation of instance of the class / Creation of Object of the class 

// // here OBJECT  name is cal1 

 cal1.add(2,8)

// cal1.substrat(30,10)

 console.log(cal1.trainer) // "Raju"

// // this concept is game changer 

 const cla2 =  new calculator()

 console.log(cla2.trainer)

 cla2.add(3,8)

//=============================================

//class is physical decaration it will not execute directtly 

// class can have varibale and methods 

// In order access variables and methods we need to create instance / Object of the class 

// with help of class object we can access variables and methods 

// You can create n number object of the same class 