document.addEventListener("DOMContentLoaded", () => {
	const priceSlider = document.querySelector('.price-filter__slider');
	noUiSlider.create(priceSlider, {
		start: [0, 100000],
		tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
		connect: true,
		range: {
			'min': 0,
			'max': 200000
		}
	});
	const
		priceStart = document.querySelector('#price-start'),
		priceEnd = document.querySelector('#price-end');
	priceStart.addEventListener('change', function () {
		priceSlider.noUiSlider.set([priceStart.value, null]);
	});
	priceEnd.addEventListener('change', function () {
		priceSlider.noUiSlider.set([null, priceEnd.value]);
	});
});