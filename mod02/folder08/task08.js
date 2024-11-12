"use strict";

const arr = ["Johnny", "DeeDee", "Joey", "Marky"];

function concat(array) {
    let concatString = "";

    for (let value of array) {
        concatString += value;
    }

    return concatString;
}

const pElement = document.getElementById("concatString");

let concatString = concat(arr);

pElement.innerHTML = concatString;
