let randomNumber = Math.floor(Math.random() * 100);
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = ' Your previous guesses was: ';
    }

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right! You have won the game.';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'You lost. GAME OVER!!!';
        lastResult.style.backgroundColor = 'black';
        lowOrHigh.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            guesses.textContent += userGuess + '↑ ';
            lowOrHigh.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            guesses.textContent += userGuess + '↓ ';
            lowOrHigh.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.style.padding = '4px';
    resetButton.style.borderRadius = '6px';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resultParas = document.querySelectorAll('.resultParas p');
    for (const resultPara of resultParas) {
        resultPara.textContent = ''
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.display = 'none';
    randomNumber = Math.floor(Math.random() * 100);
}