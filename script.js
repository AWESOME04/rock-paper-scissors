let humanScore = 0;
let computerScore = 0;
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

// Function to get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
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
    return `You lose! ${computerChoice} beats ${humanChoice}`
}
    
function updateScore(){
    scoreDiv.textContent = `Human score: ${humanScore}, Computer score: ${humanScore}`;
    if (humanScore === 5){
        resultsDiv.textContent = 'You win the game'
        disableButtons();
        animateWin();
    } else if (computerScore === 5){
        resultsDiv.textContent = 'Computer wins the game'
        disableButtons();
        animateLoss();
    }
}


function disableButtons(){
    document.querySelectorAll('button').forEach(btn => btn.disabled = true);
}

function handleClick(e){
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    resultsDiv.textContent = result;
    updateScore();
    animateResult(result);
}

function animateResult(){
    resultsDiv.style.animation = 'none';
    resultsDiv.offsetHeight; // Trigger reflow
    resultsDiv.style.animation = 'popIn 0.3s ease-out';
}

function animateWin(){
    document.body.style.animation = 'winPulse 1s ease-in-out';
}

function animateLoss(){
    document.body.style.animation = 'lossPulse 1s ease-in-out';
}

document.querySelectorAll('button').forEach(btn => btn.addEventListener('click', handleClick));

updateScore();