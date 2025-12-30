const { knightMoves } = require('./src/knightTravails');

function runExamples() {
  console.log('Example 1: [0,0] to [1,2]');
  knightMoves([0, 0], [1, 2]);
  console.log('---');

  console.log('Example 2: [0,0] to [3,3]');
  knightMoves([0, 0], [3, 3]);
  console.log('---');

  console.log('Example 3: [3,3] to [4,3]');
  knightMoves([3, 3], [4, 3]);
  console.log('---');

  console.log('Example 4: [0,0] to [7,7]');
  knightMoves([0, 0], [7, 7]);
  console.log('---');
}

runExamples();
