// Immediately Invoked Function Expression
//An IIFE is a function that is created and executed immediately
// sometimes we face problem from global scope to remove its variable or polution we use IIFE

(function greet(){
    // console.log("hello user");
})();

// here we have to end our iife to that we write ; on the end

(() => {
        // console.log("hello user");       
})();

((name) => {
        console.log(`hello ${name}`);       
})("Varun");