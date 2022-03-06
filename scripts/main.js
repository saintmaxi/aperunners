menuInteraction();
function menuInteraction() {
	const header = document.querySelector('header');
	const burgerMenu = document.querySelector('.burger-menu');	

	burgerMenu.addEventListener('click', () => {
		header.classList.toggle('show-mobile-menu');
	})
}
