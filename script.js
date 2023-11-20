function getComputerChoice(){
  const choices = ["rock","paper","scissors"]
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomValue = choices[randomIndex];
  return(randomValue);


}
let playerselection =prompt("Please enter a move");
let playerscore = 0;
let computerscore = 0;


  function PlayRound(playerselection,computerselection){
    

    let RockPaperScissorsp = playerselection.toLowerCase();

    if (RockPaperScissorsp===computerselection){
      return "Tied Game";
    }
      else if (RockPaperScissorsp === "paper" && computerselection === "rock"){
        playerscore = ++playerscore;
        return `Paper beats Rock. Player wins. Playerscore = ${playerscore}, Computerscore = ${computerscore}`;
      }
      else if (RockPaperScissorsp === "rock" && computerselection === "scissors"){
        playerscore = ++playerscore;
        return `Rock beats Scissors. Player wins. Playerscore = ${playerscore}, Computerscore = ${computerscore}`;
      }
      else if (RockPaperScissorsp === "scissors" && computerselection === "paper"){
        playerscore = ++playerscore;
        return `Scissors beats Paper. Player wins. Playerscore = ${playerscore}, Computerscore = ${computerscore}`;
      }
      else if (RockPaperScissorsp === "paper" && computerselection === "scissors"){
        computerscore = ++computerscore;
        return `Scissors beats Paper. Computer wins. Playerscore = ${playerscore}, Computerscore = ${computerscore}`;
      }
      else if (RockPaperScissorsp === "scissors" && computerselection === "rock"){
        computerscore = ++computerscore;
        return `Rock beats Scissors. Computer wins. Playerscore = ${playerscore}, Computerscore = ${computerscore}`;
      }
      else if (RockPaperScissorsp === "rock" && computerselection === "paper"){
        computerscore = ++computerscore;
        return `Paper beats Rock. Computer wins. Playerscore = ${playerscore}, Computerscore = ${computerscore}`;
      } 
      else{
        return "That is not a valid response please enter Rock,Paper,or Scissors";
      }
  }

PlayRound(playerselection,getComputerChoice());




function game(){

  let playerscore = 0;
  let computerscore = 0;
  let playerselection =prompt("Please enter a move");

  for(let NumGames =0; NumGames<5;NumGames++){
    if (playerscore>computerscore){
      console.log(`Player Wins! Final Score: Player: ${playerscore}, Computer: ${computerscore}`)
    }
    else if (playerscore>computerscore){
        console.log(`computer Wins! Final Score: Player: ${playerscore}, Computer: ${computerscore}`)
    }
    getComputerChoice();
    let RockPaperScissorsp = playerselection.toLowerCase();
    PlayRound(playerselection,getComputerChoice());
}
}
game();


  


//make varaible called choices to store the three values (Rock,Paper,Scissors)
//make function call getComputerChoice (there is not going to be a parameter)
//the code to be executed will take the variable with a random method
//then make the code return the value
//then invoke getComputerChoice


//make varaibles called playerscore and computer
//then make function called game that plays a 5 round game, keeps score, and reports who won.
//


//make a function called game
//make variables to keep track of the player and computer scores
//write a for loop the will play a round of RPS 5 times.
//before each round make a prompt so the user can enter there answer
//after each round display the results using console log
//once the five games are finished display the winner and the final score