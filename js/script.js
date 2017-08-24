const containerElement = document.getElementById('container');
const messageElement = document.getElementById('message');
const message1 = "Player 1's turn!";
const message2 = "Player 2's turn!";

const game = {
	turn: 0,
	boxes: [],

	render: function() {
		messageElement.textContent = message1;
		for (i = 0; i < 9; i++) {
			let box = document.createElement('div');
			box.id = `box${i}`;
			box.className = 'box';
			box.addEventListener('click', game.handler, false);
			game.boxes.push(box);
			console.log(game.boxes);
			containerElement.appendChild(box);
		}
	},

	isEven: function(num) {
		if (num % 2 === 0) return true;
	},

	handler: function() {
		let box = event.target;
		if (game.isEven(game.turn)) {
			box.textContent = 'X';
			game.turn++;
			messageElement.textContent = message2;
		} else {
			box.textContent = 'O';
			game.turn++;
			messageElement.textContent = message1;
		}
		box.removeEventListener('click', game.handler, false);
	},


};
game.render();