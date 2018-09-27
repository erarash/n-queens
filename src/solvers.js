/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  let solved = false;

  //count is number of pieces placed
  function solver(count) {
    let thisRow = solution.get(count);
    for ( let col = 0; col < n; col++ ) {
      solution.togglePiece(count, col);
      if ( !solution.hasColConflictAt(col) ) {
        if ( count + 1 === n ) {
          solved = true;
        } else {
          solver(count+1);
        }
      } 
      if ( solved ) break;
      solution.togglePiece(count, col);
    }
  }

  solver(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = new Board({n: n});
  let allSolutions = [];

  //count is number of pieces placed
  function solver(count) {
    let thisRow = solution.get(count);
    for ( let col = 0; col < n; col++ ) {
      solution.togglePiece(count, col);
      if ( !solution.hasColConflictAt(col) ) {
        if ( count + 1 === n ) {
          allSolutions.push(solution);
        } else {
          solver(count+1);
        }
      } 
      solution.togglePiece(count, col);
    }
  }

  solver(0);

  console.log('Number of solutions for ' + n + ' rooks:', allSolutions.length);
  return allSolutions.length;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n}); 
  let foundSolution = false;

  //count is number of pieces placed
  function solver(count) {
    let thisRow = solution.get(count);
    for ( let col = 0; col < n; col++ ) {
      if ( thisRow[col] === 0 ) {
        solution.togglePiece(count, col);
        if ( !solution.hasColConflictAt(col)
          && !solution.hasMajorDiagonalConflictAt(count - col)
          && !solution.hasMinorDiagonalConflictAt(count + col) ) {
          if ( count + 1 === n ) {
            foundSolution = true;
          } else {
            solver(count+1);
          }
        } 
        if ( foundSolution ) break;
        solution.togglePiece(count, col);
      }
    }
  }

  solver(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = new Board({n: n});
  let allSolutions = [];

  if ( n === 0 ) return 1;

  //count is number of pieces placed
  function solver(count) {
    let thisRow = solution.get(count);
    for ( let col = 0; col < n; col++ ) {
      if ( thisRow[col] === 0 ) {
        solution.togglePiece(count, col);
        if ( !solution.hasColConflictAt(col)
        && !solution.hasMajorDiagonalConflictAt(count - col)
        && !solution.hasMinorDiagonalConflictAt(count + col) ) {
          if ( count + 1 === n ) {
            allSolutions.push(solution);
          } else {
            solver(count+1);
          }
        }
        solution.togglePiece(count, col);
      }
    }
  }

  solver(0);

  console.log('Number of solutions for ' + n + ' queens:', allSolutions.length);
  return allSolutions.length;
};
