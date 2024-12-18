function getComputerChoice(){
    let result = Math.random()
    if(result===0){
        console.log("Rock!")
    }
    else if(result===1){
        console.log("Paper!")
    }
    else{
        console.log("Scissors!")
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter: rock, paper, or scissors").toLowerCase();
    }
    return choice;
}

console.log(getComputerChoice())
console.log(getHumanChoice())