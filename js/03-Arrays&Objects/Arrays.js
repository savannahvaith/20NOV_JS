'use strict';

// Arrays = Storing data, similar to lists with some differences

// Ability to store primitive data types 

//Method 1: Array with no data/no size
let array1 = Array(); 
console.log(array1);

// Method 2: Array with a specified size
let arrayWithSize = Array(10);
console.log(arrayWithSize);

// Method 3: 
let arraywithvalues = Array("Rob", "Bob", "Tom");
console.log(arraywithvalues);

// Mthod 4:Preferred method/ best practise 
let arrayBestPractise = ["Savannah", "Field2", "field3"];
console.log(arrayBestPractise);

// We are NOT limited to the information that we store.. 
let arrayDataTypes = ["Savannah", true, 14, {hobbies:"eating"}];
console.log(arrayDataTypes);

let classroom = Array(5); 
classroom[0] = "Someone";
classroom[2] = "who"; 
// classroom[3] = "is";
classroom[4] = "important"; 
classroom[5] = 100;
classroom[50] = [1,2,3,"hello","jim bob", "qa-community"]
console.log(classroom);
console.log(classroom[1]); // undefined

for(let i=0; i<classroom.length; i++){
    console.log(classroom[i]);
}


let fruits = []; 
fruits[0] = "Apple"; 
fruits[1] = "Pear"; 
fruits[2] = "Banana"; 
fruits[3] = "Strawberries"; 
fruits[4] = "tomato"; 

console.log(fruits);
// push() - adds to the END of the array!
fruits.push("Pineapple"); 
console.log(fruits);

// pop() - remove LAST element from my array 
fruits.pop(); 
console.log(fruits);

// unshift() - adds to the START of the array!
fruits.unshift("Pineapple");
console.log(fruits);

// shift() - remove from teh START of the array!
fruits.shift(); 
console.log(fruits);

let removeME = fruits.indexOf(3); 
fruits.splice(removeME, 1);
console.log(fruits);