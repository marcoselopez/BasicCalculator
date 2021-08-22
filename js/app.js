//INPUT FIELD OF CALCULATOR
const inputField = document.getElementById('input');

//NUMBERS ON INPUT FIELD
const insertNum = num => inputField.textContent += num;

//RESOLVE OPERATIONS
const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;

//ERASE BUTTON
const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);

//CLEAR BUTTON
const clearInput = () => inputField.textContent = '';