"use strict";

let calculateSqrt = confirm(
    "Should I calculate the square root of a number you give me?"
);

if (calculateSqrt) {
    const number = prompt("Enter a number");
    if (number < 0) {
        alert("The square root of a negative number can not be calculated!");
    } else {
        const result = Math.sqrt(number);
        document.querySelector("#result").innerHTML =
            "The square root of " + number + " is " + result;
    }
}
