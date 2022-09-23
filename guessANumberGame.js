const { read } = require("fs");

function guessANumber() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let computerNumber = Math.floor(Math.random() * 100);
    let userInput;
    let userTries = 10;

    let recursiveAsyncReadLine = function () {
        readline.question(`Guess a number between 0 and 100. You have ${userTries} tries to guess: `, (input) => {
            userInput = Number(input);
            userTries--

            if (userTries === 0) {
                console.log(`Sorry! You have lost. The number is ${computerNumber}!`);
                return readline.close();
            }

            if (userInput >= 0 && userInput <= 100) {
                if (userInput === computerNumber) {
                    console.log(`Congratulations! You have won. The number is ${computerNumber}!`);
                    return readline.close();
                } else if (userInput < computerNumber) {
                    console.log("Try higher number!");
                    recursiveAsyncReadLine();
                } else if (userInput > computerNumber) {
                    console.log("Try lower number!");
                    recursiveAsyncReadLine();
                }
            } else {
                console.log("Invalid input! Please enter a number between 0 and 100");
                recursiveAsyncReadLine();
            }
        });
    };
    recursiveAsyncReadLine() 
}
guessANumber()
