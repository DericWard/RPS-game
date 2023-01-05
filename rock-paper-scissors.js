let rps_choice = ["rock", "paper", "scissors"];

let userChoice;

let computerChoice;
let randomNumber = Math.floor(Math.random() * choices.length);

let computerWins = 0;
let userWins =0;
let ties = 0;

let playAgain = 0;

// let computerChoice = choices[randomIndex];

userChoice = prompt("Please enter your choice of rock, paper, or scissors: ");

computerChoice = rps_choice[randomNumber];

alert("The computer chooses: " + computerChoice);

// start of winner selection process 
if (userChoice === "rock" || "paper" || "scissors") {
    alert("You chose : " + userChoice);
}
else {
    alert("Invalid input you must choose only rock or paper or scissors!")
}

if (computerChoice === "rock" && userChoice === "paper") {
    userWins++;
    alert("You're the winner!");
}
if (computerChoice === "rock" && userChoice === "rock") {
    ties++;
    alert("It's a tie!");
}
if (computerChoice === "rock" && userChoice === "scissors") {
    computerWins++;
    alert("You lost!");
}

if (computerChoice === "paper" && userChoice === "paper") {
    ties++;
    alert("It's a tie!");
}
if (computerChoice === "paper" && userChoice === "rock") {
    computerWins++;
    alert("You lose!");
}
if (computerChoice === "paper" && userChoice === "scissors") {
    userWins++;
    alert("You win!");
}

if (computerChoice === "scissors" && userChoice === "paper") {
    computerWins++;
    alert("You lose!");
}
if (computerChoice === "scissors" && userChoice === "rock") {
    userWins++;
    alert("You win!");
}
if (computerChoice === "scissors" && userChoice === "scissors") {
    ties++;
    alert("It's a tie!");
}
// end of winner selection process 

