const hamburger = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
const closeBtn = document.querySelector('#close-button');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
closeBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
