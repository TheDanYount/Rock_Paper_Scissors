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
    let choiceVerified = false;
    while(!choiceVerified) {
        let input = prompt("Choose Rock, Paper, or Scissors.");
        if(typeof(input) == "string") {
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
    }
}

function playRound() {
    let computerSelection = getComputerChoice(),
        playerSelection = getPlayerChoice();
    if(((playerSelection == "Rock") && (computerSelection == "Scissors")) ||
    ((playerSelection == "Paper") && (computerSelection == "Rock")) ||
    ((playerSelection == "Scissors") && (computerSelection == "Paper"))) {
        let message = "win";
        return message;
    }
    else if(((computerSelection == "Rock") && (playerSelection == "Scissors")) ||
    ((computerSelection == "Paper") && (playerSelection == "Rock")) ||
    ((computerSelection == "Scissors") && (playerSelection == "Paper"))) {
        let message = "loss";
        return message;
    }
    else {
        let message = "tie";
        return message;
    }
}

function playGame() {
    let wins = 0,
        losses = 0,
        ties = 0;
    for(i = 0; i < 5; i++) {
        let result = playRound();
        switch(result) {
            case "win":
                wins++;
                break;
            case "loss":
                losses++;
                break;
            case "tie":
                ties++;
                break;
        }
    }
    if(wins > losses) {
        return `Player won ${wins} to ${losses} (with ${ties} tie(s))!`;
    }
    else if (wins < losses) {
        return `Player lost ${wins} to ${losses} (with ${ties} tie(s))!`;
    }
    else {
        return `Player tied ${wins} to ${losses} (with ${ties} tie(s))!`;
    }
}

console.log(playGame())