"use strict";

let number = 0;
let numbers = [];

do {
    number = parseInt(prompt("Give a number. Stop the program by giving a 0: "));
    if (!isNaN(number)) {
        numbers.push(number);
    }
} while (number !== 0);
numbers.pop();

numbers.sort((a, b) => a - b);

console.log(numbers);
