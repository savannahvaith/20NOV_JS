'use strict';

// METHOD 1: accessing the object() class (
let student = new Object();
// Adding properties to your object
student.name = "Savannah";
student["id"] = 123;
// student.name = "Nick"; // Not best practise to override an existing property

// Method 2:
let person = { name: "Sav", id: 123, courseCode: "JSFUND" };

// Looping through the object Person 
for (let temp in person) {
    console.log(person[temp]);
}

console.log(student);
console.log(person);

console.log(person.name);
console.log(person['id']);

// Creating an array with multiple objects inside
const classroom = [
    { name: "sav", id: 123, courseCode: "JSFUND" },
    { name: "jim", id: 234, courseCode: "JSFUND" },
    { name: "bob", id: 345, courseCode: "JSFUND" },
    { name: "tom", id: 456, courseCode: "JSFUND" },
    34,
    true,
    false
]

// looping through the array, then looping through the object
for (let i = 0; i < classroom.length; i++) {
    console.log(`the current index is: ${i}, ${classroom[i]}`);
    for (let tempvariablename in classroom[i]) {
        console.log(`Values from object: ${classroom[i][tempvariablename]}`);
    }
}

// JSON
let myJSONObject = {
    "Users": [
        { "username": "jimbob123", "password": "hello123" },
        { "username": "bobjim123", "password": "123hello" }
    ]
}

myJSONObject.Users.push({"username":"Savizzlee", "password":"hihihi"});
console.log(myJSONObject);

// JSON PARSE = Takes in a string, and spits out an object
let strObj = `{"name":"sav"}`; 
console.log(typeof strObj);

let obj = JSON.parse(strObj);
console.log(typeof obj);


// JSON STRINGIFY = Takes in a object, and spits out a string. 
console.log(obj);
let convertmeback = JSON.stringify(obj);
console.log(convertmeback);
console.log(typeof convertmeback);