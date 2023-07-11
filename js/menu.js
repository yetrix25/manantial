const menu = document.querySelector('nav ul');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
	menu.classList.toggle('show');
});