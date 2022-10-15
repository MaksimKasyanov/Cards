const cards = document.querySelectorAll('.expander__card');
cards.forEach((el) => el.addEventListener('mouseenter', expandCard));
cards.forEach((el) => el.addEventListener('mouseleave', defaultCard));

function expandCard() {
	cards.forEach((el) => el.classList.remove('expander__card-active'));
	this.classList.add('expander__card-active');
}

function defaultCard(){
	cards.forEach((el) => el.classList.remove('expander__card-active'));
	cards[0].classList.add('expander__card-active');
}