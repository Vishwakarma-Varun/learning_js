// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Varun"))

// function CalculateCartPrice(num){
//     return num
// }

/*
if we paas more than 1 value so we have to use rest operator its
just add 3 dots before parameter i.e ...num now it will create 
an array of the numbers we will pass to our function it is similar
to spread it depends on its use case i.e where we use it. suppose if we
write (num1,num2,...num) then first two values will be assign to num1 and
num2 respectively and the rest wiil get stored in num in the form of array
*/

function CalculateCartPrice(val1,val2,...num){
    return num
}
// console.log(CalculateCartPrice(200,300,400,500));

const user = {
    userName : "varun",
    price : 999
}

function handleObject(anyObject){
    return `Hello ${anyObject.userName} and the price is ${anyObject.price}`
}

// console.log(handleObject(user))

// console.log(handleObject({
//     userName: "Vishal",
//     price : 250
// }));

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
