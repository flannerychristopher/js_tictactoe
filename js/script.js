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
			box.textContent = ' ';
			game.boxes.push(box.textContent);
			box.id = `box${i}`;
			box.className = 'box';
			box.addEventListener('click', game.handler, false);
			containerElement.appendChild(box);
		}
	},

	isEven: function(num) {
		if (num % 2 === 0) return true;
	},

	handler: function() {
		let box = event.target;
		let boxNumber = event.target.id[3];
		if (game.isEven(game.turn)) {
			box.textContent = 'X';
			game.boxes[boxNumber] = true;
			game.turn++;
			messageElement.textContent = message2;
		} else {
			box.textContent = 'O';
			game.boxes[boxNumber] = false;
			game.turn++;
			messageElement.textContent = message1;
		}
		box.removeEventListener('click', game.handler, false);
		game.checkWin();
	},

	checkWin: function() {
			if (game.boxes[0] === game.boxes[1] === game.boxes[2]) {
				console.log('win');
			}

	}

};

game.render();

// possible win combos:
// 0 1 2
// 3 4 5
// 6 7 8

// 0 3 6
// 1 4 7
// 2 5 8

// 0 4 8
// 2 4 8 