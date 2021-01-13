'use strict'; 
// resvole = .then();
// reject = .catch();

let promprom = new Promise((resolve,reject) => {
    let a = 10+10; 
    if(a == 297834923849){
        // successful outcome
        resolve("All went well!");
    }else{
        // something went wrong
        reject("It didn't work!");
    }
}); 

promprom.then((message)=>{
    console.log(`This is in the then block, the status of the promise is ${message}`);
}).catch((message) => {
    console.log(`This is in the catch block, status is ${message}`);
}).then(() => {
    console.log(`I will take place regardless of the what happened before!`);
});

let aNewPromise = new Promise((resolve,reject)=>{
    console.log(`initial`);
    resolve();
    reject(); // unreachablecode
}).then(() => {
    // throw new Error("Something has failed"); // Throws error
    console.log("Do this"); // unreachable code
}).then(()=>{
    console.log(`Do this after whatever happened before`);
}).catch((message) => {
    console.log(`Catches ${message}`);
});

