//Polymorphism 


class A{

  printName(){
  
     console.log("Durga")
  }

  add(num1, num2){

    console.log(num1)
    console.log(num2)
    console.log(num1+num2)
  }
}

class B extends A{

  printName(){
  
     console.log("Abhishek")
  }

  add(num1, num2, num3){

    console.log(num1)
    console.log(num2)
    console.log(num3)
    console.log(num1+num2+num3)
  }
  

}


const obj = new A()

obj.printName()

// When you have same method in parent and child 

// it always execute child class method 

// this method overrding 

obj.add(5,8,9) //method overrding 

obj.add(5,8,9) // Method overloading 

 



// Method overloading  in a function level 
function substract(a,b){

  console.log(a-b)
}

substract(30,12,45)