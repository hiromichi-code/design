'use strict';

const leftLight = document.querySelector('#direction');
let value = leftLight.textContent;

const mainValue = document.querySelectorAll('.main');

leftLight.addEventListener('change', (e) => {
  if(value === 'left'){
    document.getElementById('.mainOne').textContent = '六';
  }
});