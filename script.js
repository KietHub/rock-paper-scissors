const choices = ['Rock', 'Paper', 'Scissors'];

let playerScore = 0;
let computerScore = 0;
let gameEnd = false;

const resultMsg = document.querySelector('#result-msg');
const playerScoreTracker = document.querySelector('#player-score');
const computerScoreTracker = document.querySelector('#computer-score');

function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function playGame(e) {
    const playerSelection = this.id;
    const playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase();
    const computerChoice = computerPlay();
    let gameMessage = ''

    if(playerChoice === computerChoice) {
        gameMessage = `Draw! You and the computer both chose ${playerChoice}!`;
    } else {
        let playerWin;
        switch(playerChoice) {
            case 'Rock':
                playerWin = (computerChoice === 'Scissors');
                break;
            case 'Paper':
                playerWin = (computerChoice === 'Rock');
                break;
            case 'Scissors':
                playerWin = (computerChoice === 'Paper');
                break;
            default:
                return 'Invalid selection';
                break;
        }
        
        gameMessage = playerWin ? 
        `You win! ${playerChoice} beats ${computerChoice}!` :
        `You lose! ${computerChoice} beats ${playerChoice}!`;

        if(playerWin) {
            playerScore++;
            playerScoreTracker.textContent = playerScore;
        } else {
            computerScore++;
            computerScoreTracker.textContent = computerScore;
        }
    }

    resultMsg.textContent = gameMessage;
    if(!gameEnd && (playerScore === 5 || computerScore === 5)) {
        const winnerAnnounce = playerScore === 5 ? 
        'You have won the tournament!' :
        'The computer has won the tournament!';
        const winnerMsg = document.querySelector('#winner-msg');
        winnerMsg.textContent = winnerAnnounce;
        gameEnd = true;
    }
}

const btn = document.querySelectorAll('button');
btn.forEach(button => button.addEventListener('click', playGame));

