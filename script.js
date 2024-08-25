let humanScore = 0;
let computerScore = 0;
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

// Function to get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', scissors];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return 'It\'s a tie!';
    }
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You Win! ${humanChoice} beats ${computerChoice}`;
    }
    computerScore++;
    return `You lose! ${computerChoice} betas ${humanChoice}`
}
    
function updateScore(){
    scoreDiv.textContent = `Human score: ${humanScore}, Computer score: ${humanScore}`;
    if (humanScore === 5){
        resultsDiv.textContent = 'You win the game'
        disableButtons();
    } else if (computerScore === 5){
        resultsDiv.textContent = 'Computer wins the game'
        disableButtons();
    }
}


function disableButtons(){
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

function handleClick(e){
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    resultsDiv.textContent = result;
    updateScore();
}

document.getElementById('rock').addEventListener('click', handleClick);
document.getElementById('paper').addEventListener('click', handleClick);
document.getElementById('scissors').addEventListener('click', handleClick);

updateScore();