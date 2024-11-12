"use strict";

let candidateAmount = 0;
let candidates = [];

// Returns an array of candidates where every candidate is an object literal
function initCandidates() {
    // Ask for candidate names until you get a number that is above 0
    do {
        candidateAmount = parseInt(prompt("How many candidates are there?: "));
    } while (isNaN(candidateAmount || candidateAmount <= 0));

    for (let i = 0; i < candidateAmount; i++) {
        let name = prompt(`Give the name of the candidate number ${i + 1}: `);
        candidates.push({ name: name, votes: 0 });
    }

    return candidates;
}

function vote(candidates, voterAmount) {
    for (let i = 0; i < voterAmount; i++) {
        // Extract candidate names and join them into a single string
        let candidateNames = candidates.map((candidate) => candidate.name).join(", ");
        let name = prompt(`Give the name of the candidate you want to vote. The options are ${candidateNames}`);

        // Find a candidate with the name and increment their vote count
        let candidate = candidates.find((candidate) => candidate.name === name);
        if (candidate) {
            candidate.votes++;
        } else if (candidate == "") {
            continue;
        } else {
            alert("Invalid candidate name. Please try again.");
            i--;
        }
    }

    results(candidates);
}

function results(candidates) {
    candidates.sort((a, b) => b.votes - a.votes);

    console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes`);
    console.log("Results: ");
    candidates.forEach((candidate) => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}

let candidateList = initCandidates();
let voterAmount = parseInt(prompt("How many voters are there?: "));

const result = vote(candidateList, voterAmount);

console.log(result);
