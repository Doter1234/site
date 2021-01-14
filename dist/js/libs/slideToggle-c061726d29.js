let DOMAnimations = {
	/**
	* SlideUp
	*
	* @param {HTMLElement} element
	* @param {Number} duration
	* @returns {Promise<boolean>}
	*/
	slideUp: function (element, duration = 400) {
		for (let i = 0; i < element.length; i++) {
			let el = element[i];
			return slideup(el, duration);
		}
		return slideup(element, duration);
	},
	/**
	* SlideDown
	*
	* @param {HTMLElement} element
	* @param {Number} duration
	* @returns {Promise<boolean>}
	*/
	slideDown: function (element, duration = 400) {
		for (let i = 0; i < element.length; i++) {
			let el = element[i];
			return slidedown(el, duration);
		}
		return slidedown(element, duration);
	},
	/**
	* SlideToggle
	*
	* @param {HTMLElement} element
	* @param {Number} duration
	* @returns {Promise<boolean>}
	*/
	slideToggle: function (element, duration = 400) {
		for (let i = 0; i < element.length; i++) {
			let el = element[i];
			if (window.getComputedStyle(el).display === 'none') {
				return slidedown(el, duration);
			} else {
				return slideup(el, duration);
			}
		}
		if (window.getComputedStyle(element).display === 'none') {
			return slidedown(element, duration);
		} else {
			return slideup(element, duration);
		}
	}
}
// ------------------------------------------------------
function slideup(element, duration = 400) {
	return new Promise(function (resolve, reject) {
		element.style.height = element.offsetHeight + 'px';
		element.style.transitionProperty = `height, margin, padding`;
		element.style.transitionDuration = duration + 'ms';
		element.offsetHeight;
		element.style.overflow = 'hidden';
		element.style.height = 0;
		element.style.paddingTop = 0;
		element.style.paddingBottom = 0;
		element.style.marginTop = 0;
		element.style.marginBottom = 0;
		window.setTimeout(function () {
			element.style.display = 'none';
			element.style.removeProperty('height');
			element.style.removeProperty('padding-top');
			element.style.removeProperty('padding-bottom');
			element.style.removeProperty('margin-top');
			element.style.removeProperty('margin-bottom');
			element.style.removeProperty('overflow');
			element.style.removeProperty('transition-duration');
			element.style.removeProperty('transition-property');
			resolve(false);
		}, duration)
	})
}
function slidedown(element, duration = 400) {
	return new Promise(function (resolve, reject) {
		element.style.removeProperty('display');
		let display = window.getComputedStyle(element).display;
		if (display === 'none')
			display = 'block';
		element.style.display = display;
		let height = element.offsetHeight;
		element.style.overflow = 'hidden';
		element.style.height = 0;
		element.style.paddingTop = 0;
		element.style.paddingBottom = 0;
		element.style.marginTop = 0;
		element.style.marginBottom = 0;
		element.offsetHeight;
		element.style.transitionProperty = `height, margin, padding`;
		element.style.transitionDuration = duration + 'ms';
		element.style.height = height + 'px';
		element.style.removeProperty('padding-top');
		element.style.removeProperty('padding-bottom');
		element.style.removeProperty('margin-top');
		element.style.removeProperty('margin-bottom');
		window.setTimeout(function () {
			element.style.removeProperty('height');
			element.style.removeProperty('overflow');
			element.style.removeProperty('transition-duration');
			element.style.removeProperty('transition-property');
		}, duration)
	})
}