// Toggle do menu hamburguer
const btn = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu');
btn?.addEventListener('click', () => {
  menu.classList.toggle('open');
});