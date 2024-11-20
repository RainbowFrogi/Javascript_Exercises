'use strict';

const actionElement = document.getElementById('calculation');
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
  const value = actionElement.value;
  let result;

  if (value.includes('+')) {
    let [a, b] = value.split('+').map(Number);
    result = add(a, b);
  } else if (value.includes('-')) {
    let [a, b] = value.split('-').map(Number);
    result = subtract(a, b);
  } else if (value.includes('*')) {
    let [a, b] = value.split('*').map(Number);
    result = multiply(a, b);
  } else if (value.includes('/')) {
    let [a, b] = value.split('/').map(Number);
    result = divide(a, b);
  } else {
    result = 'Incorrect calculation';
  }

  resultElement.innerHTML = 'Result: ' + result;
}

calcButton.addEventListener('click', calc);
