const choices = ['Rock', 'Paper', 'Scissors'];

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
    }

    console.log(gameMessage);
}

const btn = document.querySelectorAll('button');

function logText(e) {
    console.log(this.id);
}

btn.forEach(button => button.addEventListener('click', playGame));