/*
    Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
    Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.

*/

/* RESTATE PROBLEM
- we want a function that will generate a 8x8 grid of arrays
- we want to give that function a [x,y] coordinates array that will change the position in that array grid from 0 to 1
- we want to see if two queens are in a position to attach each other

INITIAL PLAN
- create a generateBoard function that generates a 8x8 grid and initializes all elements to 0

POSITIONING QUEEN
- go to coordinates given by the firstQueen and secondQueen arrays and reassign the value to 1

QUEEN THREAT
- queen threat should take the return of the generated Board
- there is a threat if there is a two 1's in a row, col, diagonal
- instead writing code to scan all rows (easy), cols(harder), and diagnonal(hardest)
- after placing the second queen, 
  - scan its row to see if there is more than one 1's
  - loop through all the rows and check to see if there is more than one 1's
  - figure out the algebraic pattern for a left hand and right hand diagonal search
WHAT IS THE ALGERAIC PATTERN FOR DIAGNOAL MOVE aka WHAT IS THE DEFINITION OF A DIAGNOL

*/

//BUILD
const generateBoard = function (firstQueen, secondQueen) {

  //created empty board
  let board = [];
  for (let row = 0; row < 8; row++) {
    board[row] = [];
    for (let col = 0; col < 8; col++) {
      board[row].push('0');
    }
  }

  //position first queen
  board[firstQueen[0]][firstQueen[1]] = 1

  //position second queen
  board[secondQueen[0]][secondQueen[1]] = 1

  return board;
}

function queenThreat (generatedBoard) {
  let numberOfQueens = 0;
  function isAttackPossible(numberOfQueens) {
    if (numberOfQueens > 1) {
      return true;
    } else {
      return false;
    }
  }

  // scan the row to see if there are more than one 1's in the row
  let rowToScan = blackQueen[0];
  for (let i = 0; i < generatedBoard[rowToScan].length; i++) {
    if (generatedBoard[rowToScan][i] === 1) {
    numberOfQueens++
    } 
  }
  if (numberOfQueens > 1) {
    return true;
  } else {
    numberOfQueens = 0;
  }

  console.log('number of queens, row: ' + numberOfQueens)


  //scan the col to see if there is more than one 1's in the col
  let colToScan = blackQueen[1];
  for (let i = 0; i < generatedBoard.length; i++) {
    if (generatedBoard[i][colToScan] === 1) {
      numberOfQueens++;
    }
  }
  if (numberOfQueens > 1) {
    return true;
  } else {
    numberOfQueens = 0;
  }

  console.log('number of queens, col: ' + numberOfQueens)

  //scan diagonally (up and to the right)
  let RowToCheck = blackQueen[0];
  let colToCheck = blackQueen[1];
  for (let i = blackQueen[0]; i >= 0; i--) {
    if (RowToCheck >= 0 && colToCheck >= 0) {
      if (generatedBoard[RowToCheck][colToCheck] === 1) {
        numberOfQueens++
        RowToCheck -= 1;
        colToCheck += 1;
      } else {
        RowToCheck -= 1;
        colToCheck += 1;
      }
    }
  }

  console.log('number of queens, up and right: ' + numberOfQueens)

  //scan diagonally (up and to the left)
   RowToCheck = blackQueen[0];
   colToCheck = blackQueen[1];
  for (let i = blackQueen[0]; i >= 0; i--) {

    // first a check to make sure we are not going out of boundary and getting an "undefined" TypeError
    if (RowToCheck >= 0 && colToCheck >= 0) {
      if (generatedBoard[RowToCheck][colToCheck] === 1) {
        numberOfQueens++
        RowToCheck -= 1;
        colToCheck -= 1;
      } else {
        RowToCheck -= 1;
        colToCheck -= 1;
      }
    } 
  }

  console.log('number of queens, up and left: ' + numberOfQueens)

  //scan diagonally (down and to the right)
  RowToCheck = blackQueen[0];
  colToCheck = blackQueen[1];
  for (let i = blackQueen[0]; i < generatedBoard.length; i++) {
    if (RowToCheck >= 0 && colToCheck >= 0) {
      if (generatedBoard[RowToCheck][colToCheck] === 1) {
        numberOfQueens++
        RowToCheck += 1;
        colToCheck += 1;
      } else {
        RowToCheck += 1;
        colToCheck += 1;
      }
    }
  }

  console.log('number of queens, down and right: ' + numberOfQueens)

  // scan diagonally (down and to the left)
  RowToCheck = blackQueen[0];
  colToCheck = blackQueen[1];
  for (let i = blackQueen[0]; i < generatedBoard.length; i++) {
    if (RowToCheck >= 0 && colToCheck >= 0) {
      if (generatedBoard[RowToCheck][colToCheck] === 1) {
        numberOfQueens++
        RowToCheck += 1;
        colToCheck -= 1;
      } else {
        RowToCheck += 1;
        colToCheck -= 1;
      }
    }
  }

  console.log('number of queens, down and left: ' + numberOfQueens)

  // greater than 4 becasue the diagonal loops count the 1 (queen) in the starting position, next refactor should be a way to avoid that
  if (numberOfQueens > 4) {
    return true;
  } else {
    numberOfQueens = 0;
    return false;
  }
}


//TEST
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));


whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/* ISSUES TO FIX IN V2 REFACTOR
- reduce repeating code
- clean up code for diagnoal checks
- rename variables for easier readabiliy, i.e "rowToCheck" vs "rowToScan*
  - are these variables even necesarry?
*/