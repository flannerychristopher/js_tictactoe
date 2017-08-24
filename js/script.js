const containerElement = document.getElementById('container');
const messageElement = document.getElementById('message');

const game = {
	playerTurn: 1,
	turnCount: 0,
	boxes: [],

	render: function() {
		messageElement.textContent = "Player 1's turn!";
		for (i = 0; i < 9; i++) {
			let box = document.createElement('div');
			box.textContent = ' ';
			game.boxes.push(i);
			box.id = `box${i}`;
			box.className = 'box';
			box.addEventListener('click', game.handler, false);
			containerElement.appendChild(box);
		}
	},

	reset: function() {
		containerElement.innerHTML = '';
		game.boxes = [];
		this.render();
		game.turnCount = 0;
	},

	win: function() {
		game.reset();
		if (game.playerTurn === 1) {
			messageElement.textContent = "Player 2 wins! It's a new game and it's Player 1's turn.";
		} else {
			messageElement.textContent = "Player 1 wins! It's a new game and it's Player 2's turn.";
		}
	},

	draw: function() {
		game.reset();
		if (game.playerTurn === 1) {
			messageElement.textContent = "The game was a draw. It's a new game and it's Player 1's turn.";
		} else {
			messageElement.textContent = "The game was a draw. It's a new game and it's Player 2's turn.";
		}
	},

	handler: function() {
		let box = event.target;
		let boxNumber = event.target.id[3];
		if (game.playerTurn === 1) {
			box.textContent = 'X';
			game.boxes[boxNumber] = true;
			game.playerTurn = 2;
			game.turnCount++;
			messageElement.textContent = "Player 2's turn!";
		} else {
			box.textContent = 'O';
			game.boxes[boxNumber] = false;
			game.playerTurn = 1;
			game.turnCount++;
			messageElement.textContent = "Player 1's turn!";
		}
		box.removeEventListener('click', game.handler, false);

		if (game.checkWin()) {
			game.win();
		} else if (game.turnCount === 9) {
			game.draw();
		}
	},

	checkWin: function() {
		let box = game.boxes;
		switch(true) {
			case box[0] === box[1] && box[0] === box[2]:
				console.log('winA');
				return true;
			case box[3] === box[4] && box[3] === box[5]:
				console.log('winB');
				return true;
			case box[6] === box[7] && box[6] === box[8]:
				console.log('winC');
				return true;
			case box[0] === box[3] && box[0] === box[6]:
				console.log('winD');
				return true;
			case box[1] === box[4] && box[1] === box[7]:
				console.log('winE');
				return true;
			case box[2] === box[5] && box[2] === box[8]:
				console.log('winF');
				return true;
			case box[0] === box[4] && box[0] === box[8]:
				console.log('winG');
				return true;
			case box[2] === box[4] && box[2] === box[6]:
				console.log('winH');
				return true;
			default:
				return false;
				console.log('play on');
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
// 2 4 6