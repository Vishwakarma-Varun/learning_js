const fruits = ["apple","banana","orange","kiwi"]

fruits.forEach(function (item){
    // console.log(item);
})

fruits.forEach((item) => {
    // console.log(item);
})

function printMe(item){
    // console.log(item)
}

fruits.forEach(printMe)

fruits.forEach((item,index,arr) =>{
    // console.log(item, index, arr);
    
})

/*
Here in for each we have to give call back function

normal function:
function name(){} this the syntax

But for call back function we do not need to write its name

Example:
function(){} this is the syntax for call back function

We can also use arrow function (item) => {}

we can call another function in for each we just have to
give its reference do not execute it i.e write printMe
instead of printMe()

for each have parameters like item , index and arr so we can acess
item and index and arr every time
*/

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )