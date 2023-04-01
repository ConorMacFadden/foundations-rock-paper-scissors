function getComputerChoice(){
    let computerChoiceNumeric = Math.floor(Math.random()*3);

    switch(computerChoiceNumeric) {
        case 0:
            return "Rock";
            
        case 1:
            return "Paper";

        case 2:
            return "Scissors"
    }
}

function playRound(playerSelection, computerSelection){
    let outcomeMessage = "";
    let computerSelectionUpperCase = computerSelection.toUpperCase();

    let playerWinStatus = "draw";

    switch(playerSelection.toUpperCase()){
        case "ROCK":
            if (computerSelectionUpperCase ==="PAPER"){ 
                playerWinStatus = "Lose";
            } else if (computerSelectionUpperCase ==="SCISSORS") {
                playerWinStatus = "Win";
            }
            break;

        case "PAPER":
            if (computerSelectionUpperCase ==="SCISSORS"){ 
                playerWinStatus = "Lose";
            } else if (computerSelectionUpperCase ==="ROCK") {
                playerWinStatus = "Win";
            }
            break;

        case "SCISSORS":
            if (computerSelectionUpperCase ==="ROCK"){ 
                playerWinStatus = "Lose";
            } else if (computerSelectionUpperCase ==="PAPER") {
                playerWinStatus = "Win";
            }
            break;
    }

    return playerWinStatus;

}