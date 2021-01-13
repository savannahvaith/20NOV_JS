'use strict'


function deposit(incrememt){
    bankbalance = 100000; // don't do this!!!
    let balance = bankbalance + incrememt; 
    return `${balance}`;
}

console.log(deposit(10));

// console.log(bankbalance);


// VAR - creates variables for you - nonononononono
var x = 12; 
console.log(`${x} + ${y}`); // 12, undefined
var y = 5;


// let - stricter, 
let x2 = 12; 
console.log(`${x2} + ${y2}`); // 
let y2 = 5; 