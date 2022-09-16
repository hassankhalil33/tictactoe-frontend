// Init Variables

const tiles = document.querySelectorAll('.tile');
const gameDiv = document.querySelector(".game-div");
const announcer = document.querySelector(".announce");

let board = ['', '', '', '', '', '', '', '', ''];
let nextMove = "red";
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
        announcer.textContent = `Player ${nextMove} Won!`;
        console.log("Im Here");
        isGameActive = false;
        return;
    };

if (!board.includes(''))
    announcer.textContent = "TIE!";
};

function changePlayer() {
    return
};

function changePlayer() {
    announcer.classList.remove(`player${nextMove}`);
    nextMove = nextMove === "red" ? "yellow" : "red";
    announcer.innerText = nextMove;
};

function userAction (tile, index) {
    if(isGameActive) {
        tile.innerText = nextMove;
        tile.classList.add(`player${nextMove}`);
        updateBoard(index);
        checkResult();
        changePlayer();
    };
};

// Main Script

tiles.forEach( (tile, index) => {
    tile.addEventListener("click", () => userAction(tile, index));
});
