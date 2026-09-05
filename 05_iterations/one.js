//for

// for (let index = 1; index < 11; index++) {
//     const element = index;
//     if (element % 2 === 0) {
//         console.log(`${element} is even`); 
//     }  
// }

for (let i = 2; i < 5; i++) {
    console.log(`Table of ${i} :`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i*j} `);  
    }
    
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}