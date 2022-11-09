// !Expanding randomname

if (window.innerWidth > 1000) {
	const cards = document.querySelectorAll('.expander__immigration .expander__card');
	cards.forEach((el) => el.addEventListener('mouseenter', expandCard));
	cards.forEach((el) => el.addEventListener('mouseleave', defaultCard));

	function expandCard() {
		cards.forEach((el) => el.classList.remove('expander__card-active'));
		this.classList.add('expander__card-active');
	}

	function defaultCard() {
		cards.forEach((el) => el.classList.remove('expander__card-active'));
		cards[0].classList.add('expander__card-active');
	}
}
if (window.innerWidth > 1000) {
	const cards = document.querySelectorAll('.expander__relocation .expander__card');
	cards.forEach((el) => el.addEventListener('mouseenter', expandCard));
	cards.forEach((el) => el.addEventListener('mouseleave', defaultCard));

	function expandCard() {
		cards.forEach((el) => el.classList.remove('expander__card-active'));
		this.classList.add('expander__card-active');
	}

	function defaultCard() {
		cards.forEach((el) => el.classList.remove('expander__card-active'));
		cards[0].classList.add('expander__card-active');
	}
}

// ! Scroll ainmated paragraphs
const relocationParagraphs = document.querySelectorAll('.accordion__relocation .accordion__paragraph');
const differencesParagraphs = document.querySelectorAll('.accordion__differences .accordion__paragraph');
const accordionImages = document.querySelectorAll('.accordion__img');
const accordionRelocation = document.querySelector('.accordion__relocation .accordion__paragraphs-wrapper');
const accordionDifferences = document.querySelector('.accordion__differences .accordion__paragraphs-wrapper');
window.addEventListener('scroll', checkParagraphs);

function checkParagraphs() {
	const scrollTrigger = window.innerHeight;
	relocationParagraphs.forEach((el) => {
		const blockTop = accordionRelocation.getBoundingClientRect().top;
		if (blockTop < (scrollTrigger / 10) * 8) {
			relocationParagraphs.forEach((el) =>
				el.classList.remove('accordion__paragraph-active')
			);
			relocationParagraphs[0].classList.add('accordion__paragraph-active');
		}
		if (blockTop < (scrollTrigger / 10) * 6) {
			relocationParagraphs.forEach((el) =>
				el.classList.remove('accordion__paragraph-active')
			);
			relocationParagraphs[1].classList.add('accordion__paragraph-active');
		}
		if (blockTop < (scrollTrigger / 10) * 4) {
			relocationParagraphs.forEach((el) =>
				el.classList.remove('accordion__paragraph-active')
			);
			relocationParagraphs[2].classList.add('accordion__paragraph-active');
		}
	});
	differencesParagraphs.forEach((el) => {
		const blockTop = accordionDifferences.getBoundingClientRect().top;
		if (blockTop < (scrollTrigger / 10) * 8) {
			differencesParagraphs.forEach((el) =>
				el.classList.remove('accordion__paragraph-active')
			);
			differencesParagraphs[0].classList.add('accordion__paragraph-active');
		}
		if (blockTop < (scrollTrigger / 10) * 6) {
			differencesParagraphs.forEach((el) =>
				el.classList.remove('accordion__paragraph-active')
			);
			differencesParagraphs[1].classList.add('accordion__paragraph-active');
		}
		if (blockTop < (scrollTrigger / 10) * 4) {
			differencesParagraphs.forEach((el) =>
				el.classList.remove('accordion__paragraph-active')
			);
			differencesParagraphs[2].classList.add('accordion__paragraph-active');
		}
	});
}

// ! Slider carousel

let carousel = new Swiper('.carousel', {
	wrapperClass: 'carousel__wrapper',
	slideClass: 'carousel__slide',
	slidePrevClass: 'carousel__slide-prev',
	slideNextClass: 'carousel__slide-next',
	slideActiveClass: 'carousel__slide-active',
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 10,
	speed: 800,
	loop: true,
	navigation: {
		nextEl: '.carousel__next',
		prevEl: '.carousel__prev',
	},
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 0,
		modifier: 1,
		slideShadows: false,
	},
	pagination: {
		el: '.carousel__pagination',
		clickable: true,
		bulletClass: 'carousel__bullet',
		bulletActiveClass: 'carousel__bullet-active',
	},
});

// ! Slider randomname
let managersLeft = new Swiper(".managers__left", {
	wrapperClass: 'managers__left-wrapper',
	slideClass: 'managers__left-slide',
	slideActiveClass: 'managers__left-active',
	effect: "fade",
	grabCursor: false,
	loop: true,
	navigation: {
		nextEl: ".managers__next",
		prevEl: ".managers__prev",
	},
});

let managersRight = new Swiper(".managers__right", {
	wrapperClass: 'managers__right-wrapper',
	slideClass: 'managers__right-slide',
	effect: "cards",
	grabCursor: true,
	loop: true,
	cardsEffect: {
		slideShadows: false,
		perSlideRotate: 6,
		perSlideOffset: 3,
	},
});

managersLeft.controller.control = managersRight;
managersRight.controller.control = managersLeft;


// ! Slider randomname

let individualsRight = new Swiper(".individuals__right", {
	wrapperClass: 'individuals__right-wrapper',
	slideClass: 'individuals__right-slide',
	slideActiveClass: 'individuals__right-active',
	effect: "fade",
	grabCursor: false,
	loop: true,
	navigation: {
		nextEl: ".individuals__next",
		prevEl: ".individuals__prev",
	},
});

let individualsLeft = new Swiper(".individuals__left", {
	wrapperClass: 'individuals__left-wrapper',
	slideClass: 'individuals__left-slide',
	effect: "cards",
	grabCursor: true,
	loop: true,
	cardsEffect: {
		slideShadows: false,
		perSlideRotate: 6,
		perSlideOffset: 3,
	},
});

individualsLeft.controller.control = individualsRight;
individualsRight.controller.control = individualsLeft;

let randomnameRight = new Swiper(".randomname__right", {
	wrapperClass: 'randomname__right-wrapper',
	slideClass: 'randomname__right-slide',
	slideActiveClass: 'randomname__right-active',
	effect: "fade",
	grabCursor: false,
	loop: true,
	navigation: {
		nextEl: ".randomname__next",
		prevEl: ".randomname__prev",
	},
});

let randomnameLeft = new Swiper(".randomname__left", {
	wrapperClass: 'randomname__left-wrapper',
	slideClass: 'randomname__left-slide',
	effect: "cards",
	grabCursor: true,
	loop: true,
	cardsEffect: {
		slideShadows: false,
		perSlideRotate: 6,
		perSlideOffset: 3,
	},
});

randomnameLeft.controller.control = randomnameRight;
randomnameRight.controller.control = randomnameLeft;