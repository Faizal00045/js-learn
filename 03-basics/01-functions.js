

function sayMyName(){
    console.log("F");
    console.log("A");
    console.log("I");
    console.log("Z");
    console.log("A");
    console.log("L");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

 const result  = addTwoNumbers(3, 5)

 // console.log("Result: ", result);

function loginUserMessage (username = "salt") {
    // if(username === undefined){
    //     console.log("please enter a username ");
    //     return
    if(!username){
        console.log("please enter a username ");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("faizal"))
// console.log(loginUserMessage("faiza"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "faiz",
    price: 199
}

function handleObject(anyobject){
    console.log(`Usernamme is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [20, 300, 400]

function returnSecondValue(getAarray){
    return getAarray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 800, 900 ]));
