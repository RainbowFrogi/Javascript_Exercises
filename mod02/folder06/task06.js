"use strict";

let diceRolls = [];
let rolledNumber = 0;

function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

do {
    rolledNumber = diceRoll();
    diceRolls.push(rolledNumber);
} while (rolledNumber !== 6);

const ulElement = document.getElementById("diceRollList");

diceRolls.forEach((roll) => {
    const liElement = document.createElement("li");
    liElement.textContent = roll;
    ulElement.appendChild(liElement);
});
