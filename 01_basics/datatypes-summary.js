// Primitive & Non-Primitive Datatypes

//Primitive (Call by Value) 7-Types
// String, Number, Boolean, Null, Undefined, Symbol, BigInt
const score = 100   //console.log(typeof score) -> Number
const scoreValue = 100.3  //console.log(typeof scoreValue) -> Number
const isLoggedin = true   //console.log(typeof isLoggedin) -> Boolean
const outsideTemp = null  //console.log(typeof null) -> Object
let userEmail;            //console.log(typeof userEmail) -> undefined
const BigNumber = 14652n  //console.log(typeof BingNumber) -> bigint
const Id = Symbol('1234') //console.log(typeof Symbol) -> symbol
const anotherId = Symbol('1234')

//console.log(Id === anotherId)

//-----------------------------------------------------------------------------------------//

//Non-Primitive (Call by Reference)
//Array, Objects, Functions 
const heros = ["Spiderman", "Superman", "Batman"] //array

let myObj = {          //variable = myObj
    name : "Javeed",   // objects with key value pair
    age : 24
}

const myFunction = function(){    //console.log(typeof myFunction) -> function
console.log("Hello World");
}

console.log(typeof myFunction)

