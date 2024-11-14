'use strict';

const pElement = document.getElementById('trigger');
const img = document.getElementById('target');

function imgChange() {
  img.src = 'img/picB.jpg';
}

function imgRevert() {
  img.src = 'img/picA.jpg';
}

pElement.addEventListener('mouseover', imgChange);
pElement.addEventListener('mouseout', imgRevert);
