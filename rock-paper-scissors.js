let rps_choices = ['rock', 'paper', 'scissors'];

let playerChoice;

let computerWins = 0;
let playerWins = 0;
let ties = 0;

let playAgain = true;


while (playAgain === true) {

playerChoice = prompt('Please enter your choice of rock, paper, or scissors:');

while (!((playerChoice === "rock") || (playerChoice === "paper") || (playerChoice === "scissors"))) {
        playerChoice = prompt('Invalid input: Enter either rock or paper or scissors only.');
        playerChoice = playerChoice.toLowerCase();
    }

let randomIndex = Math.floor(Math.random() * rps_choices.length);
let computerChoice = rps_choices[randomIndex];

alert('You chose: ' + playerChoice + '.\nThe computer chose: ' + computerChoice + '.');

if (((playerChoice === 'rock') && (computerChoice === 'scissors')) || 
    ((playerChoice === 'paper') && (computerChoice === 'rock')) || 
    ((playerChoice === 'scissors') && (computerChoice === 'paper'))) {
    playerWins++;
    alert('You win!');
   }
else if (computerChoice ===  playerChoice) {
    ties++;
    alert('it is a tie!');      
    }
else {
    computerWins++;
    alert('You lose!');
   }

if (confirm('You have won ' + playerWins + ' times. \nThe computer has won: ' + computerWins 
    + ' times \nThere have been ' + ties + ' ties. \nPress OK to play again or Cancel to quit!')) {
    playAgain = true;
    } 
else {
    playAgain = false;
    }
}


