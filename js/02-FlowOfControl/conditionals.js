'use strict';

// let bool1 = true; // 1
// let bool2 = false; // 0

// == checks the VALUE
console.log(1 == "1"); // true
console.log(1 == true); // true

// === checks the VALUE AND the TYPE 
console.log(1 === "1"); // false
console.log(1 === true); // false

let userID = null; //null
let password; //undefined

console.log(userID == password); // true
console.log(userID === password); // false

console.log(typeof userID);
console.log(typeof password);

// Not Equality 
let sav = "Savannah"

// Inequlity => != (value) !==(value and type)
console.log(sav !== true); // true