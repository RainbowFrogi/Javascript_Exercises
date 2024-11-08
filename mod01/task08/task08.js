"use strict";

const start = prompt("Enter year to start from");
const end = prompt("Enter year to end to");

function getLeapYears(start, end) {
    let leapYears = [];
    for (let i = start; i <= end; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
            leapYears.push(i);
        }
    }
    return leapYears;
}

const leapYears = getLeapYears(start, end);

const ulElement = document.createElement("ul");

leapYears.forEach((year) => {
    const liElement = document.createElement("li");
    liElement.textContent = year;
    ulElement.appendChild(liElement);
});

document.body.appendChild(ulElement);
