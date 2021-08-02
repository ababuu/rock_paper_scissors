let rock="rock";
let paper="paper";
let scissors="scissors";

function computerPlay(){
    //generate a random whole number between 1 and 3
    let randNum= Math.floor(Math.random() * (4-1) + 1);
    //if randNum=1 return rock, if randNum=2 return paper, if randNum=1 return scissors
    if(randNum===1) return rock;
    else if(randNum===2) return paper;
    else return scissors;

}

function playRound(playerSelection, computerSelection){
    let gameResult;
    if(playerSelection.toLowerCase()==paper && computerSelection==scissors){
        return gameResult="You: Paper vs Computer: scissors. You Lose! Scissors beat Paper";
    }
    else if(playerSelection.toLowerCase()==paper && computerSelection==rock){
        return gameResult="You: Paper vs Computer: Rock.You win! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase()==paper && computerSelection== paper){
        return gameResult="You: Paper vs Computer: Paper.It's a tie!";
    }
    else if(playerSelection.toLowerCase()==rock && computerSelection==paper){
        return gameResult="You: Rock vs Computer: Paper.You lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase()==rock && computerSelection==scissors){
        return gameResult="You: Rock vs Computer: Scissors.You win! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase()==rock && computerSelection==rock){
        return gameResult="You: Rock vs Computer: Rock.It's a tie!";
    }
    else if(playerSelection.toLowerCase()==scissors && computerSelection==paper){
        return gameResult="You: Scissors vs Computer: Paper.You win! Scissors beat Paper";
    }
    else if(playerSelection.toLowerCase()==scissors && computerSelection==rock){
        return gameResult="You: Scissors vs Computer: Rock.You lose! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase()==scissors && computerSelection==scissors){
        return gameResult="You: Scissors vs Computer: Scissors.It's a tie!";
    }
}


function game(){
    let playerPoints=0;
    let computerPoints=0;
    const winSubString="win";
    const loseSubString="lose";
    for(let counter=0; counter<=5; counter++){
        let playerInput=prompt("Enter rock, paper or scissors");
        let roundResult=playRound(playerInput, computerPlay());
        if(roundResult.includes(winSubString)){
            playerPoints++;
            console.log(roundResult);
        }
        else if(roundResult.includes(loseSubString)){
            computerPoints++;
            console.log(roundResult);
        }
        else{
            console.log(roundResult);
        }

    }

    if(playerPoints>computerPoints){
        console.log(`You Won! Your score: ${playerPoints}, Computer's score: ${computerPoints}`);
    }
    else if(playerPoints < computerPoints){
        console.log(`You Lost! Your score: ${playerPoints}, Computer's score: ${computerPoints}`);
    }
    else{
        console.log(`It's a tie! Your score: ${playerPoints}, Computer's score: ${computerPoints}`);
    }
}

game();