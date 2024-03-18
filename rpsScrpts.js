function getComputerChoice() {
    let numberValue = Math.floor(Math.random()*3)
    switch(numberValue) {
        case 0:
        return "Rock";
        case 1:
        return "Paper";
        case 2:
        return "Scissors";
    }
}

function getPlayerChoice() {
    let choiceVerified = false,
    while(!choiceVerifeid) {
        let input = prompt("Choose Rock, Paper, or Scissors.");
        if(typeof(input) == "string") {
            console.log("Success!");
            switch(input.toLowerCase()) {
                case "rock":
                    choiceVerified = true;
                    return "Rock";
                case "paper":
                    choiceVerified = true;
                    return "Paper";
                case "scissors":
                    choiceVerified = true;
                    return "Scissors";
            }
        }
        else {
            console.log("Failure!");
        }
    }
}

function playRound() {
    let computerSelection = getComputerChoice(),
        playerSelection = getPlayerChoice();
    if(((playerSelection == "Rock") && (computerSelection == "Scissors")) ||
    ((playerSelection == "Paper") && (computerSelection == "Rock")) ||
    ((playerSelection == "Scissors") && (computerSelection == "Paper"))) {
        let message = `You win! ${playerSelection} beats ${computerSelection}`;
        return message;
    }
    else if(((computerSelection == "Rock") && (playerSelection == "Scissors")) ||
    ((computerSelection == "Paper") && (playerSelection == "Rock")) ||
    ((computerSelection == "Scissors") && (playerSelection == "Paper"))) {
        let message = `You lose! ${playerSelection} loses to ${computerSelection}`;
        return message;
    }
    else {
        let message = `You tied. ${playerSelection} ties ${computerSelection}`;
        return message;
    }
}

console.log(playRound())
