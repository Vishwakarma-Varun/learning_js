//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

// data type of heros is string but when we use typeof it will show object and the data type of myObj is aslo object

let myObj = {
    name: "varun",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

/*
    data type of myFunction is function but we call it object function
*/

console.log(typeof myFunction);

//+++++++++++++++++++++++++++++++++++Stack & Heap++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) in this we get the copy of actual value so when we make changes in the value it does not affect the actual value 

let myName = "Varun"

let petName = myName

console.log(petName);

petName = "Arun"
console.log(petName);
console.log(myName);

/*
    Here we can see that on changing petName it 
    does not affect myName 
*/

// Heap (Non-primitive) here we get the refernce so when we make changes in value it also affect the original value

let userOne = {
    name: "Varun",
    email: "varun@gmail.com" 
}

let userTwo = userOne

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "Arun@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

/*
    Here we can see that when we make changes in email of userTwo
    it also changes the email of userOne because both refres the same heap
*/
