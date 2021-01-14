const MONKEY = document.querySelector("#cutie");
console.dir(MONKEY);
MONKEY.title="Cheeky Monkey";
MONKEY.alt="This is the alt tag";
// use SetAttribute() where possible instead of directly manipulating the object
MONKEY.setAttribute("width","550px");
MONKEY.setAttribute("height", "550px");
MONKEY.className="justtoshow";

const PUP = document.querySelector(".pup");
console.log(PUP);

// query selector all  - selects ALL matching cases 
let allP = document.querySelectorAll("div p");
console.dir(allP);

for(let i=0; i<allP.length; i++){
    allP[i].style.backgroundColor = "#ff0000";
}

// creating new content:
let newHeading = document.createElement("h1");
let theText = document.createTextNode("I love JS");
newHeading.appendChild(theText); // <h1>I love JS </h1>

const div = document.querySelector('#addToMe'); 
div.appendChild(newHeading);