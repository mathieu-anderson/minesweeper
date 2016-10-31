document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {col: 0, row: 0, isMine: true, hidden: true},
    {col: 1, row: 0, isMine: false, hidden: true},
    {col: 2, row: 0, isMine: false, hidden: true},
    {col: 0, row: 1, isMine: false, hidden: true},
    {col: 1, row: 1, isMine: true, hidden: true},
    {col: 2, row: 1, isMine: false, hidden: true},
    {col: 0, row: 2, isMine: false, hidden: true},
    {col: 1, row: 2, isMine: false, hidden: true},
    {col: 2, row: 2, isMine: true, hidden: true}
  ]
};

function startGame () {
  var allCells = board.cells.length;
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  for (var i =0; i < allCells; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  // Don't remove this function call: it makes the game work!
  lib.initBoard();
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var allCells = board.cells.length;
  var isWin = false;
  for (var i =0; i < allCells; i++){
    if (isWin===true) {
      lib.displayMessage('You win!');
    }
    if (board.cells[i].isMine && !board.cells[i].hidden) {
      return;
    }
    else if (board.cells[i].isMine && !board.cells[i].isMarked){
      return;
    }
    else if (!board.cells[i].isMine && board.cells[i].hidden) {
      return;
    }
    else {
      isWin=true;
    }
    }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)

}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  console.log(surrounding);
  for (var y = 0; y < surrounding.length; y++){
    if (surrounding[y].isMine){
    count++;
    }
}
  return count;
}
