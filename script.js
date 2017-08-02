var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var resetButton = document.getElementById('reset');
var p1Span = document.querySelector("#p1Span");
var p2Span = document.querySelector('#p2Span');
var numInput = document.querySelector("input");
var scoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener('click', function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Span.classList.add("winner");
            gameOver = true;
        }
        p1Span.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Span.classList.add("winner");
            gameOver = true;
        }
        p2Span.textContent = p2Score;
    }
});

resetButton.addEventListener('click', function () {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Span.textContent = p1Score;
    p2Span.textContent = p2Score;
    p1Span.classList.remove("winner");
    p2Span.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener('change', function () {
    scoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});
