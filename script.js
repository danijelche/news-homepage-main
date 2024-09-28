const menuIcon = document.querySelector('.menu-btns');

menuIcon.addEventListener('click', () => {
	const navLinks = document.querySelector('.nav-links');
	const openModal = document.querySelector(".open-modal");
	const icon = menuIcon.querySelector("img");
	navLinks.classList.toggle('active');
	if(navLinks.classList.contains('active')){
		icon.src = './assets/images/icon-menu-close.svg';
		openModal.classList.toggle('show');
	} else {
		icon.src = './assets/images/icon-menu.svg';
		openModal.classList.toggle('show');
	}
})
	
	
