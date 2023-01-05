let rps_choices = ['rock', 'paper', 'scissors'];

let playerChoice;

let computerWins = 0;
let playerWins = 0;
let ties = 0;

let playAgain = true;

// keep playing until the player presses cancel when prompted after each game is finished
while (playAgain === true) {

// ask player for a choice
playerChoice = prompt('Please enter your choice of rock, paper, or scissors: ');

// randomly select either rock, paper, or scissors
let randomIndex = Math.floor(Math.random() * rps_choices.length);
let computerChoice = rps_choices[randomIndex];

// display the choices made by the player and the computer
alert('You chose: ' + playerChoice + '.\nThe computer chose: ' + computerChoice + '.');

// check who won 
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

// display results + play again or quit? 
if (confirm('You have won ' + playerWins + ' times. \nThe computer has won: ' + computerWins 
    + ' times \nThere have been ' + ties + ' ties. \nPress OK to play again or Cancel to quit!')) {
    playAgain = true;
} 
else {
    playAgain = false;
}
}


