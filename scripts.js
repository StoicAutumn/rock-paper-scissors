// Generate player's choice
const getPlayerChoice = prompt ("Rock, Paper, or Scissors?");


// Generate computer's choice
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber * 100 <= 33) {
    return "rock";
  } else if (randomNumber * 100 <= 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Plays one round of Rock, Paper, Scissors
function playRound() {
  const playerSelection = getPlayerChoice;
  const computerSelection = getComputerChoice();
  console.log ("Player: " + playerSelection);
  console.log ("Opponent: " + computerSelection);

  if (playerSelection.toLowerCase() === computerSelection) {
    return "it's a tie! You chose " + playerSelection + " and your opponent chose " + computerSelection;
  } else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "scissors" && computerSelection === "paper" || 
             playerSelection === "paper" && computerSelection === "rock") {
      return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  } 
}
console.log (playRound());

