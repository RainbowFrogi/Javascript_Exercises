"use strict";

let numbers = [];

// prompt user for 5 numbers
for (let i = 0; i < 5; i++) {
    let number = prompt("Please enter a number");
    numbers.push(number);
}

numbers.reverse();

// display the numbers in reverse order
const ulElement = document.createElement("ul");

numbers.forEach((number) => {
    const liElement = document.createElement("li");
    liElement.textContent = number;
    ulElement.appendChild(liElement);
});

document.body.appendChild(ulElement);
