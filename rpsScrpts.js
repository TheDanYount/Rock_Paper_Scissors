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