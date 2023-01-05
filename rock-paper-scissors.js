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

// select rock, paper, or scissors at random
let randomIndex = Math.floor(Math.random() * rps_choices.length);
let computerChoice = rps_choices[randomIndex];

// display the choices made by the player and the computer
alert('You chose: ' + playerChoice + '. The computer chose: ' + computerChoice + '. '
    + 'The randomIndex value is: ' + randomIndex + '.');

// check who won 
if (((playerChoice === 'rock') && (computerChoice === 'scissors')) || 
    ((playerChoice === 'paper') && (computerChoice === 'rock')) || 
    ((playerChoice === 'scissors') && (computerChoice === 'paper'))) {
    playerWins++;
    alert("You win!");
   }
else if (((computerChoice === 'rock') && (playerChoice === 'scissors')) ||
        ((computerChoice === 'paper') && (playerChoice === 'rock')) ||
        ((computerChoice === 'scissors') && (playerChoice === 'paper'))) {
        computerWins++;
        alert("You lose!");
        }
else {
    ties++;
    alert('it is a tie!');
   }

// display results + play again or quit? 
if (confirm('You have won ' + playerWins + ' times, and the computer has won ' + computerWins + ' times! Press OK to play again or Cancel to quit!')) {
    playAgain = true;
} 
else {
    playAgain = false;
}
}


