let containerElement = document.getElementById('container');
let turn = 0;

function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
}

(function() {
	for (i = 0; i < 9; i++) {
		let box = document.createElement('div');
		box.id = `box${i}`;
		box.className = 'box';
		containerElement.appendChild(box);
	}
})();

containerElement.addEventListener('click', () => {
	let box = event.target;
	if (isEven(turn)) {
		box.textContent = 'X';
		turn++;
	} else {
		box.textContent = 'O';
		turn++;
	}

});