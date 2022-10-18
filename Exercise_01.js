//Guess the number
//Write a problem to generate a number between 1-100 and store it in a variable.The program then take the inputs from the users to tell them whether the guess was correct,greater or lesser than the original number.100-(no.of guesses) is the score of the user.The program is expected to terminate once the number is guessed.Number should be between 1-100.

const PromptSync = require("prompt-sync")();

let randomNum = Math.floor(Math.random() * 100) + 1;
let chances = 0;
let valueFromUser;
console.log(randomNum);//testing
do {
    valueFromUser = PromptSync("Enter the guessed number from 1-100: ");
    valueFromUser = Number.parseInt(valueFromUser);
    chances++;
    if (valueFromUser > randomNum) {
        console.log(`Your number ${valueFromUser} is greater`);
    } else if (valueFromUser < randomNum) {
        console.log(`Your number ${valueFromUser} is lesser`);
    }
    // console.log(`Now your Score is ${100 - chances}`);
} while (randomNum != valueFromUser);

console.log(`Congrats!! You Guessed Number ${randomNum} is correct and your score is ${100 - chances}`);

