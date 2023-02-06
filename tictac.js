// Rules of the Game

// The game is to be played between two people.
// One of the player chooses ‘O’ and the other ‘X’ to mark their respective cells.
// The game starts with one of the players and the game ends when one of the players 
//has one whole row/ column/ diagonal filled with character (‘O’ or ‘X’).

// Pseudo code

//create a board 3 x 3
// create classes for X and O
//onclick() 
//check if cell doesn't has classname X or O already
//add X or O inside the cell if has no classname
//if occupied prompt msg NOT allowed
// switch turns: if current player turn is X, switch the currentPlayer Turn to O after X onclick()
//count X, if count is 3 and if it is in one row/column/diagonal RESULTS msg Player1 win
//else if count is 3 and if it is in one row/column/diagonal RESULTS msg Player2 win
//else promt "TIE"
//restart btn ---> to start the game with clean cells


// let playerXName = document.getElementById('playerXName')
// let playerOName = document.getElementById('playerOName')
let errors = document.querySelector('.errors')
let container = document.getElementById('container2')
let results = document.querySelector('.results')
let resultMessage = document.querySelector('.result-message')
let restartBtn = document.getElementById('newGameBtn')
let resetBtn = document.querySelector('#resetBtn')
let closeBtn = document.querySelector('#closeBtn')
let startBtn = document.getElementById('startBtn')
let popupWindow = document.getElementById('popup')
let gameBoard = document.getElementById('gameBoard')
let xTurn
let cellsArr = []




function showPopup() {
   // popupWindow.style.display = 'block';
    gameBoard.style.display = 'block'
   resultMessage.style.display = 'none'
    // playerXName.value = '';
    // playerOName.value = '';
  // removeClasses();
    xTurn = true;
}

window.onload = showPopup;




for (let i = 0; i < 9; i++) {
    const cells = document.createElement('div')
    cells.classList.add('cell')
    container.appendChild(cells)
    cellsArr.push(cells)
}

const checkCell = document.querySelectorAll('.cell')

console.log(checkCell)

checkCell.forEach(cell => {
    cell.addEventListener('click', handleClick)
})


function handleClick(e) {
    const targetCell = e.target
    if (xTurn) {
        if (targetCell.classList.contains('x') || targetCell.classList.contains('o')) {
            targetCell.classList.add('not-allowed')
        } else {
            targetCell.classList.add('x')
            xTurn = false;
        }
    }
    if (targetCell.classList.contains('x') || targetCell.classList.contains('o')) {
        targetCell.classList.add('not-allowed')
    } else {
        targetCell.classList.add('o')
        xTurn = true;
    }
    checkWinner('x')
    checkWinner('o')
    containsClass(checkCell)
}


const winnigArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]


function checkWinner(arg) {
    winnigArr.forEach(element => {
        let arr = []
        element.forEach(item => {
            if (checkCell[item].classList.contains(arg)) {
                arr.push(checkCell[item])
            }
            if (arr.length === 3) {
                results.innerHTML = arg.toUpperCase() + ' wins!'
                resultMessage.style.display = 'block'

            }
            // else if (containsClass(checkCell)) {
            //     results.innerHTML = "Match Tie!";
            //     resultMessage.style.display = 'block'
            // }
        })
    })
    // if (containsClass(checkCell)) {
    //     results.innerHTML = "Match Tie!";
    //     resultMessage.style.display = 'block'
    // }
}

function containsClass(argument) {
    return [...argument].every(cell => {
        return cell.classList.contains('x') ||
            cell.classList.contains('o')
    })
   
}


restartBtn.addEventListener('click', function () {
   window.open('index.html')
})

closeBtn.addEventListener('click', function () {
    gameBoard.style.display = 'block'
    resultMessage.style.display = 'none'
    xTurn = true;
    removeClasses();
})

resetBtn.addEventListener('click', function () {
   // gameBoard.style.display = 'block'
    resultMessage.style.display = 'none'
    xTurn = true;
    removeClasses();
})

function removeClasses() {
    checkCell.forEach(cell => {
        cell.classList.remove('x', 'o')
        results.innerHTML = ''
    })
}