const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function playGame(playerSelection = prompt('What is your choice of weapon?')) {
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

    return gameMessage;
}

function game(playerSelection = prompt('What is your choice of weapon?')) {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playGame(playerSelection);
        console.log(`Round ${i + 1}\n` + result);
        
        switch(true) {
            case result.includes('win'):
                playerScore++;
                break;
            case result.includes('lose'):
                computerScore++;
                break;
            default:
                break;
        }
    }

    console.log(`Final scores\nYou: ${playerScore}\nComputer: ${computerScore}`);
    if(playerScore > computerScore) {
        console.log(`You won the tournament!`);
    } else if (playerScore < computerScore) {
        console.log('The computer won the tournament!');
    } else {
        console.log('The tournament ends in a draw');
    }
}
