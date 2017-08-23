const containerElement = document.getElementById('container');
const messageElement = document.getElementById('message');
const message1 = "Player 1's turn!";
const message2 = "Player 2's turn!";
let turn = 0;

function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
}

(function() {
	messageElement.textContent = message1;
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
		messageElement.textContent = message2;
	} else {
		box.textContent = 'O';
		turn++;
		messageElement.textContent = message1;
	}
});