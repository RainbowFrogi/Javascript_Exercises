"use strict";

const rollAmount = parseInt(
    prompt("How many times do you want to roll the dice?")
);
let sum = 0;

function diceRoll() {
    let roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

for (let i = 0; i < rollAmount; i++) {
    let roll = diceRoll();
    sum += roll;
}

document.querySelector("#sum").innerHTML = "The sum of the rolls is " + sum;
