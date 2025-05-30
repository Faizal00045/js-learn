// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 2332323232323232323232n


// Refrence {isko non primitive}

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: " faiz",
    age: 21,
}

const myFunction = function(){
    console.log("hello moon");
}

console.log(typeof  anotherId);