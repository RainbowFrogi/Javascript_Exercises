"use strict";

// Prompt the user for their name
const name = prompt("What is your name?");

// Create a new HTML element to display the greeting
const greetingElement = document.createElement("p");

// Set the text content of the HTML element
greetingElement.textContent = "Hello " + name;

// Append the greeting element to the body of the document
document.body.appendChild(greetingElement);
