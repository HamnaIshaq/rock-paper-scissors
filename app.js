console.log('connected to HTML')

// get computer choice
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  switch(computerChoice) {
    case 0:
      return 'Computer Chooses: Rock'
    case 1:
      return 'Computer Chooses: Paper'
    case 2:
      return 'Computer Chooses: Scissors'
  }
}