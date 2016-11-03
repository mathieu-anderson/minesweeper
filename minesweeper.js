document.addEventListener('DOMContentLoaded', startGame);


function generateBoard(col, row){ //define the number of col and row
    this.cells = [];     // create the cells property : an array
    for (var c = 0; c<col; c++){ // outer loop : the number of columns
      for (var r = 0; r<row; r++){ // inner loop : the number of rows
        if (this.cells.length < col*row){ // condition for the loops to repeat the appropriate number of time to get the right sized board
         var random_boolean = Math.random() >= 0.7; // define a random true or false value
         this.cells.push({col: c, row: r, isMine: random_boolean, isMarked: false, hidden: true}); // push the cells to the cells array
        }
      }
    }
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
} // random integer generator between two values

var randomBoard = randomIntFromInterval(2, 6); // define the interval for the board

var board = new generateBoard(randomBoard, randomBoard); // random board generation

// Below : function calling the the sounds to be played

function soundMarked(){
  var audioFlag = document.getElementById("flag");
  audioFlag.play();}

function soundBoom(){
  var audioBoom = document.getElementById("boom");
  audioBoom.play();}

function soundPop(){
  var audioPop = document.getElementById("pop");
  audioPop.play();}


function startGame () { // function creating the board and supporting the other functions of the game
  var allCells = board.cells.length;
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  document.addEventListener("contextmenu", soundMarked);
  for (var i =0; i < allCells; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard();  // Don't remove this function call: it makes the game work!

  var mines = document.querySelectorAll("div.mine"); // get all the mines in an array
  for (var m =0; m < mines.length; m++){
  mines[m].addEventListener("click", soundBoom);} // add the event listener to each div in the array

  var pop = document.querySelectorAll("div.hidden:not(.mine)"); // get all the hidden divs EXCEPT mines
  for (var p =0; p < pop.length; p++){
  pop[p].addEventListener("click", soundPop);}  // add the event listener to each div in the array

}

function checkForWin () {
  var allCells = board.cells.length; // get the number of cells as an integer
  for (var i =0; i < allCells; i++){ // loop through the cells
    if (board.cells[i].isMine && !board.cells[i].hidden) { // lose condition : click a mine
      return;
    }
    else if (board.cells[i].isMine && !board.cells[i].isMarked){ // lose condition : unmarked mine
      return;
    }
    else if (!board.cells[i].isMine && board.cells[i].hidden) { //lose condition : not all safe cells are unhidden
      return;
    }
    }
  lib.displayMessage('You win!'); // no lose condition reset the loop : win condition
  var audioWin = document.getElementById("win"); // play the win sound after win conditioin
  audioWin.play();
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
  for (var y = 0; y < surrounding.length; y++){
    if (surrounding[y].isMine){
    count++;
    }
}
  return count;

}
