// Generate player's choice
let playerSelection = prompt ("Rock, Paper, or Scissors?");
console.log("Player: " + playerSelection);

// Generate computer's choice
function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber * 100 <= 33) {
    return "rock";
  } else if (randomNumber * 100 <= 66) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log("Opponent: " + getComputerChoice());

/*
getComputerChoice keeps re-runnning each time it comes up in playRound function. See js: 16 and js: 23
Need to stop this function from rerunning over and over
*/
const computerSelection = getComputerChoice;
console.log (computerSelection())

// Compare player and computer choice
/*
function playRound() {
  const playerSelection = "rock";
  const computerSelection = getComputerChoice;
  if (playerSelection.toLowerCase() === computerSelection()) {
    return "it's a tie";
  } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection() === "scissors")) {
    return "You win! Rock beats Paper";
  } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection() === "paper")) {
    return "You win! Scissors beats Paper";
  } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection() === "rock")) {
    return "You win! Paper beats Rock";
  } else {
    return "You lose!";
  } 
}
console.log(playRound());
*/
