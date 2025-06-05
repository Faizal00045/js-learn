// singleton
Object.create

// object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "faizal",
    "full name": "faizal",
    [mySym]: "mykey1",
    age: 21,
    location: "bhopal",
    email: "samboy@google.com",
    isLogedIn: false,
    lastLoginDays: ["sunday","saturday"]
} 

//  console.log(JsUser.email)
//  console.log(JsUser["email"])
// console.log(JsUser["full name"])
// // console.log(JsUser["full name"])
// console.log( JsUser[mySym])

JsUser.email = "fai00@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "fafa@gmil.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}
console.log(JsUser.greetingTwo());

