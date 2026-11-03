

class student {

   student1 = "Shashank";
   student2 = "Sree charan";


   constructor(a,b){

    console.log(a)
    console.log(b)

    console.log(a+b)
   }
    method2(){

      console.log("this is Method 2 ")
   }

}

const  b39pw = new student(34,87)



const b40pw = new student(23,"Raju")


// constructor is simply a method 

// we use constructor key work for constructor method 

// constructor will always invoked with out calling it 

// In JS language we can have only one constructor for a class 
// multiple constructors are not allowed 

// by default empty constructor will be there

//if constructor required some params , then we need pass those params at the time of creatingobject of the class 
//new classname (params to your constructor)  

// cypress u dont need a constructor 

// Playwwright defenetly u need to implement constructor 


// exports class loginpage {


//     constructor(value){

//         this.page = value 
//     }

//     loginwithcreds(username , password){

//         await this.page.locator(xpath).fill(username)

//         await this.page.locator(xpath for password).fill(password)

//         await page.locator(xpath for login button).click()
//     }
// }



// ==============================
// import {loginpage} from "apth"


// test(loginwith valid creds , async ({page}) =>{
  
//     const login = new loginpage(page)

// login.loginwithcreds("Admin", "admin123")


// })

