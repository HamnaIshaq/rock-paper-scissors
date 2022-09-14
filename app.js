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