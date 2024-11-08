"use strict";

// Prompt the user for their name
const name = prompt("Enter the first number");
let clan;

// Get random number between 1 and 4
const randonNumber = Math.floor(Math.random() * 4) + 1;

switch (randonNumber) {
    case 1:
        console.log("The class is Gryffindor");
        clan = "Gryffindor";
        break;
    case 2:
        console.log("The class is Slytherin");
        clan = "Slytherin";
        break;
    case 3:
        console.log("The class is Hufflepuff");
        clan = "Hufflepuff";
        break;
    case 4:
        console.log("The class is Ravenclaw");
        clan = "Ravenclaw";
        break;
    default:
        alert("The number is not between one and four");
}

document.querySelector("#greeting").innerHTML =
    "Hello " + name + ", you are " + clan;
