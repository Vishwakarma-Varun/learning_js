// How to use loop on Object

const myObject = {
    py : "python",
    js : "javascript",
    cpp : "C++" ,
    sql : "Structred querry language"
}

for (const key in myObject) {
    // console.log(`${key} is shortcut of ${myObject[key]}`);
}

/*
For In loop gives keys in objects and can also use array beacuse
keys of arrey by default starts from 0 so if want to acess its value
we will use sytanx like myObject[key] and for arr myArr[key]
*/

const word = "javascript"

for (const key in word) {
    console.log(`Index of ${word[key]} : ${key}`)
}

// For in loop cant not be applied on MAPS

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }