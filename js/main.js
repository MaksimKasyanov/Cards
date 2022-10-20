const blocks = document.querySelectorAll('.block');

window.addEventListener('scroll', checkBlocks);
function checkBlocks() {
	const scrollTrigger = window.innerHeight / 5 * 4;

	blocks.forEach(block => {
		const blockTop = block.getBoundingClientRect().top;
		if(blockTop < scrollTrigger){
			block.classList.add('show')
		}
		if(blockTop > scrollTrigger){
			block.classList.remove('show')
		}
	})

}