'use strict';

function someFunction(){
    let hello = "billy bob joe"; 
    console.log(hello, "called from the function");
}

someFunction();
// console.log(hello);// hello is NOT defined here!! 

let check = false; 
function changeCheck(){
    check = true; 
}
console.log(check); // false 
changeCheck(); 
console.log(check); // true



// function test(){
//     flag = true; 
//     alert(flag); //true
//     test1(); 
//     alert(flag); //false
// }
// function test1(){
//     flag = false; 
//     return;
// }

// test(); // true, false
// true, true x2


function test(){
    flag = true; 
    alert(flag); // true
    test1();
    alert(flag); // true
}
function test1(){
    let flag = false; 
    return; 
}

test(); 
// compilation error - same variable name
// error - haven't defined flag x2
// true false
// true true x2
// 

// Scope = always look inside before you go else where. 
