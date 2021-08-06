let rock="rock";
let paper="paper";
let scissors="scissors";
let playerPoints=0;
let computerPoints=0;
const message = document.querySelector('.message');
let scorePlayer = document.querySelector('.player-score');
let scoreComputer = document.querySelector('.computer-score');
let buttons=Array.from(document.getElementsByTagName('button'));

buttons.forEach((button) =>
    button.addEventListener('click', () => {
        if (playerPoints >= 5 || computerPoints >= 5) {
            return;
        }
        game(button.value);
    })
);

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
        gameResult="You: Paper vs Computer: scissors. You Lose! Scissors beat Paper";
    }
    else if(playerSelection.toLowerCase()==paper && computerSelection==rock){
        gameResult="You: Paper vs Computer: Rock. You win! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase()==paper && computerSelection== paper){
        gameResult="You: Paper vs Computer: Paper. It's a tie!";
    }
    else if(playerSelection.toLowerCase()==rock && computerSelection==paper){
        gameResult="You: Rock vs Computer: Paper. You lose! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase()==rock && computerSelection==scissors){
        gameResult="You: Rock vs Computer: Scissors. You win! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase()==rock && computerSelection==rock){
        gameResult="You: Rock vs Computer: Rock. It's a tie!";
    }
    else if(playerSelection.toLowerCase()==scissors && computerSelection==paper){
        gameResult="You: Scissors vs Computer: Paper. You win! Scissors beat Paper";
    }
    else if(playerSelection.toLowerCase()==scissors && computerSelection==rock){
        gameResult="You: Scissors vs Computer: Rock.You lose! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase()==scissors && computerSelection==scissors){
        gameResult="You: Scissors vs Computer: Scissors. It's a tie!";
    }

    return gameResult;
    
}



function game(playerInput){
    
    const winSubString="win";
    const loseSubString="lose";
    let playerSelection=playerInput;
    let computerSelection=computerPlay();
    let roundResult=playRound(playerSelection, computerSelection);

    if(roundResult.includes(winSubString)){
        playerPoints++;
        
    }
    else if(roundResult.includes(loseSubString)){
        computerPoints++;
        
    }
    scorePlayer.textContent = playerPoints;
    scoreComputer.textContent = computerPoints;
    message.textContent = roundResult;

    if(playerPoints>=5 && computerPoints<5){
        
        message.textContent='Game over, You Won!';
    }
    else if(playerPoints<5 && computerPoints>=5){
        message.textContent="GameOver, You Lost!";
    }
    // else if(playerPoints==computerPoints){
    //     message.textContent="GameOver, It's a tie!";
    // }

}