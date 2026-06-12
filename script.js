// let userInput = prompt("Rock, Paper or Scissors?");

let humanChoice = "rock";
let computerChoice;

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let randomNum = Math.random();
  if (randomNum <= 0.33) {
    computerChoice = "rock";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}
getComputerChoice();

function playRound(humanChoice, computerChoice) {
  console.log(`Human: ${humanChoice}, Comp: ${computerChoice}`);
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("Computer wins");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("Human wins");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("Human wins");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("Computer wins");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("Computer wins");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("Human wins");
  } else {
    alert("Please reload page and pick 'rock', 'paper', or 'scissors'");
  }
}
playRound(humanChoice, computerChoice);
