const choices = ["rock","paper","scissors"]

function getComputerChoice(){
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomValue = choices[randomIndex];
  return(randomValue);
}


function RockPaperScissors(playerselection,computerselection){

  let RockPaperScissorsp = playerselection.toLowerCase();

  if (RockPaperScissorsp===computerselection){
    return "Tied Game";
  }
    else if (RockPaperScissorsp === "paper" && computerselection === "rock"){
      return "Paper beats Rock. Player wins";
    }
    else if (RockPaperScissorsp === "rock" && computerselection === "scissors"){
      return "Rock beats Scissors. Player wins";
    }
    else if (RockPaperScissorsp === "scissors" && computerselection === "paper"){
      return "Scissors beats Paper. Player wins";
    }
    else if (RockPaperScissorsp === "paper" && computerselection === "scissors"){
      return "Scissors beats Paper. Computer wins";
    }
    else if (RockPaperScissorsp === "scissors" && computerselection === "rock"){
      return "Scissors beats Paper. Computer wins";
    }
    else if (RockPaperScissorsp === "rock" && computerselection === "paper"){
      return "Paper beats Rock. Computer wins";
    } 
    else{
      return "That is not a valid response please enter Rock,Paper,or Scissors";
    }
}
RockPaperScissors("Paper",getComputerChoice());

function game();{
  for(Let games = 0; games<5 ; games++){
    

    if (RockPaperScissorsp===computerselection){
      return "Tied Game";
    }
      else if (RockPaperScissorsp === "paper" && computerselection === "rock"){
        return "Paper beats Rock. Player wins";
      }
      else if (RockPaperScissorsp === "rock" && computerselection === "scissors"){
        return "Rock beats Scissors. Player wins";
      }
      else if (RockPaperScissorsp === "scissors" && computerselection === "paper"){
        return "Scissors beats Paper. Player wins";
      }
      else if (RockPaperScissorsp === "paper" && computerselection === "scissors"){
        return "Scissors beats Paper. Computer wins";
      }
      else if (RockPaperScissorsp === "scissors" && computerselection === "rock"){
        return "Scissors beats Paper. Computer wins";
      }
      else if (RockPaperScissorsp === "rock" && computerselection === "paper"){
        return "Paper beats Rock. Computer wins";
      } 
      else{
        return "That is not a valid response please enter Rock,Paper,or Scissors";
      }
  }
}





//make varaible called choices to store the three values (Rock,Paper,Scissors)
//make function call getComputerChoice (there is not going to be a parameter)
//the code to be executed will take the variable with a random method
//then make the code return the value
//then invoke getComputerChoice


//make varaibles called playerscore and computer
//then make function called game that plays a 5 round game, keeps score, and reports who won.
//