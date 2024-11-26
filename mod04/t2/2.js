'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const query = form.querySelector('input[name="q"]').value;

  try {
    const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`);
    const showData = await response.json();
    console.log(showData);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
});
