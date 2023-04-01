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