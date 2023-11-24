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
  const results = DecideWinner(playerselection,computerselection)
  if (results == 'Tie'){
    return 'You Tied with the computer!'
  }
  else if (results == 'Player'){
    return 'Player won this round'
  }
  else if (results == 'Computer'){
    return 'Computer won this round'
  }
}

function PlayerChoice(){
  let validatedinput = false;
  while (validatedinput == false){
    const choice = prompt('Rock Paper Scissors ');
    if (choice == null){
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if(options.includes(choiceInLower)){
      validatedinput = true;
      return choiceInLower;
    }
  }

}


function game(){
  let playerscore = 0;
  let computerscore = 0;
  let results = DecideWinner
 for (let i = 0; i<5; i++) {
  playerselection = PlayerChoice(); 
  computerselection = getComputerChoice();
  console.log(playRound(playerselection,computerselection)); 
  console.log('---------------------' )

  if (DecideWinner(playerselection,computerselection) == 'Tie'){
  playerscore = playerscore;
  computerscore = computerscore;
  }

  else if (DecideWinner(playerselection,computerselection) == 'Player'){
    playerscore = ++playerscore;
  }
  else{
    computerscore = ++computerscore;
 }
}
console.log("Game Over");
 
if(playerscore == computerscore){
  console.log(`Game is tied no winner! Player score, ${playerscore} Computer score, ${computerscore}`)
}
else if (playerscore > computerscore){
  console.log(`Congrats you have won! Player score, ${playerscore} Computer score, ${computerscore}`)
 }
 else{
  console.log(`Damn you lost to a computer XD! Player score, ${playerscore} Computer score, ${computerscore}`)
 }

}
game()