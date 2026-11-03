class employee {


    static emp1 = "Bhavya" // this is static variable 
    emp2 = "Sneha"      //  non static varibale 
    emp3 = "Archana"     // non static varibale 

    static m1() {

        console.log("this is M1 static Mehtod")
      
    }

    m2() {

        console.log("this is M2 non static Mehtod")

        
    }

    static  m3() {

        console.log("this is M3 static Mehtod")
    }

    m4() {

        console.log("this is M4 Mehtod")
       employee.m3()
    
    }
}

// when you have static variable and static methods to access those varibale s and mehtods 
/// we dont to crreate object of the class 
// with the help of classname we can access 

// console.log(employee.emp1)

// //console.log(employee.emp2)

// employee.m1()


// const employeeobj = new  employee()

// employeeobj.m2()

//employee.m3()

const obj = new employee()

obj.m4()