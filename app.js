// Rules of the Game
//Connect Four is a two-player connecting board game in which players choose 
//a color and take turns placing colored discs in a seven-player column. 
//To win Connect Four, you have to be the first player to get four of your 
//colored checkers in a line either horizontally, vertically, or diagonally.

// Pseudo code

//create a board 6 x 7
// create classes for red and yellow
//eventListener onclick() function for the target element
// function to save column index of the target 
//function to check if last row cell doesn't has classname already
// function to assign the color to the last row(bottom) of the column
//count red classes, if count is 4 and if it is in one row/column/diagonal RESULTS msg Player1 win
//else if count is 4 for yellow classes and if it is in one row/column/diagonal RESULTS msg Player2 win
//else promt "TIE"
//reset btn ---> to start the game with clean cells



//create variables 
let player1Name = document.getElementById('player1Name')
let player2Name = document.getElementById('player2Name')
let errors = document.querySelector('.errors')
let container = document.getElementById('container')
let results = document.querySelector('.results')
let finalresults = document.querySelector('.finalresults')
let resultMessage = document.querySelector('.result-message')
let restartBtn = document.getElementById('restartBtn')
let resetBtn = document.querySelector('#resetBtn')
let closeBtn = document.querySelector('#closeBtn')
let startBtn = document.getElementById('startBtn')
let popupWindow = document.getElementById('popup')
let gameBoard = document.getElementById('gameBoard')
let name1 = document.getElementById('name1')
let name2 = document.getElementById('name2')
let player1 = "blue"
let player2 = 'yellow'
let currentPlayer
let gameOver = false
let cellsArr = []
let lastRowArr = [5, 5, 5, 5, 5, 5, 5]



window.onload =  showWindow

currentPlayer = player1





function showWindow(){
    popupWindow.style.display = 'block';
    gameBoard.style.display = 'none'
    resultMessage.style.display = 'none'
    player1Name.value = '';
    player2Name.value = '';

}

function startGame() {
    gameBoard.style.display = 'block'
 //Create two dimen. array[][] to the board
 lastRowArr = [5, 5, 5, 5, 5, 5, 5]
 for (let row = 0; row < 6; row++) {
    let rowCells = [];
    for (let col = 0; col < 7; col++) {
        rowCells.push(' ')
        const colCells = document.createElement('div')
        colCells.classList.add('circle')
        colCells.setAttribute('id', row + "-" + col)
        colCells.addEventListener('click', handleClick)
        container.appendChild(colCells)
    }
    cellsArr.push(rowCells)
}

    }
   
console.log(cellsArr)


//onclick() save the column index of the target element
function handleClick(e) {
    if (gameOver) {
        return
    }

    let coord = e.target.id.split('-')
    let rowIndex = parseInt(coord[0])
    let colIndex = parseInt(coord[1])

    rowIndex = lastRowArr[colIndex]

    if (rowIndex < 0) {
        return
    }
    cellsArr[rowIndex][colIndex] = currentPlayer
    let disc = document.getElementById(rowIndex.toString() + '-' + colIndex.toString())
    if (currentPlayer === player1) {
        disc.classList.add('blue')
        currentPlayer = player2
        name2.classList.add('glowing-circle')
        name1.classList.remove('glowing-circle')
    } else {
        disc.classList.add('yellow')
        currentPlayer = player1
        name1.classList.add('glowing-circle')
        name2.classList.remove('glowing-circle')
    }
    rowIndex -= 1
    lastRowArr[colIndex] = rowIndex
    checkWinner()
}

//set the Players color to the last index of the row, which is 5
//if index 5 has already className increment colIndex until you find empty cell



//     if (player1Turn) {
//         targetCell.classList.add('red')
//         player1Turn = false;
//     } else {
//         targetCell.classList.add('yellow')
//         player1Turn = true;
//     }
//     checkWinner('red')
//     checkWinner('yellow')
// }

function checkWinner() {
    //check all horisontal lines
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (cellsArr[i][j] !== " ") {
                if (cellsArr[i][j] === cellsArr[i][j + 1] &&
                    cellsArr[i][j + 1] === cellsArr[i][j + 2] &&
                    cellsArr[i][j + 2] === cellsArr[i][j + 3]
                ) {
                    setWinner(i, j)
                    return
                }
            }
        }
    }

    //check all vertical lines
    for (let j = 0; j < 7; j++) {
        for (let i = 0; i < 4; i++) {
            if (cellsArr[i][j] !== " ") {
                if (cellsArr[i][j] === cellsArr[i + 1][j] &&
                    cellsArr[i + 1][j] === cellsArr[i + 2][j] &&
                    cellsArr[i + 2][j] === cellsArr[i + 3][j]
                ) {
                    setWinner(i, j)
                    return
                }
            }
        }
    }

    //check all  diagonal lines
    for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (cellsArr[i][j] !== " ") {
                if (cellsArr[i][j] === cellsArr[i - 1][j + 1] &&
                    cellsArr[i - 1][j + 1] === cellsArr[i - 2][j + 2] &&
                    cellsArr[i - 2][j + 2] === cellsArr[i - 3][j + 3]
                ) {
                    setWinner(i, j)
                    return
                }
            }
        }
    }

    //check all opposite diagonal lines
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (cellsArr[i][j] !== " ") {
                if (cellsArr[i][j] === cellsArr[i + 1][j + 1] &&
                    cellsArr[i + 1][j + 1] === cellsArr[i + 2][j + 2] &&
                    cellsArr[i + 2][j + 2] === cellsArr[i + 3][j + 3]
                ) {
                    setWinner(i, j)
                    return
                }
            }
        }
    }



}

function setWinner(i, j) {
    resultMessage.style.display = 'block'
    if (cellsArr[i][j] === player1) {
        results.innerHTML = "Blue Wins!";
        finalresults.innerHTML = `${player1Name.value.toUpperCase()} wins!`;
    } else {
        results.innerHTML = "Yellow Wins!";
        finalresults.innerHTML = `${player2Name.value.toUpperCase()} wins!`;
    }
    gameOver = true;
    name2.classList.remove('glowing-circle')
    name1.classList.remove('glowing-circle')
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

startBtn.addEventListener('click', function () {
    if (player1Name.value == '' || player2Name.value == '') {
        document.getElementById('errors').innerHTML = "*Input can not be left blank*";
    } else {
        popupWindow.style.display = "none";
        resultMessage.style.display = 'none';
        gameBoard.style.display = 'block';
        document.querySelector('#name1').innerHTML = player1Name.value.toUpperCase();
        document.querySelector('#name2').innerHTML = player2Name.value.toUpperCase();
startGame()

    }
})





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




restartBtn.addEventListener('click', function () {
    location.reload()
})

closeBtn.addEventListener('click', function () {
    gameBoard.style.display = 'block'
    resultMessage.style.display = 'none'
})

resetBtn.addEventListener('click', function () {
    popupWindow.style.display = 'none'
    gameBoard.style.display = 'block'
    // results.innerHTML = ''
    container.innerHTML = ''
    // for (let i = 0; i < 6; i++) {
    //     for (let j = 0; j < 7; j++) {
    //         let disc = document.getElementById(i.toString() + '-' + j.toString())
    //         disc.classList.remove('blue', 'yellow')
    //     }
    // }
    gameOver = false
  startGame()  
  
})