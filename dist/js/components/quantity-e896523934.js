let quantity = document.querySelectorAll('.quantity__input'),
	quantityMinus = document.querySelectorAll('.quantity__minus'),
	quantityPlus = document.querySelectorAll('.quantity__plus');
for (let i = 0; i < quantity.length; i++) {
	quantityMinus[i].addEventListener('click', () => {
		let value = parseInt(quantity[i].value);
		value--;
		if (value <= 0) {
			value = 1;
		}
		quantity[i].value = value;
	});
	quantityPlus[i].addEventListener('click', () => {
		let value = parseInt(quantity[i].value);
		value++;
		if (value <= 0) {
			value = 1;
		}
		quantity[i].value = value;
	});
}