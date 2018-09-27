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
  //create new nxn board

  let solved = false;
  function solver(count){
    let added = false;
    for ( let col = 0; col < n; col++ ) {
      let thisRow = solution.get(col);
      for ( let row = 0; row < n; row++ ) {
        if ( thisRow[row] === 0) {
          solution.togglePiece(row, col);
          if ( solution.hasAnyRooksConflicts() === false  && solved === false ) {
            added = true;
            if (count + 1 === n) {
              solved = true;
            }
            break;
          } else {
            solution.togglePiece(row, col);
          }
        }
        if ( solved ) break;
        if ( added ) break;
      }
      if ( solved ) break;
      if ( added ) break;
      }

    if ( count + 1 < n ) {
      solver(count + 1);
    }
  }

  solver(0);

  let output = [];
  for ( let col = 0; col < n; col++ ) {
    output.push(solution.get(col));
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return output;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  
  var solution = new Board({n: n});
  let allSolutions = [];

  if ( n === 1 ) return 1;

  for ( let a = 0; a < n; a++ ) {
    solution = new Board({n: n});
    solution.togglePiece(0, a);
    solver(1);
  }
  
  //count is number of pieces placed
  function solver(count) {
    let thisRow = solution.get(count);
    for ( let col = 0; col < n; col++ ) {
      if ( thisRow[col] === 0 ) {
        solution.togglePiece(count, col);
        if ( !solution.hasAnyRooksConflicts() ) {
          if ( count + 1 === n ) {
            allSolutions.push(solution);
          } else {
            solver(count+1);
          }
          solution.togglePiece(count,col);
        } else {
          solution.togglePiece(count,col);
        }
      }
    }
  }

  console.log('Number of solutions for ' + n + ' rooks:', allSolutions.length);
  console.log(allSolutions);
  return allSolutions.length;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n}); //fixme

  console.log(n);
  if ( n === 0 ) return [];
  // if ( n === 2 ) return 0; 
  // if ( n === 3 ) return 0;

  let solved = false;
  function solver(count){
    console.log(`solving with count ${count}`);
    let added = false;
    for ( let col = 0; col < n; col++ ) {
      let thisRow = solution.get(col);
      console.log(thisRow);
      for ( let row = 0; row < n; row++ ) {
        if ( thisRow[row] === 0) {
          solution.togglePiece(row, col);
          console.log(solution);
          console.log(solution.hasAnyMajorDiagonalConflicts);
          if ( solution.hasAnyRowConflicts() === false && solution.hasAnyColConflicts() === false 
              && solution.hasAnyMajorDiagonalConflicts() === false && solution.hasAnyMinorDiagonalConflicts() === false
              && solved === false ) {
            console.log('no conflicts');
            added = true;
            if (count + 1 === n) {
              solved = true;
            }
            break;
          } else {
            //console.log(solution)
            solution.togglePiece(row, col);
          }
        }
        if ( solved ) break;
        if ( added ) break;
      }
      if ( solved ) break;
      if ( added ) break;
      }

    if ( count + 1 < n ) {
      solver(count + 1);
    }
  }

  solver(0);

  let output = [];
  for ( let col = 0; col < n; col++ ) {
    output.push(solution.get(col));
  }

  console.log(output);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

  return output;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
