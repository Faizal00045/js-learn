// const tinderUser = new Object() 
const tinderUser = {}

tinderUser.id = "12bsca"
tinderUser.name = "sami"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "dsa@gmail.com",
    fullname: {
        userfullname: {
            firstname : "faizal",
            lastname: "ahmad"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({} ,obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);
 
const users =[
    {
    id: 1,
    email:"dogwalt@g.com"
    } ,
        {
    id: 1,
    email:"dogwalt@g.com"
    } ,
        {
    id: 1,
    email:"dogwalt@g.com"
    } ,
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "000",
    courseInstructor: "fizull"
}

course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     nmae : "sami",
//     coursename : "js",
//     price : " free"
// }

// some time u geet apis in arrays too

[
    {},
    {},
    {}
]