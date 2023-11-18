const choices = ["Rock","Paper","Scissors"]

function getComputerChoice(){
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomValue = choices[randomIndex];
  return(randomValue);
}


function RockPaperScissors(playerselection,computerselection){

  function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomValue = choices[randomIndex];
    return(randomValue);

  if (playerselection===computerselection){
    return "Tied Game";
  }
    else if (playerselection === "Paper" && computerselection === "Rock"){
      return "Paper beats Rock. Player wins";
    }
    else if (playerselection === "Rock" && computerselection === "Scissors"){
      return "Rock beats Scissors. Player wins";
    }
    else if (playerselection === "Scissors" && computerselection === "Paper"){
      return "Scissors beats Paper. Player wins";
    }
    else if (playerselection === "Paper" && computerselection === "Scissors"){
      return "Scissors beats Paper. Computer wins";
    }
    else if (playerselection === "Scissors" && computerselection === "Rock"){
      return "Scissors beats Paper. Computer wins";
    }
    else if (playerselection === "Rock" && computerselection === "Paper"){
      return "Paper beats Rock. Computer wins";

  } 

}
}



//make varaible called choices to store the three values (Rock,Paper,Scissors)
//make function call getComputerChoice (there is not going to be a parameter)
//the code to be executed will take the variable with a random method
//then make the code return the value
//then invoke getComputerChoice
