document.querySelectorAll('.with_submenu').forEach((el) => {
	el.addEventListener('click', () => {
		
		let submenu = el.nextElementSibling;
		// let subMenuArrow = document.querySelector('.sub-menu_arrow');
		// subMenuArrow.classList.toggle('turn');
		// console.log(submenu);
		if(submenu.style.maxHeight) { 
			document.querySelectorAll('.sub-menu').forEach((el) => el.style.maxHeight = null)
			document.querySelectorAll('.sub-menu_arrow').forEach((el) => el.classList.remove('turn'));
		} else {
document.querySelectorAll('.sub-menu').forEach((el) => el.style.maxHeight = null)
submenu.style.maxHeight = submenu.scrollHeight + 'px'
document.querySelectorAll('.sub-menu_arrow').forEach((el) => el.classList.add('turn'));
		}
		 } )
		
} )