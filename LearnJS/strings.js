// str = "Raju"

str = 'Raju'

// str = null

console.log(typeof(str))

console.log(2+4+5+"5"+4+3+2) //  "115432"


//literals 

var student = "Durga"

console.log(`${student} is from bangalore`)


//.length 

str = "JavaScript"

console.log(str.length)

console.log(str[4])

//"a" == "A"


//Number(str) // this will convert string to number
str = Number("20")

console.log(str)

//String(number) // this will convert number to string 

num1 = String(45)  // "45"

str2 = "34"

n2 = parseInt("49.89")  // 49

console.log(n2)

n3 = parseFloat("49.89")  // 49.89

console.log(n3)

str = "$360".replace("$", "")

console.log(str)


price1 = Number("₹4,49,900".replaceAll("₹", "").replaceAll(",", ""))

price2 = Number("₹5,49,900".replace("₹", "").replaceAll(",", ""))


console.log(price1+price2)

str3 = "    Raju    ".trim()

// trimStart()
//trimEnd

console.log(str3)


str4 = "this is a Js class".toUpperCase()

console.log(str4)

str5 = "This IS a Js class".toLowerCase()

console.log(str5)

//includes 

str6 = "This IS a Js class"

str6.includes("Java")  //false

// slice()

// splice()    

console.log("Raju" + "G")

console.log("Raju".concat("G"))

description = "Understing requirement\twriting script\tMaintain automation script"

// .fill(description)

console.log(description)

//strings Immutable 

arr = ["bhavya", "kavya", "shashank", "durga"]

arr[2] = "aruna"

console.log(arr)

str5 = "Javakcript"

str5[4] = "S"

console.log(str5)

str = "raju"

arr = str.split("")

console.log(arr)

//join("")
//str = new String("raju") //raju typeof object 

arr = [ 'r', 'a', 'j', 'u' ]

str7 = arr.join("")

console.log(str7)