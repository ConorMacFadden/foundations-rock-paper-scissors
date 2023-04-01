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
    let computerSelectionUpperCase = computerSelection.toUpperCase();

    let playerWinStatus = "Draw";

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

    console.log(playerWinStatus);
    return playerWinStatus;

}

function game() {
    const maxRounds = 5;
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

    for (let currentRound = 1; currentRound <= maxRounds; currentRound++){
        //get the selection form the player
        let playerChoice = prompt(`Round ${currentRound} of ${maxRounds}. Make a choice: Rock, Paper or Scissors?`);

        // check that they have typed a valid option
        if (validatePlayerSelection(playerChoice)){
            // play the round
            let result = playRound(playerChoice, getComputerChoice());
            // add otucome to results counters
            if (result==="Win") { playerWins++ }
            if (result==="Lose") { computerWins++ }
            if (result==="Draw" ) { draws++ }
        } else {
            alert(`You entered ${playerChoice}. That's not a valid option, the choices are: Rock, Paper or Scissors.`)
            // There was not a valid selection so this round doesn't count. Decrement round count so this round isn't included in the total.
            currentRound--;
        }
        
    }

    console.log(`Results: ${playerWins} wins, ${computerWins} losses, ${draws} draws.`);

    if (playerWins === computerWins){
        return "You drew with the computer."
    } else if (playerWins > computerWins){
        return "Yay! You won!"
    } else {
        return "Oh no! You lost."
    }
}

function validatePlayerSelection(playerChoice){
    if (playerChoice == null){ return false}

    let playerChoiceUpper = playerChoice.toUpperCase();
    if(playerChoiceUpper == "ROCK" || playerChoiceUpper == "PAPER" || playerChoiceUpper == "SCISSORS") {
        return true;
    } else { return false }

}