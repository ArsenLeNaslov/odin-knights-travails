const { validatePosition, bfsKnightShortestPath, reconstructPath } = require('./graph');

/** Find the shortest sequence of knight moves between start and end.
 * Logs the result and returns an object with moves count and path.
 *
 * @param {number[]} start - [x, y]
 * @param {number[]} end - [x, y]
 * @returns {{ moves: number, path: number[][] }} */
function knightMoves(start, end) {
  validatePosition(start, 'start');
  validatePosition(end, 'end');

  const parents = bfsKnightShortestPath(start, end);
  const path = reconstructPath(parents, end);
  const moves = path.length - 1;

  logResult(moves, path);

  return {
    moves,
    path,
  };
}

/** Log the result in the style suggested by the Odin Project.
 * Example:
 *   You made it in 3 moves! Here's your path:
 *   [0,0]
 *   [1,2]
 *   [3,3]
 *   [4,5]
 *
 * @param {number} moves
 * @param {number[][]} path */
function logResult(moves, path) {
  console.log(`You made it in ${moves} move${moves === 1 ? '' : 's'}! Here's your path:`);
  path.forEach((coords) => {
    console.log(`[${coords[0]},${coords[1]}]`);
  });
}

module.exports = {
  knightMoves,
};
