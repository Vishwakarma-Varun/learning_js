const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // same as concat it is called as spread 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // here flat is used to solve the nested array problem in values we can give layer but if do not know the number of layer we can give infinity.
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // to verfiy if our varaible is array or not
console.log(Array.from("Hitesh")) // used to make array 
console.log(Array.from({name: "hitesh"})) // it cannot make directly from arrey we have to specify if we want to make array of keys or values and hence out of this will be empty array i.e []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // it is also used to create arrey from elements 