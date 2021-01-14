let mainslider = new Swiper('.content__slider', {
	observe: true,
	observerParents: true,
	observerSlideChildren: true,
	keyboard: {
		enable: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	pagination: {
		el: '.swiper-dotts',
		type: 'bullets',
		clickable: true,
	},
	slidesPerGroup: 1,
	watchOverflow: false,
	spaceBetween: 0,
	autoHeight: false,
});
let swiperImages = document.querySelectorAll('.swiper__image'),
	swiperDotts = document.querySelectorAll('.swiper-dotts .swiper-pagination-bullet');
for (let i = 0; i < swiperImages.length; i++) {
	const swiperImage = swiperImages[i].querySelector('img').getAttribute('src');
	swiperDotts[i].style.backgroundImage = "url('" + swiperImage + "')";
}


let productsSlider = new Swiper('.products-slider', {
	observe: true,
	observerParents: true,
	observerSlideChildren: true,
	navigation: {
		prevEl: '.products-slider__arrow.prev',
		nextEl: '.products-slider__arrow.next',
	},
	pagination: {
		el: '.products-slider__info',
		type: 'fraction',
		clickable: true,
	},
	keyboard: {
		enable: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	slidesPerGroup: 1,
	slidesPerView: 1,
	watchOverflow: false,
	spaceBetween: 0,
	autoHeight: true,
	on: {
		lazyImageReady: () => {
			ibg();
		},
	},
});

let logoSlider = new Swiper('.logo__container', {
	observe: true,
	observerParents: true,
	observerSlideChildren: true,
	navigation: {
		prevEl: '.logo__prev',
		nextEl: '.logo__next',
	},
	keyboard: {
		enable: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	slidesPerGroup: 1,
	slidesPerView: 5,
	watchOverflow: false,
	spaceBetween: 0,
	autoHeight: 112,
	loop: true,
	effect: 'slide',
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		450: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1000: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5,
		},
	},
});
let product__Slider = new Swiper('.product__container', {
	observe: true,
	observerParents: true,
	observerSlideChildren: true,
	keyboard: {
		enable: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	slidesPerGroup: 1,
	slidesPerView: 4,
	watchOverflow: false,
	spaceBetween: 12,
	loop: true,
	autoHeight: true,
	breakpoints: {
		300: {
			slidesPerView: 3,
		},
		400: {
			slidesPerView: 4,
		},
	},
});