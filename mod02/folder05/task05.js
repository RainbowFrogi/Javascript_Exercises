"use strict";

let number = 0;
let numbers = [];

while (true) {
    number = parseInt(prompt("Give a number. Stop the program by giving an already given number"));

    if (!isNaN(number)) {
        if (numbers.includes(number)) {
            alert("This number has already been given. Halting program.");
            break;
        } else {
            numbers.push(number);
        }
    }
}

numbers.pop();

numbers.sort((a, b) => a - b);

console.log(numbers);
