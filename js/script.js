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
			this.boxes.push(i);
			box.id = `box${i}`;
			box.className = 'box';
			box.addEventListener('click', this.handler, false);
			containerElement.appendChild(box);
		}
	},

	handler: function(event) {
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

	reset: function() {
		containerElement.innerHTML = '';
		this.boxes = [];
		this.render();
		this.turnCount = 0;
	},

	win: function() {
		this.reset();
		if (this.playerTurn === 1) {
			messageElement.textContent = "Player 2 wins! It's a new game and it's Player 1's turn.";
		} else {
			messageElement.textContent = "Player 1 wins! It's a new game and it's Player 2's turn.";
		}
	},

	draw: function() {
		this.reset();
		if (this.playerTurn === 1) {
			messageElement.textContent = "The game was a draw. It's a new game and it's Player 1's turn.";
		} else {
			messageElement.textContent = "The game was a draw. It's a new game and it's Player 2's turn.";
		}
	},

	checkWin: function() {
		let box = this.boxes;
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
		}
	}

};

game.render();