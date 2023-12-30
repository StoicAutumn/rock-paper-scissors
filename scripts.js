// Counter for score
let playerScore = 0;
let computerScore = 0;
let round = 0;


function declareWinner() {
  const winnerDisplay = document.querySelector('#winner');
  const finalRoundDisplay = document.querySelector('#round-count');
  if (playerScore > computerScore) {
    winnerDisplay.textContent = "You won! Congrats on beating your opponent!";
    finalRoundDisplay.textContent = 5;
    disableBtn();
  } else if (playerScore < computerScore) {
    winnerDisplay.textContent = "You've lost but don't give up! Try again!";
    finalRoundDisplay.textContent = 5;
    disableBtn();
  } else if (playerScore === computerScore) {
    winnerDisplay.textContent = "A tie? Don't let it end like this.";
    finalRoundDisplay.textContent = 5;
    disableBtn();
  }
};

// Generate player's choice and kicks off one game
const buttons = document.querySelectorAll(".choiceButtons");
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let buttonText = button.textContent;
    playRound(buttonText);
  })
});

 // Plays one round of Rock, Paper, Scissors
 function playRound(playerSelection) {
  round++;
  
  const computerSelection = getComputerChoice();
  let result = "";

  if (playerSelection.toLowerCase() === computerSelection) {
      result = "it's a tie! You chose " + playerSelection + " and your opponent chose " + computerSelection
  } else if (playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "paper" || 
            playerSelection === "paper" && computerSelection === "rock") {
      playerScore++
      const displayPlayerScore = document.querySelector('#player-score');
      displayPlayerScore.textContent = playerScore;
  result = "You win! " + playerSelection + " beats " + computerSelection
  } else {
      computerScore++
      const displayComputerScore = document.querySelector('#computer-score');
      displayComputerScore.textContent = computerScore;
      result = "You lose! " + computerSelection + " beats " + playerSelection
  }
  const roundDisplay = document.querySelector('#round-count')
  roundDisplay.textContent = round + 1;
  const playerChoice = document.querySelector('#player-choice');
  playerChoice.textContent = playerSelection;
  const computerChoice = document.querySelector('#computer-choice');
  computerChoice.textContent = computerSelection;
  const gameResult = document.querySelector('#game-result');
  gameResult.textContent = result;
  if (round === 5) {
    declareWinner()
  }
};

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
};

function disableBtn() {
  document.querySelector('#rock').disabled = true;
  document.querySelector('#paper').disabled = true;
  document.querySelector('#scissors').disabled = true;
};