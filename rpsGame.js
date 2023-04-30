const maxRounds = 5;
let currentRound = 1;
let playerWinCount = 0;
let computerWinCount = 0;
let drawCount = 0;

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

const slectionButtons = document.querySelectorAll('.playerSelection');
slectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', (e) => {
        if(currentRound>maxRounds){
            currentRound=1;
            resetGame();
        }
        playRound(e.target.textContent, getComputerChoice());
    });
});


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
    // round complete, update results totals as appropriate
    processResults(playerWinStatus);

    currentRound++;
    return playerWinStatus;

}

function processResults(result){
    // add otucome to results counters
    if (result==="Win") { playerWinCount++ }
    if (result==="Lose") { computerWinCount++ }
    if (result==="Draw" ) { drawCount++ }

    updateResults(`Results: ${playerWinCount} wins, ${computerWinCount} losses, ${drawCount} draws.`);

    if (currentRound == maxRounds){
        const endingTextDiv = document.querySelector('.endStatement');
        endingTextDiv.textContent = gameEndStatement();
    }
}

function resetGame() {
    const endingTextDiv = document.querySelector('.endStatement');
    endingTextDiv.textContent = "";
    playerWinCount = 0;
    computerWinCount = 0;
    drawCount = 0;
    updateResults(`Results: ${playerWinCount} wins, ${computerWinCount} losses, ${drawCount} draws.`);

}

function gameEndStatement(){
    if (playerWinCount === computerWinCount){
        return "You drew with the computer."
    } else if (playerWinCount > computerWinCount){
        return "Yay! You won!"
    } else {
        return "Oh no! You lost."
    }
}

function validatePlayerSelection(playerChoice){
    // If the player didn't enter any text or clicked cancel then the choice will be null.
    if (playerChoice == null){ return false}

    // The player may have used any case when typing their selection.
    let playerChoiceUpper = playerChoice.toUpperCase();
    // the only allowable options are rock, paper and scissors.
    if(playerChoiceUpper == "ROCK" || playerChoiceUpper == "PAPER" || playerChoiceUpper == "SCISSORS") {
        return true;
    } else { return false }

}

function updateResults(text) {
    const resultsDiv = document.querySelector('.results');
    resultsDiv.textContent = text;
}