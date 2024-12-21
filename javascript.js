function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
        
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            alert("Invalid choice! Please enter rock, paper, or scissors.");
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }

        console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
    }

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("It's a tie overall!");
    }
}

playGame();
