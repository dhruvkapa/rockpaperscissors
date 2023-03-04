let max = 3;
let min = 1;
let selection = Math.floor((Math.random() * (((max - min) + 1)) + min)) ;
console.log(selection);

let scorePlayer = 0;
let scoreComputer = 0;
let ties = 0;
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
            ties +=1;
            console.log("Tie!");
        } else if (computerSelection.toLowerCase() == "paper"){
            scoreComputer += 1;
            console.log("Computer wins!");
        } else if (computerSelection.toLowerCase() == "scissors"){
            scorePlayer += 1;
            console.log("Player wins!");
        }
    } else if (playerSelection.toLowerCase() == "paper"){
        if(computerSelection.toLowerCase() == "rock"){
            scorePlayer += 1;

            console.log("Player Wins!");
        } else if (computerSelection.toLowerCase() == "paper"){
            console.log("Tie!");
            ties += 1;
        } else if (computerSelection.toLowerCase() == "scissors"){
            scoreComputer += 1;

            console.log("Computer wins!");
        }
    } else if(playerSelection.toLowerCase() == "scissors"){
        if(computerSelection.toLowerCase() == "rock"){
            scoreComputer += 1;
            console.log("Computer Wins!");
        } else if (computerSelection.toLowerCase() == "paper"){
            scorePlayer += 1;

            console.log("Player wins!");
        } else if (computerSelection.toLowerCase() == "scissors"){
            ties +=1;
            console.log("Tie!");
        }
    }
}



function game(){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    console.log("Player picks: " + playerSelection);
    console.log("Computer picks: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}

let i = 0;
while(i < 5){
    game();
    i++;
}

console.log("Player Score: " + scorePlayer + " Computer Score: " + scoreComputer + " Ties: " + ties);