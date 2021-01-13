'use strict';
function add(){
    return 1+2; 
}

function addit(number1, number2){
    return number1+number2; 
}

// function expression
const addition = function(num1, num2){
    return num1+num2;
}

// arrow function 
// const <name> = (parameters if any) => dosomethinginreturn

const additionarrow = (no1, no2) => no1+no2;

const stringconcat = (userinput) => {
    return `you said ${userinput}`;    
}

const subtraction = () => 21-2;

console.log(addition(12,2));

console.log(additionarrow(34,4));

const userinput = prompt("Enter something.. "); 
console.log(stringconcat(userinput));

console.log(subtraction());history