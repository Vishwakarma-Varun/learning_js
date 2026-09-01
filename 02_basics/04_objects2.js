// const user = new Object() // Singleton
const user = {}

user.name = "Varun"
user.id = "123abc"
user.isLoggedIn = false
// console.log(user);

const normalUser = {
    email : "example@gmail.com",
    fullname : {
        userfullname : {
            firstName : "Varun",
            lastName : "Vishwakarma"
        }
    }
}

console.log(normalUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

