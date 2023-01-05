let rps_choices = ['rock', 'paper', 'scissors'];

let playerChoice;

let computerWins = 0;
let playerWins = 0;
let ties = 0;

let playAgain = true;


while (playAgain === true) {

playerChoice = prompt('Please enter your choice of rock, paper, or scissors: ');

let randomIndex = Math.floor(Math.random() * rps_choices.length);
let computerChoice = rps_choices[randomIndex];

alert('You chose: ' + playerChoice + '. The computer chose: ' + computerChoice + '. '
    + 'The randomIndex value is: ' + randomIndex + '.');


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

alert("You have won " + playerWins + " times, and the computer has won " + computerWins + " times!");

if (confirm('Press OK to play again or Cancel to quit!')) {
    playAgain = true;
} 
else {
    playAgain = false;
}


}


