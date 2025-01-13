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

function getHumanChoice (ask){
    let choice = ''
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

//defines scores in global scope
let humanScore = 0
let computerScore = 0
//plays single round of rock,paper,scissors.
function playRound(x,y){
    let rock = 'rock'
    let paper = 'paper'
    let scissors = 'scissors'
    if (y === rock && x === scissors){
        return (humanScore += 1) && console.log('You win, rock beats scissors')
    } else if (y === paper && x === scissors){
        return (computerScore += 1) && console.log('You lose! Scissors beats paper')
    } else if (y === scissors && x === rock) {
        return (computerScore += 1) && console.log('You lose, rock beats scissors')
    } else if (y === scissors && x === paper){
        return (humanScore += 1) && console.log('You win scissors beats paper')
    }else if(y === rock && x === paper){
        return (computerScore += 1) && console.log('You lose paper beats rock')
    }else if(y === paper && x === rock){
        console.log('You win, paper beats rock')
    } else console.log('Its a tie!')
}

//plays a game with 'num' amount of rounds
function playGame(num){
    //loops until num of turns is completed
    for (let i=1; i<=num; i++){
        playRound(getComputerChoice(), getHumanChoice())
    } //once game is complete logs the total scores
    console.log(`Human Score is ${humanScore} and the Computer Score is ${computerScore}`)    
}

playGame(5)
