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
			game.boxes.push(i);
			box.id = `box${i}`;
			box.className = 'box';
			box.addEventListener('click', game.handler, false);
			containerElement.appendChild(box);
		}
	},

	reset: function() {
		containerElement.innerHTML = '';
		this.render();
		if (game.isEven(game.turn)) {
			messageElement.textContent = "Player 2 wins! It's a new game and it's Player 1's turn.";
		} else {
			messageElement.textContent = "Player 1 wins! It's a new game and it's Player 2's turn.";
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
		// game.checkWin();
		game.checkWin() ? game.reset() : console.log('no win');
	},

	checkWin: function() {
		let box = game.boxes;
		switch(true) {
			case box[0] === box[1] && box[0] === box[2]:
				console.log('winA');
				return true;
				break;
			case box[3] === box[4] && box[3] === box[5]:
				console.log('winB');
				return true;
				break;
			case box[6] === box[7] && box[6] === box[8]:
				console.log('winC');
				return true;
				break;
			case box[0] === box[3] && box[0] === box[6]:
				console.log('winD');
				return true;
				break;
			case box[1] === box[4] && box[1] === box[7]:
				console.log('winE');
				return true;
				break;
			case box[2] === box[5] && box[2] === box[8]:
				console.log('winF');
				return true;
				break;
			case box[0] === box[4] && box[0] === box[8]:
				console.log('winG');
				return true;
				break;
			case box[2] === box[4] && box[2] === box[6]:
				console.log('winH');
				return true;
				break;
			default:
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