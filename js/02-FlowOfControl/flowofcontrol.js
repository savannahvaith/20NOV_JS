'use strict';
// Iterators
// let x = 1; 
// x++; // 1
// console.log(x); // 2

// let y = 1; 
// ++y; // 2
// console.log(y); //2


// while loop 
// for loop 
// do while 
// switch case

// for( [initial - expression]; [condition]; iterator){
//     statement
// }

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// difference = while loop & do while

// do while = executes atleast once before checking the condition 
// while = checks first then runs 

let x = 0;
let canIrun = false;

do {
    x++;
    console.log(x);
} while (canIrun);

// while(condition){
//     statement; 
// }

let pups = 0; 
let notEnoughPups = true; 

while(notEnoughPups){
    console.log("another one..");
    pups++;

    if(pups > 5){
        notEnoughPups = false; 
    }
}

// Switch case

// switch(expression){
//     case 0:
//         statement;
//     case 1: 
//         statement;
// }

let day = "kasjhfkasjhdksjadh"; 

switch(day){
    case "Sunday":
        console.log(`It is sunday`);
        break;
    case "Monday":
        console.log(`It's monday`);
        break;
    case "Tuesday":
        console.log(`Toosday`);
        break;
    case "Wednesday":
        console.log("wednesdayyyyy");
        break;
    default:
        console.log("The day isn't here.. ");
}


let now = new Date(); 
let greeting = "Good "; 

if(now.getHours() > 17){
    greeting += "evening"
}else{
    greeting += "day";
}

console.log(greeting);

// Ternary If 
// syntax: (condition) ? valueIfTrue : valueIfFalse

let greeting2 = `Good ` + ((now.getHours() > 17) ? "evening" : "day");
console.log(greeting2);