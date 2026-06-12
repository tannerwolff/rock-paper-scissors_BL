let computerScore = 0;
let humanScore = 0;

function getHumanChoice() {
  let userInput = prompt("Rock, Paper or Scissors?");
  return userInput.toLowerCase();
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

function playGame() {
  for (let i = 0; i < 5; i++) {
    function playRound(humanChoice, computerChoice) {
      console.log(`Human: ${humanChoice}, Comp: ${computerChoice}`);
      if (humanChoice === computerChoice) {
        console.log("It's a tie");
      } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Computer wins");
        ++computerScore;
      } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Human wins");
        ++humanScore;
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Human wins");
        ++humanScore;
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Computer wins");
        ++computerScore;
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Computer wins");
        ++computerScore;
      } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Human wins");
        ++humanScore;
      } else {
        alert("Please reload page and pick 'rock', 'paper', or 'scissors'");
      }
    }
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(`Human: ${humanScore}, Comp: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Human Wins the Whole Game");
  } else if (computerScore > humanScore) {
    console.log("Computer Wins the Whole Game");
  } else {
    console.log("Game ends in a tie.");
  }
}
playGame();
