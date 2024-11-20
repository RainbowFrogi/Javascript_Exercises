'use strict';

const form = document.getElementById('source');
const target = document.getElementById('target');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = form.querySelector('input[name="firstname"]').value;
  const lastName = form.querySelector('input[name="lastname"]').value;

  target.textContent = `Your name is ${firstName} ${lastName}`;
});
