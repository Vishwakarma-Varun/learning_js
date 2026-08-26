const accountId = 1234
let accountEmail = "varun@gmail.com"
var accountPassword = "2004"
accountCity = "Mumbai"
let accountState;

/*
    Prefer not use var
    because of issue in block scope and functional scope 
*/

// accountId = 456  // Not allowed

accountEmail = "varunvishwa@gmail.com"
accountPassword = "2006"
accountCity = "Delhi"

console.log(accountId);

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])