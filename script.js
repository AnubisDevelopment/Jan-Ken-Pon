console.log("hello world")


function getComputerChoice (choice){
    //pick number 0,1,2
    let selection = Math.floor(Math.random() * 3)
    //console log the selection tied to a number
    if(selection === 0){
        return 'rock'
    } else if(selection === 1){
        return 'paper'
    } else {
        return 'scissors'
    }
}

/*function getHumanChoice (ask){
    let answer = prompt('Type rock, paper, or scissors')
    if(answer.toLowerCase() === 'rock'){
        return 'rock'
    }else if (answer.toLowerCase() === 'paper'){
        return 'paper'
    } else {
        return 'scissors'
    }
    console.log(answer)
}
*/

//defines scores in global scope
let humanScore = 0
let computerScore = 0
//plays single round of rock,paper,scissors.
function playRound(x,y){
    let rock = 'rock'
    let paper = 'paper'
    let scissors = 'scissors'
    if (y === rock && x === scissors){
        para.textContent = 'You win, rock beats scissors'; humanScore += 1;
        currentHumanScore.innerHTML = humanScore; currentComputerScore.innerHTML = computerScore
    } else if (y === paper && x === scissors){
        computerScore += 1; para.textContent = 'You lose! Scissors beats paper';
        currentHumanScore.innerHTML = humanScore; currentComputerScore.innerHTML = computerScore
    } else if (y === scissors && x === rock) {
        computerScore += 1; para.textContent = 'You lose, rock beats scissors';
        currentHumanScore.innerHTML = humanScore; currentComputerScore.innerHTML = computerScore
    } else if (y === scissors && x === paper){
        humanScore += 1; para.textContent = 'You win scissors beats paper';
        currentHumanScore.innerHTML = humanScore; currentComputerScore.innerHTML = computerScore
    }else if(y === rock && x === paper){
        computerScore += 1; para.textContent = 'You lose paper beats rock';
        currentHumanScore.innerHTML = humanScore; currentComputerScore.innerHTML = computerScore
    }else if(y === paper && x === rock){
        humanScore += 1; para.textContent = 'You win, paper beats rock';
        currentHumanScore.innerHTML = humanScore; currentComputerScore.innerHTML = computerScore
    } else para.textContent = 'Its a tie!';
    currentHumanScore.innerHTML = humanScore; currentComputerScore.innerHTML = computerScore
}

//plays a game with 'num' amount of rounds
function playGame(num){
    //loops until num of turns is completed
    for (let i=1; i<=num; i++){
        playRound(getComputerChoice(), getHumanChoice())
    } //once game is complete logs the total scores
    console.log(`Human Score is ${humanScore} and the Computer Score is ${computerScore}`)    
}

//playGame(5)
// DOM Manipulation
const rock = document.querySelector('.rockButton')
const paper = document.querySelector('.paperButton')
const scissors = document.querySelector('.scissorsButton')

rock.addEventListener('click', function(){
    playRound(getComputerChoice(), 'rock')
    announceWinner()
})

paper.addEventListener('click', function(){
    playRound(getComputerChoice(), 'paper')
    announceWinner()
})

scissors.addEventListener('click', function(){
    playRound(getComputerChoice(), 'scissors')
    announceWinner()
})
//show who won in the DOM
let div = document.querySelector('.divResults')
let para = document.createElement('p')
para.style.fontSize = ('26px')
div.appendChild(para)
//show tallying score in DOM
let currentHumanScore = document.querySelector('.humanScoreCard')
let currentComputerScore = document.querySelector('.computerScoreCard')

currentHumanScore.style.fontSize = ('30px')
currentComputerScore.style.fontSize = ('30px')

currentHumanScore.innerHTML = humanScore
currentComputerScore.innerHTML = computerScore
//when human score or computer score reaches 5 points announce winner
let whoWon = document.createElement('p')
whoWon.style.fontSize = ('30px')
function announceWinner(){
    if (humanScore == 5) {
        whoWon.textContent = 'You won the game with a score of 5 points! Nice job!';
        div.appendChild(whoWon)
    } else if (computerScore == 5){
        whoWon.textContent = 'The Computer won the game with a score of 5 points! Better luck next time!';
        div.appendChild(whoWon)
    }
}
