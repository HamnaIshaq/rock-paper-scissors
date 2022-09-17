const playerChoice = document.querySelectorAll('.btn-player-choice');
const winScore = document.querySelector('.win-score');
const loseScore = document.querySelector('.lose-score');

let wins;
let loses;

// get computer choice
function getComputerChoice() {
  // random number generated between 0 to 3
  const computerChoice = Math.floor(Math.random() * 3);

  // check number returned and return value corresponding to number
  switch (computerChoice) {
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

  const playerChoice = playerSelection.toLowerCase();

  const computerChoice = computerSelection.toLowerCase();

  let winningScore = parseInt(winScore.textContent);
  let losingScore = parseInt(loseScore.textContent);

  if (playerChoice === computerChoice) {
    return 'Both choose ' + playerChoice + '. It is a draw'
  }
  else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    winningScore++;
    winScore.textContent = winningScore;
    return 'You Win! Rock beats Scissors'
  }
  else if (playerChoice === 'rock' && computerChoice === 'paper') {
    losingScore++;
    loseScore.textContent = losingScore;
    return 'You Lose! Paper beats Rock'
  }
  else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    losingScore++;
    loseScore.textContent = losingScore;
    return 'You Lose! Scissors beat Paper'
  }
  else if (playerChoice === 'paper' && computerChoice === 'rock') {
    winningScore++;
    winScore.textContent = winningScore;
    return 'You Win! Paper beats Rock'
  }
  else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    losingScore++;
    loseScore.textContent = losingScore;
    return 'You Lose! Rock beats Scissors'
  }
  else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    winningScore++;
    winScore.textContent = winningScore;
    return 'You Win! Scissors beat Paper'
  }
}

let totalRounds = 0;

// get clicked choice from rock, paper, scissors and show match result
playerChoice.forEach(choice => {
  choice.addEventListener('click', (e) => {
    const clickedChoice = e.currentTarget.getAttribute('data-choice');

    const result = playRound(clickedChoice, getComputerChoice());

    const matchResult = document.querySelector('.match-result');

    matchResult.textContent = result;

    totalRounds++;

    // show the winner of 5 rounds
    if(totalRounds === 5) {
      wins = parseInt(winScore.textContent);
      loses = parseInt(loseScore.textContent);

      if(wins > loses) {
        matchResult.textContent = 'You won more rounds than computer!';
      }

      if(loses > wins) {
        matchResult.textContent = 'You lost more rounds from computer!';
      }

      else if(wins === loses) {
        matchResult.textContent = 'You and computer drew all matches!';
      }

      winScore.textContent = 0;
      loseScore.textContent = 0;

      totalRounds = 0;
    }

  })
})