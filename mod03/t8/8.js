'use strict';

// Get elements
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const actionElement = document.getElementById('operation');
const calcButton = document.getElementById('start');
const resultElement = document.getElementById('result');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
}

function calc() {
  let num1 = parseFloat(num1Element.value);
  let num2 = parseFloat(num2Element.value);
  let action = actionElement.value;
  let result;

  switch (action) {
    case 'add':
      result = add(num1, num2);
      break;
    case 'sub':
      result = subtract(num1, num2);
      break;
    case 'multi':
      result = multiply(num1, num2);
      break;
    case 'div':
      result = divide(num1, num2);
      break;
    default:
      result = 'Invalid operation';
  }

  resultElement.innerHTML = 'Result: ' + result;
}

calcButton.addEventListener('click', calc);
