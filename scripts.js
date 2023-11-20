console.log("Hello world");

// Generate computer's choice
function getComputerChoice() {
  let randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber * 100 <= 33) {
    return "Rock";
  } else if (randomNumber * 100 <= 66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
console.log(getComputerChoice())