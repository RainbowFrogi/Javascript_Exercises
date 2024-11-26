'use strict';

const form = document.querySelector('form');
const resultsElement = document.getElementById('results');

function printData(showData) {
  const show = showData.name;
  const url = showData.url;
  const image = showData.image ? showData.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
  const summary = showData.summary;

  const showElement = document.createElement('article');
  showElement.innerHTML = `
    <h2>${show}</h2>
    <img src="${image}" alt="${show}">
    <a href="${url}" target="_blank">More Info</a>
    <div>${summary}</div>
  `;

  resultsElement.appendChild(showElement);
}

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const query = form.querySelector('input[name="q"]').value;

  try {
    document.getElementById('results').innerHTML = '';
    const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`);
    const showData = await response.json();
    printData(showData);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
});
