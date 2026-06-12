// let userInput = prompt("Rock, Paper or Scissors?");

let humanChoice = "rock";
let computerChoice;

function getComputerChoice() {
  let randomNum = Math.random();
  if (randomNum <= 0.33) {
    computerChoice = "rock";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
}
getComputerChoice();
