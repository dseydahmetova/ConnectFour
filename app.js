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


let playerXName = document.getElementById('playerXName')
let playerOName = document.getElementById('playerOName')
let errors = document.querySelector('.errors')
let container = document.getElementById('container')
let results = document.querySelector('.results')
let resultMessage = document.querySelector('.result-message')
let restartBtn = document.getElementById('restartBtn')
let resetBtn = document.querySelector('#resetBtn')
let closeBtn = document.querySelector('#closeBtn')
let startBtn = document.getElementById('startBtn')
let popupWindow = document.getElementById('popup')
let gameBoard = document.getElementById('gameBoard')
let player1Turn
let cellsArr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]


for (let row = 0; row < 6; row++) {
    const rowCells = document.createElement('div')
    rowCells.classList.add('row')
    rowCells.setAttribute('id', row)
    for (let col = 0; col < 7; col++) {
        cellsArr[row][col] = 'test'
        const colCells = document.createElement('div')
        colCells.classList.add('circle')
        colCells.setAttribute('id', row)
        colCells.addEventListener('click', handleClick)
        rowCells.appendChild(colCells)
    }
    container.appendChild(rowCells)
}

player1Turn = true
function handleClick(e) {
   
    const targetCell = e.target
    if (player1Turn) {
        targetCell.classList.add('red')
        player1Turn = false;
    } else {
        targetCell.classList.add('yellow')
        player1Turn = true;
    }
    checkWinner('red')
    checkWinner('yellow')
}

const cellElement = document.querySelectorAll('.circle')

function checkWinner(arg) {
    let start = 1
    for (let i = 0; i < start; i++) {
         for (let j = 0; j <= 6; j++) {
            if (cellElement[j].classList.contains(arg) &&
            cellElement[j+1].classList.contains(arg) &&
            cellElement[j+2].classList.contains(arg)&&
            cellElement[j+3].classList.contains(arg)
            ) {
                results.innerHTML = arg.toUpperCase() + ' wins!'
            }          
        }
        console.log(start)
       
    }
    
}




// function showGameBoard() {
//     popupWindow.style.display = 'block';
//     gameBoard.style.display = 'none'
//     resultMessage.style.display = 'none'
//     playerXName.value = '';
//     playerOName.value = '';
//     removeClasses();
//     player1Turn = true;
// }

//window.onload = showGameBoard;

// startBtn.addEventListener('click', function () {
//     if (playerXName.value == '' || playerOName.value == '') {
//         document.getElementById('errors').innerHTML = "*Input can not be left blank*";
//     } else {
//         popupWindow.style.display = "none";
//         resultMessage.style.display = 'none';
//         gameBoard.style.display = 'block';
//         document.querySelector('#name1').innerHTML = playerXName.value;
//         document.querySelector('#name2').innerHTML = playerOName.value;


//     }
// })




const winnigArr = [
    [0, 1, 2, 3], [3, 4, 5, 6], [1, 2, 3, 4], [2, 3, 4, 5],
    [7, 8, 9, 10], [10, 11, 12, 13], [8, 9, 10, 11], [9, 10, 11, 12]
    // , [1, 4, 7], [2, 5, 8],
    // [0, 4, 8], [2, 4, 6]
]


// function checkWinner(arg) {
//     winnigArr.forEach(element => {
//         let arr = []
//         element.forEach(item => {
//             if (cellElement[item].classList.contains(arg)) {
//                 arr.push(cellElement[item])
//             }
//             if (arr.length === 4) {
//                 results.innerHTML = arg.toUpperCase() + ' wins!'

//             }
//             // else if (containsClass(checkCell)) {
//             //     results.innerHTML = "Match Tie!";
//             // }
//         })
//     })
// }





// function containsClass(argument) {
//     return [...argument].every(cell => {
//         return cell.classList.contains('x') ||
//             cell.classList.contains('o')
//     })
// }

function removeClasses() {
    cellElement.forEach(cell => {
        cell.classList.remove('red', 'yellow')
        results.innerHTML = ''
        player1Turn = true;
    })
}


// restartBtn.addEventListener('click', function () {
//     showPopup();
// })

// closeBtn.addEventListener('click', function () {
//     gameBoard.style.display = 'block'
//     resultMessage.style.display = 'none'
//     xTurn = true;
//     removeClasses();
// })

resetBtn.addEventListener('click', function () {
    // gameBoard.style.display = 'block'
    // resultMessage.style.display = 'none'
    // xTurn = true;
    removeClasses();
})