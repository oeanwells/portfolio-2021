

let dorry = (13 % 5);
console.log(dorry);

const word = "skateboard";

let facialHair = word.slice(5).replace("o", "e");
console.log(facialHair)

const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

let add = die1 + die2;
let roll = `You rolled a ${die1} and a ${die2}. They sum to ${add}`
console.log(roll);

function isEven(num) {
    if(num%2 == 0) {
        console.log("even")
    }
}
isEven(5)

function getColor(phrase) {
    if (phrase == "stop") {
        console.log("red")
    }
    else if (phrase == "slow") {
        console.log("yellow")
    }
    else if (phrase == "go") {
        console.log("green")
    }
    else {
        console.log("purple")
    }
}
function checkIf (num) {
if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} 
else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}
}

checkIf(60)

const mystery = 'Peeeeee7eee'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");


console.log(planets)

console.log(87 === 87)

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = `${restaurant.address} ${restaurant.city} ${restaurant.state} ${restaurant.zipcode}`

console.log(fullAddress)

for (let i = 0; i < 7; i++) {
    console.log("Da ba dee da ba daa")
}

for (let i = 25; i >= 0; i -= 5) {
    console.log(i)
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
for (let i = 0; i < people.length; i++) {
    let peop = people[i].toUpperCase();
    console.log(peop)
}

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:

for (let value of numbers) {
    value **= 2;
    console.log(value)
}

function rant (message) {
    
    for (let i = 0; i < 3; i++) {
    let test = message.toUpperCase();
    console.log(test)
    }
}

rant("poop")

function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 ===1) {
        console.log("Snake Eyes!")
    }
    else {
        console.log('Not Snake Eyes!')
    }
}

isSnakeEyes(1,2)

function multiply (num1, num2) {
    return num1 * num2
}
console.log(multiply(2,2))

function lastElement (arr) {
    if (arr.length > 0) {
    let last = arr.pop()
    return last
    }
    else {
        return null
    }
}
console.log(lastElement([1,2,3]))

function capitalize (str) {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(capitalize("happy"))

function sumArray (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}
console.log(sumArray([1,2,3]))

let days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thurday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}

function returnDay (num) {
    let days = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thurday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }
    let answer = days[num];
    return answer
}

console.log(returnDay(1))

//const square = function (num) {
//    return num*num;
//}
// console.log(square(4));

function callTwice(func) {
    func();
    func();
}

function rollDie () {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}

callTwice(rollDie)

function makeBetweenFunc(min, max) {
    return function (val) {
        return val >= min && val <= max;
    }
}

const inAgeRange = makeBetweenFunc(18,100)

console.log(inAgeRange)
console.log(inAgeRange(20));

let square = {
    area(side) {
        return side*side
    },
    perimeter(side) {
        return side*4
    }
}

console.log(square.perimeter(4));

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says Meowwww`)
    }
}

cat.meow();

const meow2 = cat.meow
console.log(cat.meow());

function scream() {
    console.log("ahhhhhhhhh")
}

scream()

let hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        let count = this.eggCount++;
        return "EGG"
    }
}

console.log(hen.layAnEgg())
console.log(hen.eggCount);


try {
    hello.toUpperCase();
    
} catch {
    console.log("ERRRROR")
}