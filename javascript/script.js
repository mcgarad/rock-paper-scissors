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

//Plays the game in 5 rounds and reports best of 5
function game() {
    //initiates score of 0-to-0
    let compScore = 0;
    let playerScore = 0;
    alert('Play a game of "Rock, Paper, Scissors". Best of 5 wins.')
    //Loops through 5 iterations of game
    for (let i = 0; i < 5; i++) {
        //Gets computer's random move
        let computerSelection = computerPlay();
        //Prompts player for their choice
        let playerSelection = prompt('Choose "Rock", "Paper", or "Scissors".');
        //Compares choices and reports result in array
        let resultList = playRound(playerSelection, computerSelection);
        //Adjusts score based on results
        if (resultList[0] === "win") {
            playerScore += 1;
        } else if (resultList[0] === "loss") {
            compScore += 1;
        //Backs up counter by 1 in case where an invalid input was given
        } else if (resultList[0] === "none") {
            i -= 1;
        }
        //Prints results from round to console
        console.log(`Computer selection: ${computerSelection}`);
        console.log(`Player selection: ${resultList[2]}`);
        console.log(resultList[1]);
        console.log(`Score: ${playerScore} to ${compScore}`)
        console.log("")
    }
    //Prints result of best of 5
    console.log("")
    if (compScore == playerScore) {
        console.log("You tied.");
    } else if (compScore > playerScore) {
        console.log("You lose. Better luck next time!");
    } else if (compScore < playerScore) {
        console.log("You win!! Have a cookie.")
    }
}


