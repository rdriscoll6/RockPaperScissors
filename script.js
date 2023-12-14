const options =['rock','scissors','paper'];


function getComputerChoice(){
  const randomOptions = options[Math.floor(Math.random() * options.length)];
  return randomOptions;
}


function DecideWinner(playerselection, computerselection){
  if (playerselection == computerselection){
    return "Tie";
  }
  else if(playerselection == 'rock'&& computerselection == 'scissors'||
  playerselection == 'scissors' && computerselection == 'paper'||
  playerselection == 'paper' && computerselection == 'rock'){
    return 'Player';
  }
  else{
    return 'Computer'
  }
}

function playRound(playerselection,computerselection){
  const results = DecideWinner(playerselection,computerselection);
  if (results == 'Tie'){
    console.log('You Tied with the computer!');
  }
  else if (results == 'Player'){
    console.log('Player won this round');
  }
  else if (results == 'Computer'){
    console.log('Computer won this round');
  }
}

const body = document.body;
const rock = document.querySelector('#Rock');
const scissors = document.querySelector('#Scissors');
const paper = document.querySelector('#Paper');
const userScore = document.querySelector('#userScore');
const computerScore = document.querySelector('#computerScore');
const userScoreNum = document.createElement('div');
const computerScoreNum = document.createElement('div');
const gameMessage = document.createElement('div');
const resetButton = document.querySelector('#Reset')

let i = 0;
let x = 0;

userScoreNum.textContent = i;
computerScoreNum.textContent = x;
userScore.appendChild(userScoreNum);
computerScore.appendChild(computerScoreNum);
gameMessage.textContent = 'First to 5 wins!'
body.appendChild(gameMessage);

rock.addEventListener('click', () => {
  let playerselection = 'rock';

  // Assuming DecideWinner returns the winner, adjust accordingly
  let winner = DecideWinner(playerselection, getComputerChoice());

  if (playerselection == getComputerChoice()) {
    gameMessage.textContent = 'You Tied with the computer!';
  } else if (
    (playerselection == 'rock' && getComputerChoice() == 'scissors') ||
    (playerselection == 'scissors' && getComputerChoice() == 'paper') ||
    (playerselection == 'paper' && getComputerChoice() == 'rock')
  ) {
    gameMessage.textContent = 'Player won this round';
    i = ++i;
  } else {
    gameMessage.textContent = 'Computer won this round';
    x = ++x;
  }

  // Update the scores after the winner is decided
  userScoreNum.textContent = i;
  computerScoreNum.textContent = x;
  userScore.appendChild(userScoreNum);
  computerScore.appendChild(computerScoreNum);
  body.appendChild(gameMessage);

  if (i ==5){
  gameMessage.textContent = "Player won in 5 games";
  i = 0;
  x = 0;
}
else if (x ==5){
  gameMessage.textContent = "Computer won in 5 games";
  i = 0;
  x = 0;
}
});


paper.addEventListener('click',(e) => {
  let playerselection = 'paper';
  // Assuming DecideWinner returns the winner, adjust accordingly
  let winner = DecideWinner(playerselection, getComputerChoice());

  if (playerselection == getComputerChoice()) {
    gameMessage.textContent = 'You Tied with the computer!';
  } else if (
    (playerselection == 'rock' && getComputerChoice() == 'scissors') ||
    (playerselection == 'scissors' && getComputerChoice() == 'paper') ||
    (playerselection == 'paper' && getComputerChoice() == 'rock')
  ) {
    gameMessage.textContent = 'Player won this round';
    i = ++i;
  } else {
    gameMessage.textContent = 'Computer won this round';
    x = ++x;
  }

  // Update the scores after the winner is decided
  userScoreNum.textContent = i;
  computerScoreNum.textContent = x;
  userScore.appendChild(userScoreNum);
  computerScore.appendChild(computerScoreNum);
  body.appendChild(gameMessage);

  if (i ==5){
    gameMessage.textContent = "Player won in 5 games";
    i = 0;
    x = 0;
  }
  else if (x ==5){
    gameMessage.textContent = "Computer won in 5 games";
    i = 0;
    x = 0;
  }
  
});
scissors.addEventListener('click',(e) => {
  let playerselection = 'scissors';
  // Assuming DecideWinner returns the winner, adjust accordingly
  let winner = DecideWinner(playerselection, getComputerChoice());

  if (playerselection == getComputerChoice()) {
    gameMessage.textContent = 'You Tied with the computer!';
  } else if (
    (playerselection == 'rock' && getComputerChoice() == 'scissors') ||
    (playerselection == 'scissors' && getComputerChoice() == 'paper') ||
    (playerselection == 'paper' && getComputerChoice() == 'rock')
  ) {
    gameMessage.textContent = 'Player won this round';
    i = ++i;
  } else {
    gameMessage.textContent = 'Computer won this round';
    x = ++x;
  }

  // Update the scores after the winner is decided
  userScoreNum.textContent = i;
  computerScoreNum.textContent = x;
  userScore.appendChild(userScoreNum);
  computerScore.appendChild(computerScoreNum);
  body.appendChild(gameMessage);

  if (i ==5){
    gameMessage.textContent = "Player won in 5 games &#127881";
    i = 0;
    x = 0;
  }
  else if (x ==5){
    gameMessage.textContent = "Computer won in 5 games";
    i = 0;
    x = 0;
  }
});

resetButton.addEventListener('click',()=>{
  i = 0;
  x = 0;
  userScoreNum.textContent = i;
  computerScoreNum.textContent = x;
  userScore.appendChild(userScoreNum);
  computerScore.appendChild(computerScoreNum);
  gameMessage.textContent = 'First to 5 wins!';

})
gameMessage.style.color = 'white';
gameMessage.style.fontSize = '50px';
gameMessage.style.fontWeight = 'bold';
gameMessage.style.textAlign = 'center';


userScoreNum.style.color = 'white';
computerScoreNum.style.color = 'white';
