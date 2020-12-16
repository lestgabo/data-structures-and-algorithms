/**
 ** 348. Design Tic-Tac-Toe
 ** Medium
 ** https://leetcode.com/problems/design-tic-tac-toe/

Assume the following rules are for the tic-tac-toe game on an n x n board between two players:

    A move is guaranteed to be valid and is placed on an empty block.
    Once a winning condition is reached, no more moves are allowed.
    A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.

Implement the TicTacToe class:

    TicTacToe(int n) Initializes the object the size of the board n.
    int move(int row, int col, int player) Indicates that player with id player plays at the cell (row, col) of the board. The move is guaranteed to be a valid move.

Follow up:
Could you do better than O(n2) per move() operation?

 

Example 1:

Input
["TicTacToe", "move", "move", "move", "move", "move", "move", "move"]
[[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]]
Output
[null, 0, 0, 0, 0, 0, 0, 1]

Explanation
TicTacToe ticTacToe = new TicTacToe(3);
Assume that player 1 is "X" and player 2 is "O" in the board.
ticTacToe.move(0, 0, 1); // return 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

ticTacToe.move(0, 2, 2); // return 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

ticTacToe.move(2, 2, 1); // return 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

ticTacToe.move(1, 1, 2); // return 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

ticTacToe.move(2, 0, 1); // return 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

ticTacToe.move(1, 0, 2); // return 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

ticTacToe.move(2, 1, 1); // return 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|

 

Constraints:

    2 <= n <= 100
    player is 1 or 2.
    1 <= row, col <= n
    (row, col) are unique for each different call to move.
    At most n2 calls will be made to move.


 */

/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function (n) {
    this.len = n;
    this.row = {};
    this.col = {};
    this.diag = 0;
    this.revDiag = 0;
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, col, player) {
    /**
     * 
     * We keep sum for every row, column, diagonal, reverse diagonal. No need to have the actual board in memory.
    For player one move, we can add 1 to the sum and for player 2 we can deduct 1;
    When any sum reaches the size of the board we return the winning player.
     */
    // console.log('row: ', row);
    // console.log('col: ', col);
    // console.log('player: ', player);

    let playerValue;
    if (player === 1) {
        playerValue = 1;
    } else {
        playerValue = -1;
    }

    if (this.row[row]) {
        this.row[row] += playerValue;
    } else {
        this.row[row] = playerValue;
    }
    if (this.col[col]) {
        this.col[col] += playerValue;
    } else {
        this.col[col] = playerValue;
    }
    if (row === col) this.diag += playerValue;
    if (row + col === this.len - 1) this.revDiag += playerValue;

    // found winner because either player 1 or 2 reached either: 3 row, 3 col, 3 diag, 3 revDiag
    if (
        Math.abs(this.row[row]) === this.len ||
        Math.abs(this.col[col]) === this.len ||
        Math.abs(this.diag) === this.len ||
        Math.abs(this.revDiag) === this.len
    ) {
        return player;
    }
    // no player won yet
    return 0;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

['TicTacToe', 'move', 'move', 'move', 'move', 'move', 'move', 'move'];
let input = [[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]];
const start = new TicTacToe(input[0][0]);
console.log('input[0][0]: ', input[0][0]);
for (let i = 1; i < input.length; i++) {
    console.log('input[i]: ', input[i]);

    const [row, col, player] = input[i];

    console.log(start.move(row, col, player));
}
