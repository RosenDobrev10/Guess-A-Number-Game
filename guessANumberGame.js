const { read } = require("fs");

function guessANumber() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;

    let recursiveAsyncReadLine = function () {
        readline.question("Guess the number (0-100): ", (number) => {
            guess = Number(number);

            if (guess >= 0 && guess <= 100) {
                if (guess === computerGuess) {
                    console.log("You guess it!");
                    return readline.close();
                } else if (guess < computerGuess) {
                    console.log("Too Low!");
                    recursiveAsyncReadLine();
                } else if (guess > computerGuess) {
                    console.log("Too High!");
                    recursiveAsyncReadLine();
                }
            } else {
                console.log("Invalid input! Try again...");
                recursiveAsyncReadLine();
            }
        });
    };
    recursiveAsyncReadLine()
}
guessANumber()
