//encapsulation 

// Binding the data betwwen the methods

// we have one setter method  - set the data 

// we will have one getter = get the data 
// In a simple words - creating the dependency betweent the methods 


class employee{


    x = 20
    y = 45 
    
  
    employeedetails(ename, eid, eplace ){

        this.employeename = ename

        this.employeeid = eid

        this.employeeplace = eplace
    }

    displayempDetails(){

        console.log(this.employeename, this.employeeid, this.employeeplace)
    }

    calculate(){

        console.log(this.x +this.y)
    }

}

const emp = new employee()

emp.employeedetails("Abhishaek", "1234", "Bangalore")

emp.displayempDetails()

emp.calculate()