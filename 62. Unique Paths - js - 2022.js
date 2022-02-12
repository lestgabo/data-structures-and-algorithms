/**
 ** 62. Unique Paths
 ** Medium
 ** https://leetcode.com/problems/unique-paths/

There is a robot on an m x n grid. The robot is initially located at the top-left corner 
(i.e., grid[0][0]). The robot tries to move to the bottom-right corner 
(i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that
the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.


Example 1:

Input: m = 3, n = 7
Output: 28

Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down


Constraints:
    1 <= m, n <= 100
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
    /**
     * DP - dynamic programming
     * 
     * - since robot can move either down or right:
     *   - there is only one path to reach the cells in the first row
     *   - there is also only path to reach the cells in the first column
     *   - as in, there is only one path they can be accessed from 
     *     because you can't go up or left
     * - for the inner cells, you can reach them from the TOP or LEFT (m-1, n) or (m, n-1)
     * - therefore the total number of paths to move into (m,n) cell is uniquePaths(m-1,n) + uniquePaths(m,n-1)
     * 
     * first approach:
     * - the trick is its a recursive solution
     *   that returns up only when we reach the edge row and columns 
     *   which are the first row and columns that can only be reached from one path
    // only 41 / 63 test cases passed. fails at 51 9 or m=51 n=9
    // at edges, start returning
    if (m === 1 || n === 1) return 1;

    // return sum of left + top path
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
     * 
     * second approach, create the table itself:
     *  - fill first row with 1s
     *  - fill second row with 1s
     *  - get middle cells by adding top and left cells adjacent to current cell
     *
     */

    // fill matrix with 0s
    let solution = Array(m).fill().map(() => Array(n).fill(0));

    // fill first row with 1s
    for ( let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0) {
                solution[i][j] = 1;
            }
        }
    }

    // fill first column with 1s
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0) {
                solution[i][j] = 1;
            }
        }
    }

    // add top and left to get middle cells
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i - 1 >= 0 && j - 1 >= 0) {
                solution[i][j] = solution[i - 1][j] + solution[i][j - 1];
            }
        }
    }

    // console.log('first row: ', solution)
    return solution[m-1][n-1];
};



// Input: m = 3, n = 2 // Output: 3
Input: m = 3, n = 7 // Output: 3

console.log(uniquePaths(m, n));

