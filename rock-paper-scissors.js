let rps_choices = ['rock', 'paper', 'scissors'];

let randomIndex = Math.floor(Math.random() * rps_choices.length);

let computerChoice = rps_choices[randomIndex];
let playerChoice;

let computerWins = 0;
let playerWins =0;
let ties = 0;

let playAgain = 0;

playerChoice = prompt('Please enter your choice of rock, paper, or scissors: ');

alert('You chose: ' + playerChoice);
alert('The computer chooses: ' + computerChoice);


if (playerChoice === 'rock'){
    if (computerChoice === 'rock') {
        ties++;
        alert('it is a tie!');
    }
    else if (computerChoice === 'paper') {
        computerWins++;
        alert('You lose!');
    }
    else if (computerChoice === 'scissors') {
        playerWins++;
        alert('You win!');
    }
}

if (playerChoice === 'paper'){
    if (computerChoice === 'paper') {
        ties++;
        alert('it is a tie!');
    }
    else if (computerChoice === 'scissors') {
        computerWins++;
        alert('You lose!');
    }
    else if (computerChoice === 'rock') {
        playerWins++;
        alert('You win!');
    }
}

if (playerChoice === 'scissors'){
    if (computerChoice === 'scissors') {
        ties++;
        alert('it is a tie!');
    }
    else if (computerChoice === 'rock') {
        computerWins++;
        alert('You lose!');
    }
    else if (computerChoice === 'paper') {
        playerWins++;
        alert('You win!');
    }
}

alert("You have won " + playerWins + " times, and the computer has won " + computerWins + " times!");


