const nums = [1,2,3]

const totalOfNums = nums.reduce(function(acc, currentValue){
    return acc + currentValue
},0)

// const totalOfNums = nums.reduce((acc,currentValue) => acc + currentValue,0)

// after our function ends we have to write intial value of accumulator here we write 0 as its intial value after this acc = acc + currentValue

console.log(totalOfNums);

const shoppingCart = [
    {
        productName : "Monitor",
        price : 120000
    },
    {
        productName : "Mouse",
        price : 2000
    },
    {
        productName : "keyboard",
        price : 5000
    },
    {
        productName : "CPU",
        price : 130000
    }
]

const totalAmountToPay = shoppingCart.reduce((acc,item) => acc+item.price ,0)
console.log(totalAmountToPay);
