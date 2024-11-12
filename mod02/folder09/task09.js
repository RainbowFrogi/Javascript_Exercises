"use strict";

const nums = [1, 5, 4, 8, 113, 800, 2, 7, 10];

function even(numberArray) {
    let evenNums = [];

    for (let number of numberArray) {
        if (number % 2 == 0) {
            evenNums.push(number);
            console.log(`added number ${number}`);
        }
    }

    return evenNums;
}

document.getElementById("originalArray").textContent = "The original numbers were: " + nums;

const evenNums = even(nums);

document.getElementById("evenArray").textContent = "The even numbers are: " + evenNums;
