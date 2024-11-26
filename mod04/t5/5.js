'use strict';

async function getJoke() {
  try {
    const joke = await fetch('https://api.chucknorris.io/jokes/random');
    const jokeData = await joke.json();
    console.log(jokeData.value);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}

getJoke();
