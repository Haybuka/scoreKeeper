let p1button = document.querySelector('#p1button');
let p2button = document.getElementById('p2button');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.getElementById('p2Display');
let resetButton = document.getElementById('reset');
let numInput = document.querySelector('input');
let winningScoreDisplay = document.querySelector('p span');
let vals = document.getElementById('intro');
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;
vals.style.fontSize = '2rem';
vals.style.fontWeight = 'bold';

p1button.addEventListener('click', function() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add('winner');
			gameOver = true;
		}
	}

	p1Display.textContent = p1Score;
});

p2button.addEventListener('click', function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add('winner');
			gameOver = true;
		}
	}
	p2Display.textContent = p2Score;
});

resetButton.addEventListener('click', function() {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove('winner');
	p2Display.classList.remove('winner');
	gameOver = false;
}
numInput.addEventListener('change', function() {
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
