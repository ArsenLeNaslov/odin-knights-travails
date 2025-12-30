const { isWithinBoard } = require('./board');

/** All possible relative knight moves from a given square.
 * Represented as [dx, dy]. */
const KNIGHT_OFFSETS = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

/** Get all legal knight moves from a given position on the board.
 * @param {number[]} position - [x, y]
 * @returns {number[][]} array of [x, y] positions */
function getKnightMoves(position) {
  const [x, y] = position;

  return KNIGHT_OFFSETS.map(([dx, dy]) => [x + dx, y + dy]).filter(
    isWithinBoard,
  );
}

module.exports = {
  KNIGHT_OFFSETS,
  getKnightMoves,
};
