function computerPlay() {
    let a = Math.floor(Math.random()*3);
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

function playRound(playerSelection, computerSelection) {
    let resultMessage = "nothing"
    let result = "none"
    let playerSelectionCased = playerSelection.toLowerCase();
    playerSelectionCased = playerSelectionCased.replace(playerSelectionCased[0], playerSelectionCased[0].toUpperCase());
    if (playerSelectionCased === computerSelection) {
        resultMessage = `It's a tie. ${playerSelectionCased} ties with ${computerSelection}.`;
        result = "tie"
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
    } else {resultMessage = "Invalid input given."}
    return [result, resultMessage, playerSelectionCased];
}

function game() {
    let compScore = 0;
    let playerScore = 0;
    alert('Play a game of "Rock, Paper, Scissors". Best of 5 wins.')
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('Choose "Rock", "Paper", or "Scissors".');
        let resultList = playRound(playerSelection, computerSelection);
        if (resultList[0] === "win") {
            playerScore += 1;
        } else if (resultList[0] === "loss") {
            compScore += 1;
        } else if (resultList[0] === "none") {
            i -= 1;
        }
        console.log(`Computer selection: ${computerSelection}`);
        console.log(`Player selection: ${resultList[2]}`);
        console.log(resultList[1]);
        console.log(`Score: ${playerScore} to ${compScore}`)
        console.log("")
    }
    console.log("")
    if (compScore == playerScore) {
        console.log("You tied.");
    } else if (compScore > playerScore) {
        console.log("You lose. Better luck next time!");
    } else if (compScore < playerScore) {
        console.log("You win!! Have a cookie.")
    }
}


