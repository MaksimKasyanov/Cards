const cards = document.querySelectorAll('.expander__card');
cards.forEach((el) => el.addEventListener('mouseover', expandCard));
cards.forEach((el) => el.addEventListener('mouseout', defaultCard));

function expandCard(childNodes) {
	
	cards.forEach((el) => el.classList.remove('expander__card-active'));
	this.classList.add('expander__card-active');
	console.log(childNodes)
}

function defaultCard(){
	cards.forEach((el) => el.classList.remove('expander__card-active'));
	cards[0].classList.add('expander__card-active');
}