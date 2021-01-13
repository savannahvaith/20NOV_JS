// Destructuring - extracting data from objects and arrays

let variable1, variable2, variable3; 

[variable1, variable2, variable3] = ["I", "Love", "JS"];

console.log(variable1); // I 
console.log(variable2); // Love
console.log(variable3); // JS

// Destructuring an object 
let myobject = { var6: "salt", var7: "pepper"}; 
// let { var6, var7} = myobject; 

// console.log(var6); //salt
// console.log(var7); //pepper

// console.log(myobject.var6); // salt
// console.log(myobject.var7); // pepper

// renaming deconstructed variables: 
let {var6: condament1, var7:condament2} = myobject; 

console.log(condament1);
console.log(condament2);

