
const moment = require('moment');

//DD/MM/YYYY

const today = moment().format("DD-MM-YYYY")

console.log(today)


const previousday = moment().subtract(10, 'days').format("DD-MM-YYYY")

console.log(previousday)

const tomorrow = moment().add(1, 'days').format("DD-MM-YYYY")

console.log(tomorrow)