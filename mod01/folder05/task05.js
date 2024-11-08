"use strict";

// Prompt the user for a year
const year = prompt("Enter a year");
let result;

// Check if the year is a leap year
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            result = year + " is a leap year";
        } else {
            result = year + " is not a leap year";
        }
    } else {
        result = year + " is a leap year";
    }
} else {
    result = year + " is not a leap year";
}

document.querySelector("#result").innerHTML = result;
