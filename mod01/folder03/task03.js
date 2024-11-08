"use strict";

// Prompt the user for their name
const ans1 = prompt("Enter the first number");
const ans2 = prompt("Enter the second number");
const ans3 = prompt("Enter the third number");

const num1 = parseInt(ans1);
const num2 = parseInt(ans2);
const num3 = parseInt(ans3);

let sum = num1 + num2 + num3;
let mul = num1 * num2 * num3;
let avg = (num1 + num2 + num3) / 3;

// Create a new HTML element to display the greeting
const sumElement = document.createElement("p");
const mulElement = document.createElement("p");
const avgElement = document.createElement("p");

// Set the text content of the HTML element
sumElement.textContent = "The sum of the numbers is " + sum;
mulElement.textContent = "The product of the numbers is " + mul;
avgElement.textContent = "The average of the numbers is " + avg;

// Append the greeting element to the body of the document
document.body.appendChild(sumElement);
document.body.appendChild(mulElement);
document.body.appendChild(avgElement);
