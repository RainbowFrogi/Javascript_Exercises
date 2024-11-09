"use strict";

let participants = [];

let particpantAmount = parseInt(prompt("Please enter the amount of participants"));

for (let i = 0; i < particpantAmount; i++) {
    let participant = prompt("Please enter the name of the participant");
    participants.push(participant);
}

participants.sort();

const olElement = document.getElementById("participantList");

participants.forEach((participant) => {
    const liElement = document.createElement("li");
    liElement.textContent = participant;
    olElement.appendChild(liElement);
});
