'use strict';
// callbacks - a function that takes in a function

// first function
const greeting = (fullname) => {
    alert(`Hello ${fullname}`);
}

// second function 
const processUserInput = (callback) => {
    // get the user to type their name 
    let humansname = prompt("Please enter your name");
    // once the user has entered their name 
    callback(humansname);
}

processUserInput(greeting);