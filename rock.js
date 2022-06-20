function computerPlay() {
    pcroll = Math.floor(Math.random() * 3);
    let choice = "";

    if (pcroll == 0) {
        choice = "ROCK";
    }
    else if (pcroll == 1) {
        choice = "PAPER";
    }
    else {
        choice = "SCISSORS";
    }

    return choice;
}


function playRound(_playerselection, _computerselection) {

    console.log(_playerselection + "" + _computerselection)

    if (_playerselection == _computerselection) {
        console.log("draw");
        return 2;
    }
    else if (_playerselection == "ROCK" && _computerselection == "SCISSORS") {
        console.log("Rock beats Scissors, player wins");
        return 1;
    }
    else if (_playerselection == "ROCK" && _computerselection == "PAPER") {
        console.log("Paper beats Rock, computer wins");
        return 0;
    }
    else if (_playerselection == "PAPER" && _computerselection == "SCISSORS") {
        console.log("Scissors beats Papers, computer wins");
        return 0;
    }
    else if (_playerselection == "PAPER" && _computerselection == "ROCK") {
        console.log("Paper beats Rock, player wins");
        return 1;
    }
    else if (_playerselection == "SCISSORS" && _computerselection == "ROCK") {
        console.log("Rock beats Scissors, computer wins");
        return 0;
    }
    else if (_playerselection == "SCISSORS" && _computerselection == "PAPER") {
        console.log("Scissors beats Paper, player wins");
        return 1;
    }

    /*else {
        console.log("what the fuck did you do?")
    }*/
}


function game() {
    playerScore = 0;
    pcScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock, Paper or Scissors. Make your choice: ");
        let capitalChoice = playerChoice.toUpperCase();

        let result = playRound(capitalChoice, computerPlay());
        if (result == 1) {
            playerScore++;
        }
        else if (result == 0) {
            pcScore++;
        }

        console.log("Player Score: " + playerScore + " PC Score: " + pcScore)

    }
}

game();
