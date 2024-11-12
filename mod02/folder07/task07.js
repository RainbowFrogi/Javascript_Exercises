"use strict";

let diceRolls = [];
let rolledNumber = 0;

function diceRoll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const sideAmount = parseInt(prompt("Give the dice side amount: "));

do {
    rolledNumber = diceRoll(sideAmount);
    diceRolls.push(rolledNumber);
} while (rolledNumber !== sideAmount);

const ulElement = document.getElementById("diceRollList");

diceRolls.forEach((roll) => {
    const liElement = document.createElement("li");
    liElement.textContent = `The die rolled: ` + roll;
    ulElement.appendChild(liElement);
});
