const name = " faizal "
const repoCount =  90

// console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('fact-ech-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));

const newString =  gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = " faizuu "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https//fai.com/faiz%60ahmad"

console.log(url.replace('%60', '-'))

console.log(url.includes('faiz'))

console.log(gameName.split('-'));