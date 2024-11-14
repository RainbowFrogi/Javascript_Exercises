'use strict';

function popup() {
  alert('Button clicked!');
}

const button = document.querySelector('button');
button.addEventListener('click', popup);
