
// max = 3
// min is 1

let max = 3;
let min = 1;
let selection = Math.random() * (((max - min) + 1) + min) ;




function getComputerChoice(){
    if(selection == 1){
        return "Rock";
    } else if (selection == 2){
        return "Paper";
    } else if(selection == 3){
        return "Scissors";
    }
}

console.log(getComputerChoice());