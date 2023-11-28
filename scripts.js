// Counter for score
let playerScore = 0;
let computerScore = 0;

//Plays five rounds and declares winner
function game() {
  for (let round = 1; round < 6; round++) {
    console.log ("Round: " + round)
    playRound()
    if (round === 5 && playerScore > computerScore) {
        return "Congrats on beating your opponent!"
    } else if (round === 5 && playerScore < computerScore) {
        return "You've lost but don't give up! Try again!"
    } else if (round === 5 && playerScore === computerScore) {
        return "A tie? Don't let it end like this."
    }
  }
}
console.log (game())

// Plays one round of Rock, Paper, Scissors
function playRound() {
  const playerSelection = prompt ("Rock, Paper, or Scissors?");
  const computerSelection = getComputerChoice();
  let result = "";

  if (playerSelection.toLowerCase() === computerSelection) {
      result = "it's a tie! You chose " + playerSelection + " and your opponent chose " + computerSelection +
             "\nPlayer Score: " + playerScore +
             "\nOpponent Score: " + computerScore
  } else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "scissors" && computerSelection === "paper" || 
             playerSelection === "paper" && computerSelection === "rock") {
      playerScore++
      result = "You win! " + playerSelection + " beats " + computerSelection +
             "\nPlayer Score: " + playerScore +
             "\nOpponent Score: " + computerScore;
  } else {
      computerScore++
      result = "You lose! " + computerSelection + " beats " + playerSelection +
             "\nPlayer Score: " + playerScore +
             "\nOpponent Score: " + computerScore;
  } 
  console.log ("Player: " + playerSelection);
  console.log ("Opponent: " + computerSelection);
  console.log (result);
}

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
