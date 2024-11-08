"use strict";

const diceAmount = parseInt(prompt("How many dice would you like?"));

const diceSum = parseInt(prompt("What chance of a sum would you like to calculate?"));

function throwDice() {
    let num = Math.floor(Math.random() * 6 + 1);
    return num;
}

function throwDies(amount) {
    let diceThrows = [];

    for (let i = 0; i < 10000; i++) {
        let throwSum = 0;
        let diceThrow = 0;
        for (let y = 1; y <= amount; y++) {
            diceThrow = throwDice();
            throwSum += diceThrow;
        }

        diceThrows.push(throwSum);
    }

    return diceThrows;
}

function calcuateChance(diceThrows, sum) {
    let sumCount = 0;

    diceThrows.forEach((throwSum) => {
        if (throwSum === sum) {
            sumCount++;
        }
    });

    const sumChance = (sumCount / 10000) * 100;
    return sumChance;
}

let diceThrows = throwDies(diceAmount);

let chance = calcuateChance(diceThrows, diceSum);

document.querySelector("#chance").innerHTML = `Probability to get sum of ${diceSum} with ${diceAmount} dice is ${chance.toFixed(2)}%`;
