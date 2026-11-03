
class employee {


    emp1 = "Bhavya"
    emp2 = "Sneha"

    m1() {

        console.log("this is M1 Mehtod")

        this.m4()
      
    }

    m2() {

        console.log("this is M2 Mehtod")

        
    }

    m3() {

        console.log("this is M3 Mehtod")

     
    }

    m4() {

        console.log("this is M4 Mehtod")

    
    }
}

const empployee1 = new employee()

empployee1.m3()

// this is keyword to access variables and methods with in the class  we need to use this keyword