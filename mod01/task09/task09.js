"use strict";

let number = parseInt(prompt("Enter a number to check if it is prime"));

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const result = isPrime(number);

if (result) {
    document.querySelector("#result").innerHTML = number + " is a prime number";
} else {
    document.querySelector("#result").innerHTML =
        number + " is not a prime number";
}
