## Odin's Knights Travails

Given a standard 8x8 chessboard, it computes the **shortest sequence of legal knight moves** from a starting square to a target square using **breadth-first search (BFS)**.

Referencing Odin's Project: [Knights Travails](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Function

### `knightMoves(start, end)`

- **Parameters:**
  - `start`: `[x, y]` coordinate of the starting square (0–7)
  - `end`: `[x, y]` coordinate of the target square (0–7)

- **Behavior:**
  - Validates coordinates are on the board.
  - Treats each square as a node in an implicit graph.
  - Uses **BFS** to find the shortest path using legal knight moves.
  - **Logs** the result like:

    ```text
    You made it in 3 moves! Here's your path:
    [0,0]
    [1,2]
    [3,3]
    [4,5]
    ```

  - **Returns**:

    ```js
    {
      moves: 3,
      path: [
        [0, 0],
        [1, 2],
        [3, 3],
        [4, 5],
      ],
    }
    ```

---

## Project structure

```text
knights-travails/
  ├── src/
  │   ├── board.js          # board helpers and validation
  │   ├── knight.js         # knight move generation
  │   ├── graph.js          # BFS and path reconstruction utilities
  │   └── knightTravails.js # knightMoves main function
  ├── index.js              # examples / manual test runner
  └── README.md
