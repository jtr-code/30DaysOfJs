const prompt = require("prompt-sync")();

let scores = 0;

let playAgain = true;

while (scores != 10 && playAgain) {

    let ansFromUser = prompt("Choose Your Option Snake[s],Water[w],Gun[g]: ");

    let snakeWaterGun = ["s", "w", "g"];

    let ansFromComputer = snakeWaterGun[Math.floor(Math.random() * snakeWaterGun.length)];

    if (ansFromUser == "s" && ansFromComputer == "w") {
        alert("You won");

    } else if (ansFromUser == "w" && ansFromComputer == "s") {
        alert("Computer won");

    } else if (ansFromUser == "w" && ansFromComputer == "g") {
        alert("You won");

    } else if (ansFromUser == "g" && ansFromComputer == "w") {
        alert("Computer won");

    } else if (ansFromUser == "g" && ansFromComputer == "s") {
        alert("You won");

    } else if (ansFromUser == "s" && ansFromComputer == "g") {
        alert("Computer won");
    }
    if (scores === 10) {
        alert("Your chances are over");
    }

    if (ansFromUser == "w" && ansFromComputer == "w" || ansFromUser == "S" && ansFromComputer == "S" || ansFromUser == "g" && ansFromComputer == "g") {
        alert("Same Value,Try Again");
    }
    playAgain = confirm("Do you want to play once More? ");
    scores += 1;
    console.log("Computer: " + ansFromComputer);
    console.log("User: " + ansFromUser);
}

console.log(`Your score is ${10 - scores}`);

