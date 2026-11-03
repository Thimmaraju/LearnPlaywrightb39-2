

class A{

 x= 24
 y= 35


  printName(){
  
     console.log("Durga")
  }

  add(num1, num2){

    console.log(num1)
    console.log(num2)
    console.log(num1+num2)
  }
}

A.prototype.z = 67 // Prototyped variable



// prototyped method 
A.prototype.multiply = function (n1,n2){

    console.log(n1*n2)
}

const obj1 = new A()

const obj2 = new A()

console.log(obj1.z)

obj1.multiply(3,7)