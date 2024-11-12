"use strict";

let dogs = [];

for (let i = 0; i < 6; i++) {
    let dog = prompt("Please enter the name of a dog");
    dogs.push(dog);
}

dogs.sort();
dogs.reverse();

const ulElement = document.getElementById("dogList");

dogs.forEach((dog) => {
    const liElement = document.createElement("li");
    liElement.textContent = dog;
    ulElement.appendChild(liElement);
});
