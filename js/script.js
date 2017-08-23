let containerElement = document.getElementById('container');

(function() {
	for (i = 0; i < 9; i++) {
		let box = document.createElement('div');
		box.id = `box${i}`;
		box.className = 'box';
		box.innerText = 'X';
		containerElement.appendChild(box);
	}
})();

containerElement.addEventListener('click', () => {
	let box = event.target;
	box.textContent = 'X';


});