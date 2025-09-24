let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('.choices button');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const resultMessageEl = document.getElementById('result-message');
const scoreEl = document.getElementById('score');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const playerChoice = e.target.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        
        displayResults(playerChoice, computerChoice, result);
        updateScore(result);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function displayResults(playerChoice, computerChoice, result) {
    playerChoiceEl.textContent = `Player chose: ${playerChoice}`;
    computerChoiceEl.textContent = `Jazz chose: ${computerChoice}`;

    resultMessageEl.classList.remove('win', 'lose', 'tie');

    if (result === 'win') {
        resultMessageEl.textContent = 'Result: Yay! you win!';
        resultMessageEl.classList.add('win');
    } else if (result === 'lose') {
        resultMessageEl.textContent = 'Result: Aw, you lose!';
        resultMessageEl.classList.add('lose');
    } else {
        resultMessageEl.textContent = 'Result: It\'s a tie!';
        resultMessageEl.classList.add('tie');
    }
}

function updateScore(result) {
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }

    scoreEl.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
}