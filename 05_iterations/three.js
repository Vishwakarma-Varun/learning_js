// For of loop

// ["","",""]
// [{},{},{}]

const nums = [1,2,3,4,5]

for (const element of nums) {
    // console.log(element);
}

const name = "Varun"

for (const word of name){
    // console.log(word);
}

//++++++++++++++++++++++MAP+++++++++++++++++++++++

// Map are objects which do not contain duplicate keys and are iterable

const map = new Map()

map.set('IN', 'India') // this how we set keys and values in map (key,value)
map.set('Fr','France')
map.set('USA', 'Amarica')

for (const key of map) {
    // console.log(key);
}

for (const [key,value] of map) {
    console.log(key,value);
}
/*
on printing just key we get whole key and value in array
Output:
[ 'IN', 'India' ]
[ 'Fr', 'France' ]
[ 'USA', 'Amarica' ]

if want to access key and value seprately we can write like [key] to
acess the key only if we want to acess value also so we can write
[key , value ]
*/

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// We can not iterate our object like this !!!!!!!!!!!!!

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

