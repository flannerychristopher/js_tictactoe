(function() {
	let containerElement = document.getElementById('container');

	for (i = 0; i < 9; i++) {
		let box = document.createElement('div');
		box.id = `box${i}`;
		box.className = 'box';
		containerElement.appendChild(box);
	}
})();