function getComputerChoice() {
    let numberValue = Math.floor(Math.random()*3)
    switch(numberValue) {
        case 0:
        return "rock";
        case 1:
        return "paper";
        case 2:
        return "scissors";
    }
}

console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())