console.log('connected to HTML')

// get computer choice
function getComputerChoice() {
  // random number generated between 0 to 3
  const computerChoice = Math.floor(Math.random() * 3);
  
  // check number returned and return value corresponding to number
  switch(computerChoice) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
}

// play round of rock, paper, scissors between player and computer
function playRound(playerSelection, computerSelection) {
  // 
  const playerChoice = playerSelection.toLowerCase();
  
  const computerChoice = computerSelection.toLowerCase();
  
  if(playerChoice === computerChoice) {
    return 'Both choose '+ playerChoice + '. It is a draw'
  }
  else if(playerChoice === 'rock' && computerChoice === 'scissors') {
    return 'You Win! Rock beats Scissors'  
  }
  else if(playerChoice === 'rock' && computerChoice === 'paper') {
    return 'You Lose! Paper beats Rock'  
  }
  else if(playerChoice === 'paper' && computerChoice === 'scissors') {
    return 'You Lose! Scissors beat Paper'  
  }
  else if(playerChoice === 'paper' && computerChoice === 'rock') {
    return 'You Win! Paper beats Rock'  
  }
  else if(playerChoice === 'scissors' && computerChoice === 'rock') {
    return 'You Lose! Rock beats Scissors'  
  }
  else if(playerChoice === 'scissors' && computerChoice === 'paper') {
    return 'You Win! Scissors beat Paper'  
  }
}

// get player choice (hard coded value for testing)
const playerSelection = 'scissors';

// get computer choice
const computerSelection = getComputerChoice();

// play rock, paper, scissors round
console.log(playRound(playerSelection, computerSelection))