"use strict";
const names = ["John", "Paul", "Jones"];

let ulElement = document.getElementById("target");

for (let name of names) {
    let liElement = document.createElement("li");
    liElement.innerHTML = name;
    ulElement.appendChild(liElement);
}
