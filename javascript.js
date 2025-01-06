// Global score variables
let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

// Function to get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    const resultDiv = document.querySelector("#current-round-result");
    const scoreDiv = document.querySelector("#score");
    const winnerDiv = document.querySelector("#game-winner");

    humanChoice = humanChoice.toLowerCase();

    let resultMessage = "";
    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    // Update DOM with results
    resultDiv.innerText = resultMessage;
    scoreDiv.innerText = `Human: ${humanScore}, Computer: ${computerScore}`;

    // Check for a winner
    if (humanScore === winningScore || computerScore === winningScore) {
        const finalWinner =
            humanScore === winningScore ? "You are the winner!" : "The computer is the winner!";
        winnerDiv.innerText = finalWinner;

        // Disable buttons after game over
        document.querySelectorAll("button").forEach((button) => {
            button.disabled = true;
        });
    }
}

// Add event listeners to buttons
document.querySelector("#rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

document.querySelector("#paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.querySelector("#scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
