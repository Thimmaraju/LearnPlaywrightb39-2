




// if(true){

//    console.log("Raju")
//   console.log("archana")
//    console.log("Durgaprasad")
// }


// if(condition){

//     //block 1 
// }
// else {

//     //block 2 
// }


// if marks <=100 and >=90  then A+ 
// if marks <90  and >=75  then A
// if marks <75 and >=60  B 
// if marks <60 and >=35 C 
// otherwise Fail 

marks = 101

if (marks >= 90 && marks <= 100) {

    console.log("grade A+")
}

else if (marks >= 75 && marks < 90) {

    console.log("grade A")
}

else if (marks >= 60 && marks < 75) {

    console.log("grade B")
}
else if (marks >= 35 && marks < 60) {

    console.log("grade C")
}
else {

    console.log("grade Fail")
}

//=====================================




switch ("chromium") {
    case "chromium": {

        console.log("chromium browser ")
    }

        break;
    case "firefox": {

        console.log("firefox browser ")
    }

    break;

    case "webkit": {

        console.log("webkit browser ")
    }

        break;
    default: {

        console.log("No cases matched")
    }
        break;
}