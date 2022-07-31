/* Script to play a 5 round game of Rock, Paper, Scissors in console */

//Determines which choice the computer will make.
function computerPlay() {
    //Sets "a" to either 0, 1 or 2 randomly
    let a = Math.floor(Math.random()*3);
    //Determines computer's choice according to random integer chosen
    let computerMove = "undecided"
    switch (a) {
        case 0:
            computerMove = "Rock";
            break;
        case 1:
            computerMove = "Paper";
            break;
        case 2:
            computerMove = "Scissors";
            break;
    }
    return computerMove
}

//Plays a single round of game using player's move and computer's move
//Returns array containing outcome, corresponding message, and formatted version of playerSelection
function playRound(playerSelection, computerSelection) {
    let resultMessage = "nothing"
    let result = "none"
    //Formats playerSelection so that only the first letter is capitalized.
    let playerSelectionCased = playerSelection.toLowerCase();
    playerSelectionCased = playerSelectionCased.replace(playerSelectionCased[0], playerSelectionCased[0].toUpperCase());
    //If selections are identical, calls a tie.
    if (playerSelectionCased === computerSelection) {
        resultMessage = `It's a tie. ${playerSelectionCased} ties with ${computerSelection}.`;
        result = "tie"
    //With ties already recognized, only win/loss states are decided below
    //Determines loss (comp chose Paper) or win (comp chose Scissors) if player chose Rock
    } else if (playerSelectionCased === "Rock") {
        switch (computerSelection) {
            case "Paper":
                resultMessage = `You lose! ${computerSelection} beats ${playerSelectionCased}.`;
                result = "loss"
                break;
            case "Scissors":
                resultMessage = `You win! ${playerSelectionCased} beats ${computerSelection}.`;
                result = "win"
                break;
        }
    //Determines win/loss if player chose Paper
    } else if (playerSelectionCased === "Paper") {
        switch (computerSelection) {
            case "Scissors":
                resultMessage = `You lose! ${computerSelection} beats ${playerSelectionCased}.`;
                result = "loss"
                break;
            case "Rock":
                resultMessage = `You win! ${playerSelectionCased} beats ${computerSelection}.`;
                result = "win"
                break;
        }
    //Determines win/loss if player chose Scissors
    } else if (playerSelectionCased === "Scissors") {
        switch (computerSelection) {
            case "Rock":
                resultMessage = `You lose! ${computerSelection} beats ${playerSelectionCased}.`;
                result = "loss"
                break;
            case "Paper":
                resultMessage = `You win! ${playerSelectionCased} beats ${computerSelection}.`;
                result = "win"
                break;
        }
    //In a case that player choice doesn't match one of those 3 options, determines player choice invalid
    } else {resultMessage = "Invalid input given."}
    return [result, resultMessage, playerSelectionCased];
}

//Sets new game, resets scores
function newGame() {
    compScore = 0;
    playerScore = 0;
    cpu.textContent = compScore;
    player.textContent = playerScore;
}

//New game button object
const new_game_btn = document.querySelector("#new_game_btn");

//grabs the 3 move button choices as set of playerChoices
const playerChoices = document.querySelectorAll('button.choice');

let resultList = [];

let compScore = 0;
let playerScore = 0;

//grabs the divs and spans for text editing
const cpu = document.querySelector('#cpuScore');
const player = document.querySelector('#playScore');
const message = document.querySelector('#messageDiv');

//resets scores and message
new_game_btn.addEventListener('click', () => {
    newGame();
    message.textContent = "New game started.";
});

//listener for each button
playerChoices.forEach((button) => {
    button.addEventListener('click', () => {
        //defines computer move
        let computerSelection = computerPlay();
        //compares result of player choice and computer choice
        resultList = playRound(button.id, computerSelection);
        //edits score variables
        if (resultList[0] === "win") {
            playerScore += 1;
        } else if (resultList[0] === "loss") {
            compScore += 1;
        }
        //updates scores on page & message displayed
        cpu.textContent = compScore;
        player.textContent = playerScore;
        message.textContent = resultList[1];
        //calls match at first to 5 and resets game
        if (compScore == 5) {
            message.textContent = `You lose: ${playerScore} to ${compScore}. Better luck next time!`;
            newGame();
        } else if (playerScore == 5) {
            message.textContent = `You win: ${playerScore} to ${compScore}. Have a cookie!!`;
            newGame();
        };
    });
});

