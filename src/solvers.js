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

  //let noConflict = ( solution.hasAnyColumnConflicts === false && solution.hasAnyRowConflicts === false );
  //console.log('below');
  //console.log(solution.rows());

  let solved = false;
  function solver(count){
    // console.log(`solving with count ${count}`);
    let added = false;
    for ( let col = 0; col < n; col++ ) {
      let thisRow = solution.get(col);
      // console.log(thisRow);
      for ( let row = 0; row < n; row++ ) {
        if ( thisRow[row] === 0) {
          solution.togglePiece(row, col);
          // console.log(solution);
          if ( solution.hasAnyRooksConflicts() === false  && solved === false ) {
            // console.log('no conflicts');
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

  //console.log(output);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return output;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = new Board({n: n}); //fixme

  //console.log(solution);
  let solutions = [];


  if ( n === 1 ) return 1;

  //console.log(solution.rows());

  // solution.togglePiece(0,0);
  // console.log(solution.rows());

  for ( let a = 0; a < n; a++ ) {
    solution = new Board({n: n});
    //console.log(a);
    //console.log(solution.rows());
    solution.togglePiece(0, a);
    // console.log(solution);
    //console.log('ran initializer');
    console.log(solution.rows());
    solver(1);
    //solution.togglePiece(0, a);
  }

  function solver(count){
    console.log(`solving with count ${count}`);
    let added = false;
    for ( let row = 1; row < n; row++ ) {
      let thisRow = solution.get(row);
      //console.log(thisRow);
      for ( let col = 0; col < n; col++ ) {
        if ( thisRow[col] === 0) {
          //console.log({row, col});
          solution.togglePiece(row, col);
          //console.log(solution.rows());
          if ( solution.hasAnyRooksConflicts() === false ) {
            console.log('no conflicts');
            added = true;
            if (count + 1 === n) {
              console.log('found one solution');
              // console.log(count);
              solutions.push(solution.rows());
              //solution.togglePiece(row, col);
            }
            
          } else {
            //console.log(solution)
            solution.togglePiece(row, col);
          }
        }
        if ( added ) {
          if ( count + 1 < n ) {
            solver( count + 1 );
          }
        }
      }
      //if ( added ) break;
    }

    console.log(`count is ${count} and current board is`);
    console.log(solution.rows());

    // if ( count + 1 < n ) {
    //   solver(count + 1);
    // }
  }

  // //solver(0);

  console.log(solutions);

  console.log('Number of solutions for ' + n + ' rooks:', solutions.length);
  return solutions.length;
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
