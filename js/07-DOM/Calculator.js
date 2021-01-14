const num1 = document.querySelector("#firstNum");
const num2 = document.querySelector("#secondNum");
const result = document.querySelector("#result");
const history = document.querySelector("#history");

const getValues = () => {
    return [Number.parseFloat(num1.value), Number.parseFloat(num2.value)];
}

const addToHistory = (num1, operator, num2, result) => {
    const addParagraph = document.createElement("p");
    addParagraph.className = "styleME";
    const info = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`);
    addParagraph.appendChild(info);
    history.appendChild(addParagraph);
}

const printResult = (newValue) => {
    result.value = newValue;
}

const clearHistory = () =>{
    history.innerHTML = ""; 
}

const clearValues = () => {
    num1.value = ""; 
    num2.value = ""; 
    result.value = ""; 
}

const add = () => {
    const [num1, num2] = getValues();
    const newResult = num1 + num2;
    printResult(newResult);
    addToHistory(num1, "+", num2, newResult);
}

const subtract = () => {
    const [num1, num2] = getValues();
    const newResult = num1 - num2;
    printResult(newResult);
    addToHistory(num1, "-", num2, newResult);
}

const multiply = () => {
    const [num1, num2] = getValues();
    const newResult = num1 * num2;
    printResult(newResult);
    addToHistory(num1, "X", num2, newResult);
}

const divide = () => {
    const [num1, num2] = getValues();
    const newResult = num1 / num2;
    printResult(newResult);
    addToHistory(num1, "/", num2, newResult);
}

window.onload = () => {
    prompt("Tell me how you're feeling today...");
};