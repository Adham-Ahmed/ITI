
var mathObjCreator=require("./math.js")
let math=new mathObjCreator()

// console.log(math.add("2",3))//5
// console.log(math.sub(1,2))//-1
// console.log(math.multi("10",2))//error:invalid input

console.log(math.calc(math.div,10,2))


var nameAndDateObjCreator=require("./nameAndDate")
let obj=new nameAndDateObjCreator("adham",2020)


console.log(obj.log())//Error:Please enter a valid year of birth 




