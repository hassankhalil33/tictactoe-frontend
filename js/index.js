// Init Variables

const tiles = document.querySelectorAll(".tile");
const gameDiv = document.querySelector(".game-div");
const announcer = document.querySelector(".announce");

let board = ['', '', '', '', '', '', '', '', ''];
let nextMove = "Red";
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Functions

function updateBoard(i) {
    board[i] = nextMove;
};

//Checks if one of the conditions are met, or ties.
function checkResult() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        };
    };

    if (roundWon) {
        changePlayer();
        announcer.innerText = `Player ${nextMove} Won!`;
        console.log("Im Here");
        isGameActive = false;
        return;
    };

if (!board.includes(''))
    announcer.innerText = "TIE!";
};

//Changes player name
function changePlayer() {
    announcer.classList.remove(`player-${nextMove}`);
    nextMove = nextMove === "Red" ? "Yellow" : "Red";
    announcer.innerText = `Player ${nextMove}'s Turn`;
};

//After click action --> start game
function userAction (tile, index) {
    if(isGameActive) {
        tile.classList.add(`player-${nextMove}`);
        updateBoard(index);
        changePlayer();
        checkResult();
    };
};

// Main Script

window.addEventListener("load", () => {
    tiles.forEach( (tile, index) => {
        tile.addEventListener("click", () => userAction(tile, index));
    });
});
