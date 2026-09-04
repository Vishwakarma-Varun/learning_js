const user = {
    userName : "Varun",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.userName} , Welcome to our wbsite`)
        // console.log(this);
        
    }
}

/*
    this keyword refers to the curent context. like when its used inside object then the object will be its current context 
*/

// user.welcomeMessage()
// user.userName = "Vsihal"
// user.welcomeMessage()

// console.log(this);
// for node here this refers to the empty object but in browser this will refer windows 

// const person = function(){
//     let name = "varun"
//     console.log(`${this.name}`);
//     //this refers to the object that calling the function no the fuction !!  
// }
// person()

// function person(){
//     let name = "varun"
//     console.log(`${this.name}`);
// }

// person()

//++++++++++++++++++++Arrow Function++++++++++++++++++++++++++

// const person = () => {
//     let name = "Varun"
//     console.log(this);
//     //Arrow function → borrows this from outside
// }

// person()

// const addTwoNumbers = (num1,num2) => {
//     return num1 + num2
// }

// const addTwoNumbers = (num1, num2) => num1 + num2
// here if we write in single line we do not need to add {} brackets and also don't need to write return also just write what u want
// can also written in parenthesis (num1 + num2)

const addTwoNumbers = (num1, num2) => (num1 + num2)

// const addTwoNumbers = (num1, num2) => ({userName : "varun"})

console.log(addTwoNumbers(4,5));
