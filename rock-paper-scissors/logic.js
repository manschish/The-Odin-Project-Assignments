let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
   let choices = ["rock", "paper", "scissor"];
   let randomIndex = Math.floor(Math.random()*choices.length);
   console.log(`computer chose : ${choices[randomIndex]}`);
   return choices[randomIndex];
}
function getPlayerChoice(){
   let playerSelection = prompt("what do you choose?");
   console.log(`you chose : ${playerSelection}`);
   return playerSelection;
}

function play(computerSelection, playerSelection){
    let cmputerSelection = computerSelection.toLowerCase();
    let plyerSelection = playerSelection.toLowerCase();
    if(plyerSelection == "rock" && cmputerSelection == "paper" || plyerSelection == "paper" && cmputerSelection == "rock" || plyerSelection == "scissor" && cmputerSelection == "paper"){
      playerScore++;
      console.log("You won");
    }
    else if(cmputerSelection == "rock" && plyerSelection == "paper" || cmputerSelection == "paper" && plyerSelection == "rock" || cmputerSelection == "scissor" && plyerSelection == "paper"){
      computerScore++;
      console.log("Computer Won");
    }
    else{
      console.log("Draw");
    }
}

function playRound(){
   let computerSlection = getComputerChoice();
   let playerSelection = getPlayerChoice();
   play(computerSlection,playerSelection);
   console.log(`The scores are => player score : ${playerScore}, computer score : ${computerScore}`);
}

function play5Times(){
   playRound();
   playRound();
   playRound();
   playRound();
   playRound();
}

play5Times();
