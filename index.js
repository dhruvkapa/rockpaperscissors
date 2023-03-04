
// max = 3
// min is 1

let max = 3;
let min = 1;
let selection = Math.floor((Math.random() * (((max - min) + 1)) + min)) ;
console.log(selection);



function getComputerChoice(){
    if(selection == 1){
        return "Rock";
    } else if (selection == 2){
        return "Paper";
    } else if(selection == 3){
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock"){
        if(computerSelection.toLowerCase() == "rock"){
            console.log("Tie!");
        } else if (computerSelection.toLowerCase() == "paper"){
            console.log("Computer wins!");
        } else if (computerSelection.toLowerCase() == "scissors"){
            console.log("Player wins!");
        }
    } else if (playerSelection.toLowerCase() == "paper"){
        if(computerSelection.toLowerCase() == "rock"){
            console.log("Player Wins!");
        } else if (computerSelection.toLowerCase() == "paper"){
            console.log("Tie!");
        } else if (computerSelection.toLowerCase() == "scissors"){
            console.log("Computer wins!");
        }
    } else if(playerSelection.toLowerCase() == "scissors"){
        if(computerSelection.toLowerCase() == "rock"){
            console.log("Computer Wins!");
        } else if (computerSelection.toLowerCase() == "paper"){
            console.log("Player wins!");
        } else if (computerSelection.toLowerCase() == "scissors"){
            console.log("Tie!");
        }
    }
}


const playerSelection = "Rock";

const computerSelection = getComputerChoice();

console.log("Player picks: " + playerSelection);
console.log("Computer picks: " + computerSelection);

console.log(playRound(playerSelection, computerSelection));