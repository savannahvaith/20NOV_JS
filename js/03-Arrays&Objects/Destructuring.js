// Destructuring - extracting data from objects and arrays

let variable1, variable2, variable3;

[variable1, variable2, variable3] = ["I", "Love", "JS"];

console.log(variable1); // I 
console.log(variable2); // Love
console.log(variable3); // JS

// Destructuring an object 
let myobject = { var6: "salt", var7: "pepper" };
// let { var6, var7} = myobject; 

// console.log(var6); //salt
// console.log(var7); //pepper

// console.log(myobject.var6); // salt
// console.log(myobject.var7); // pepper

// renaming deconstructed variables: 
let { var6: condament1, var7: condament2 } = myobject;

console.log(condament1);
console.log(condament2);

// ... spread operator - collates values together, and is stored in an []
const myArray = [1, 2, 3, 4, 5, 633, 22, 5, 44, 55, 66, 77888999];
// to skip over values, use a "," in it's place. 
const [a, , c, ...rest] = myArray;

console.log(a);
// console.log(b);
console.log(c);
console.log(rest);


const person = {
    first: "Chris",
    middle: "P.",
    last: "Bacon",
    city: "London",
    country: "UK", 
    // gender:"Female"
}

// let first = person.first; 
// let middle = person.middle; 

let { first, middle, last, gender = "Male" } = person;
console.log(`Your human is called: ${first} ${middle} ${last}. Gender: ${gender}`);

// we use default if it doesn't exist in the object.
// if it does exist, use the object value, not the default value. 


// default values 
// const rgb = [200]; 
// const [red=255, green, blue=255] = rgb; 
// console.log(`${red}, ${green}, ${blue}`); // 255,undefined,255
// it doesn't know that 200 - green

let red = 100; 
let green = 200; 
let blue = 50;
const rgb = [200,255,100]; 
[red,green] = rgb; 
console.log(`${red} ${green}, ${blue}`); // 200, 255, 50 
