// Init Variables

const gameDiv = document.querySelector(".game-div");

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
    return
};

function changePlayer() {
    return
};

function userAction (tile, index) {
    if(isGameActive) {
        tile.innerText = currentPlayer;
        tile.classList.add(`player${currentPlayer}`);
        updateBoard(index);
        checkResult();
        changePlayer();
    };
};

// Main Script

tiles.forEach( (tile, index) => {
    tile.addEventListener("click", userAction(tile, index));
});
