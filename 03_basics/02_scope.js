//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

/*
object and scope both are different but both are denoted by {} brackets 
scopes are generally associated with function, conditional statements and
loops. the inside of this data structures are called block scope and the 
outside of this called global scope
*/


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Varun"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "varun"
    if (username === "varun") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

/*
in scope its like parent cannot use the stuff of their child but child
can use the stuff of parents. 
*/

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

/*
when function is created normally it can be acces in any order but when 
it is assigned to a varible it can only be accessed after its insalization.
*/