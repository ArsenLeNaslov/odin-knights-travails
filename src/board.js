/** Create an 8x8 chess board representation and helpers. 
 *  Coordinates are [x, y] with x, y in [0, 7]. */

const BOARD_SIZE = 8;

/** Check if a coordinate is inside the board.
 * @param {number[]} position - [x, y]
 * @returns {boolean}  */
function isWithinBoard(position) {
  if (!Array.isArray(position) || position.length !== 2) return false;

  const [x, y] = position;
  return (
    Number.isInteger(x) &&
    Number.isInteger(y) &&
    x >= 0 &&
    x < BOARD_SIZE &&
    y >= 0 &&
    y < BOARD_SIZE
  );
}

/** Generate all board squares as coordinate pairs.
 * @returns {number[][]} */
function getAllSquares() {
  const squares = [];

  for (let x = 0; x < BOARD_SIZE; x += 1) {
    for (let y = 0; y < BOARD_SIZE; y += 1) {
      squares.push([x, y]);
    }
  }

  return squares;
}

module.exports = {
  BOARD_SIZE,
  isWithinBoard,
  getAllSquares,
};
