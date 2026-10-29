
arrayname = [] //empty array ( no elements )


arr1 = [1,2,3,4,5,6]

arr2 = [34, true, "Raju", { firstname: "Raju", lastname : "G"}]

//index  - always starts from 0 

console.log(arr2[3].firstname, arr2[3].lastname)

//.length 

arr3 = [3,7,1,2,3,5,6,87,89,0,4, 67]

console.log(arr3.length)

console.log(arr3[arr3.length-3]) // last element of the array 

vegs = [
  'Brocolli - 1 Kg',    'Cauliflower - 1 Kg',
  'Cucumber - 1 Kg',    'Beetroot - 1 Kg',
  'Carrot - 1 Kg',      'Tomato - 1 Kg',
  'Beans - 1 Kg',       'Brinjal - 1 Kg',
  'Capsicum',           'Mushroom - 1 Kg',
  'Potato - 1 Kg',      'Pumpkin - 1 Kg',
  'Corn - 1 Kg',        'Onion - 1 Kg',
  'Apple - 1 Kg',       'Banana - 1 Kg',
  'Grapes - 1 Kg',      'Mango - 1 Kg',
  'Musk Melon - 1 Kg',  'Orange - 1 Kg',
  'Pears - 1 Kg',       'Pomegranate - 1 Kg',
  'Raspberry - 1/4 Kg', 'Strawberry - 1/4 Kg',
  'Water Melon - 1 Kg', 'Almonds - 1/4 Kg',
  'Pista - 1/4 Kg',     'Nuts Mixture - 1 Kg',
  'Cashews - 1 Kg',     'Walnuts - 1/4 Kg'
]


menus = [
  'Admin',       'PIM',
  'Leave',       'Time',
  'Recruitment', 'My Info',
  'Performance', 'Directory',
  'Maintenance', 'Claim',
  'Buzz'
]

// menus.length  // 11

// menus.includes("Raju") // flase 

// menus.includes("Admin")  // true 

// sort()

sortedmenus = menus.sort()

console.log(sortedmenus)

//30+ methods 

// .length
// .includes 
// .sort()
// pop  // will remove the last element from array 
// push // will add the element at the end 
// shift  // will remove 1st element 
// unshift  // will add element at beginning 
// slice
// splice 
// map 
// filter 
// reduce 
// some 
// every 
// split 

arr4 = [9,3,4,1,6,2]

arr5= arr4.sort()

console.log(arr5)

//split - to convert string to array 

str = "this is Javascript class"

arr6 = str.split("s")

console.log(arr6)


usernametext = "Username : Admin"

usernamearr= usernametext.split(" ")

username = usernamearr[usernamearr.length-1]

console.log(username)


arr8 = ["eat", "sleep", "read"]

arr8.push("drink", "jump")



arr8.unshift("wake up")

console.log(arr8)




menus = [
  'Admin',       'PIM',
  'Leave',       'Time',
  'Recruitment', 'My Info',
  'Performance', 'Directory',
  'Maintenance', 'Claim',
  'Buzz'
]

menus.pop()
menus.pop()

menus.shift()
menus.shift()

console.log(menus)

//join() - this convert array to string 

menu2 = [
  'Admin',       'PIM',
  'Leave',       'Time']  

  str2 = menu2.join(" ")

  console.log(str2)

  // slice 

  menus = [
  'Admin',       'PIM',
  'Leave',       'Time',
  'Recruitment', 'My Info',
  'Performance', 'Directory',
  'Maintenance', 'Claim',
  'Buzz'
]


// arr9 = menus.slice(0,4)

// console.log(arr9)


//array.splice(start, deleteCount, item1, item2, ...)
// 
menus.splice(2, 0, "Raju")

console.log(menus)

//30 + 