const { isWithinBoard } = require('./board');
const { getKnightMoves } = require('./knight');

/** Validate a coordinate as a node in the graph.
 * @param {number[]} position - [x, y] */
function validatePosition(position, label = 'position') {
  if (!Array.isArray(position) || position.length !== 2) {
    throw new Error(`${label} must be an array [x, y]`);
  }

  if (!isWithinBoard(position)) {
    throw new Error(
      `${label} ${JSON.stringify(
        position,
      )} is out of bounds. Coordinates must be between 0 and 7.`,
    );
  }
}

/** Perform a BFS from start to target using knight moves as edges.
 * Returns a parent map that can be used to reconstruct the shortest path.
 *
 * @param {number[]} start - [x, y]
 * @param {number[]} target - [x, y]
 * @returns {Map<string, string|null>} parentMap
 *   key: "x,y"
 *   value: parent coordinate key or null for the root */
function bfsKnightShortestPath(start, target) {
  validatePosition(start, 'start');
  validatePosition(target, 'target');

  const startKey = coordKey(start);
  const targetKey = coordKey(target);

  const queue = [];
  const visited = new Set();
  const parents = new Map();

  queue.push(start);
  visited.add(startKey);
  parents.set(startKey, null);

  while (queue.length > 0) {
    const current = queue.shift();
    const currentKey = coordKey(current);

    if (currentKey === targetKey) {
      return parents;
    }

    const neighbors = getKnightMoves(current);

    neighbors.forEach((neighbor) => {
      const neighborKey = coordKey(neighbor);
      if (!visited.has(neighborKey)) {
        visited.add(neighborKey);
        parents.set(neighborKey, currentKey);
        queue.push(neighbor);
      }
    });
  }

  // On a finite board, BFS should always find a path, but we keep this
  // as a safety net.
  throw new Error('No path found between the given positions.');
}

/**
 * Convert [x, y] coordinate to a string key "x,y".
 * @param {number[]} position
 * @returns {string} */
function coordKey(position) {
  const [x, y] = position;
  return `${x},${y}`;
}

/** Convert a coordinate key "x,y" back to [x, y].
 * @param {string} key
 * @returns {number[]} */
function keyToCoord(key) {
  const [x, y] = key.split(',').map(Number);
  return [x, y];
}

/** Reconstruct the path from start to target using the parent map.
 * Returns the path as an array of coordinates from start to target.
 *
 * @param {Map<string, string|null>} parents
 * @param {number[]} target
 * @returns {number[][]} */
function reconstructPath(parents, target) {
  const targetKey = coordKey(target);

  if (!parents.has(targetKey)) {
    throw new Error('Target not reachable from start according to parent map.');
  }

  const path = [];
  let currentKey = targetKey;

  while (currentKey !== null) {
    path.push(keyToCoord(currentKey));
    currentKey = parents.get(currentKey);
  }

  path.reverse();
  return path;
}

module.exports = {
  validatePosition,
  bfsKnightShortestPath,
  reconstructPath,
  coordKey,
  keyToCoord,
};
