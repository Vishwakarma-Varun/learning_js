// Singleton

// Object.create()

// Object literals

const mySym = "Key1" // We created a symbol

const user = {
    name : "Varun",
    "bloodGroup" : "B+", 
    /*
    we cannot access this key using user.bloodgroup 
    we have to use user["bloodGroup"]
    */
    age : 21,
    [mySym] : "mykey1",
    /*
    To use Symbol in object We have to declare it in "[]" square brackets 
    and to acess it we have to use user[mySym]
    */
    location : "mumbai",
    email : "varun@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","friday"]
}

// console.log(user.email);
// console.log(user["email"]); //its an another way to acees console.log(user.email);

// console.log(user["bloodGroup"]);
// console.log(typeof user[mySym]);

user.name = "Varun Vishwakarma" // its is use to make changes
// Object.freeze(user) // it stop user to make changes in object
// user.name = "Varun Rajkumar Vishwakarma"
// console.log(user)

user.greetings = function(){
    console.log("Hello user");
    
}

user.greetingsTwo = function(){
    console.log(`Hello user, ${this.name}`);
    
}

// console.log(user.greetings); // on this its print the function rference
console.log(user.greetings());
console.log(user.greetingsTwo());




