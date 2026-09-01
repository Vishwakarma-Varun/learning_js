const score = 100

console.log(score)

const newNumber = new Number(200)
// console.log(newNumber)

// console.log(newNumber.toString().length);
// console.log(newNumber.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreads = 100000000

// console.log(hundreads.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++Math++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // it gives values between 0 and 1. it can also give 0 also

console.log((Math.random()*10) + 1); // because random gives in float it is used to shift 1 digit and we add 1 to avoid zero

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

