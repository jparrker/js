//Hello, object

let user = {}
user.name  = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

console.log(user)

//check for emptiness
//isEmpty(obj)

let schedule = {}

function isEmpty(obj) {
  for (let key in obj) {
    return false //if something in the object => not empty
  }
  return true
}
console.log(isEmpty(schedule))

schedule['8:30'] = 'Eat breakfast'

console.log(isEmpty(schedule))




//Sum Object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0

for(let key in salaries) {
  sum += salaries[key]
}
console.log(sum)


//multiply numerics
let menu = {
  width: 200, 
  height: 300,
  title: "My Menu"
}

function multiplyNumeric(obj) {
  for (let key in obj) {
    if(typeof obj[key] ==='number')
      obj[key] *= 2
  }
}


multiplyNumeric(menu)
//console.log(menu)

//makeUser

function makeUser() {
  return {
    name: "John",
    ref() {
      return this
    }
  }
}
let useR = makeUser()

console.log(useR.ref().name) //john

//Creater a calculator

let calculator = {
  
  read() {
    this.num1 = +prompt('Enter the first number: ', 0)
    this.num2 = +prompt('Enter the second number:', 0)
  },
  
  sum() {
    return this.num1 + this.num2
  },
  mul(){
    return this.num1 * this.num2
  }

}


calculator.read()
alert(calculator.sum())
alert(calculator.mul())

