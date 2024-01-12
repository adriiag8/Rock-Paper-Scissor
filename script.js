const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];


    let result = "";

    if (playerChoice === computerChoice) {
        result = "WOW, You Tie!";
    }
    else {
        switch (playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "You Win!" : "You Lose!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "You Win!" : "You Lose!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = `Result: ${result}`;

    switch (result) {
        case "You Win!":
            playerScore++;
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
            break;
        case "You Lose!":
            computerScore++;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
            break;
    }

}

