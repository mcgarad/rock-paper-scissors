function computerPlay() {
    let a = Math.floor(Math.random()*3);
    let computerMove = "undecided"
    switch (a) {
        case 0:
            computerMove = "Rock";
            console.log("Rock");
            break;
        case 1:
            computerMove = "Paper";
            console.log("Paper");
            break;
        case 2:
            computerMove = "Scissors";
            console.log("Scissors")
            break;
    }
    return computerMove
}

function playRound(playerSelection, computerSelection) {
    let resultMessage = "nothing"
    let playerSelectionCased = playerSelection.toLowerCase();
    playerSelectionCased = playerSelectionCased.replace(playerSelectionCased[0], playerSelectionCased[0].toUpperCase());
    if (playerSelectionCased === computerSelection) {
        resultMessage = `It's a tie. ${playerSelectionCased} ties with ${computerSelection}.`;
    } else if (playerSelectionCased === "Rock") {
        switch (computerSelection) {
            case "Paper":
                resultMessage = `You lose! ${computerSelection} beats ${playerSelectionCased}.`;
                break;
            case "Scissors":
                resultMessage = `You win! ${playerSelectionCased} beats ${computerSelection}.`;
                break;
        }
    } else if (playerSelectionCased === "Paper") {
        switch (computerSelection) {
            case "Scissors":
                resultMessage = `You lose! ${computerSelection} beats ${playerSelectionCased}.`;
                break;
            case "Rock":
                resultMessage = `You win! ${playerSelectionCased} beats ${computerSelection}.`;
                break;
        }
    } else if (playerSelectionCased === "Scissors") {
        switch (computerSelection) {
            case "Rock":
                resultMessage = `You lose! ${computerSelection} beats ${playerSelectionCased}.`;
                break;
            case "Paper":
                resultMessage = `You win! ${playerSelectionCased} beats ${computerSelection}.`;
                break;
        }
    } else {resultMessage = "Invalid input given."}
    return resultMessage;
}

const playerSelection = "PApEr"
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))