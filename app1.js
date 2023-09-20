const navToggle = document.querySelector('.nav_toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav-link');

navToggle.addEventListener('click', () => {
	nav.classList.toggle('nav-active');
});
