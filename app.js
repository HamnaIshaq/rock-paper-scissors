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

// game function
function game() {
  // play a game of 5 rounds
  for (let i = 0; i < 5; i++) {
    // get computer choice
    const computerSelection = getComputerChoice();

    // get player choice
    const playerSelection = window.prompt('Enter your choice from the following: (1) Rock (2) Paper (3) Scissors');
    
    // cancel button in prompt is pressed
    if(playerSelection === null) {
      return;
    }
    // if an invalid choice is entered, user can enter their choice again
    else if(playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors') {
      console.log('you entered an invalid move! Please enter again');
      // for 2nd round and above, subtract from the game to get 5 valid games
      if(i !== 0) {
        i--;
      }
    }
    // print result of valid round on console
    else {
      console.log(playRound(playerSelection, computerSelection))
    }
  }
}

// start rock, paper, scissors game
game();