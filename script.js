let computerScore = 0;
let humanScore = 0;

function getHumanChoice() {
  let userInput = prompt("Rock, Paper or Scissors?");
  if (userInput !== null) {
    return userInput.toLowerCase();
  }
}

function getComputerChoice() {
  let randomNum = Math.random();
  if (randomNum <= 0.33) {
    return "rock";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
getComputerChoice();

function playRound(humanChoice, computerChoice) {
  const roundPicks = document.querySelector(".round");
  const roundWinner = document.querySelector(".roundWinner");

  roundPicks.textContent = `Human: ${humanChoice}, Comp: ${computerChoice}`;

  if (humanChoice === computerChoice) {
    roundWinner.textContent = "It's a tie";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    roundWinner.textContent = "Computer wins";
    ++computerScore;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    roundWinner.textContent = "Human wins";
    ++humanScore;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    roundWinner.textContent = "Human wins";
    ++humanScore;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    roundWinner.textContent = "Computer wins";
    ++computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    roundWinner.textContent = "Computer wins";
    ++computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    roundWinner.textContent = "Human wins";
    ++humanScore;
  } else {
    alert("Please reload page and pick 'rock', 'paper', or 'scissors'");
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    playRound(button.id, getComputerChoice());
  });
});
// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     playRound(getHumanChoice(), getComputerChoice());
//   }
//   console.log(`Human: ${humanScore}, Comp: ${computerScore}`);
//   if (humanScore > computerScore) {
//     console.log("Human Wins the Whole Game");
//   } else if (computerScore > humanScore) {
//     console.log("Computer Wins the Whole Game");
//   } else {
//     console.log("Game ends in a tie.");
//   }
// }
// playGame();
