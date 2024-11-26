'use strict';

const form = document.querySelector('form');
const resultsElement = document.getElementById('results');

async function printJokes(jokes) {
  jokes.forEach((joke) => {
    const jokeElement = document.createElement('article');
    jokeElement.innerHTML = `<p>${joke.value}</p>`;
    resultsElement.appendChild(jokeElement);
  });
}

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const query = form.querySelector('input[name="q"]').value;

  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    const data = await response.json();
    const jokes = data.result;
    printJokes(jokes);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
});
