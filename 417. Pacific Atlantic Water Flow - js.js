/**
 * 417. Pacific Atlantic Water Flow
Medium

Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:

    The order of returned grid coordinates does not matter.
    Both m and n are less than 150.

 

Example:

Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).

https://leetcode.com/problems/pacific-atlantic-water-flow/
 */

const waterFlow = (matrix) => {
    let reachesBoth = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            // console.log(matrix[i][j]);
            let pacific = { value: false };
            let atlantic = { value: false };
            let value = matrix[i][j];
            let newSet = new Set();
            dfs(matrix, value, i, j, pacific, atlantic, newSet);

            if (pacific.value && atlantic.value) {
                // console.log('this coordinate is good ->', i, j);
                reachesBoth.push([i, j]);
            }
        }
    }
    return reachesBoth;
};

/**
 * newSet -> save a cache of coordinates we have been through, backtracking
 *        -> once we are done, we delete our current coordinate (so other iterations can use that coordinate)
 * pacific and atlantic -> use value as objects so they are passed by reference and its true value is referenced instead of a new copy if not an object
 */
const dfs = (matrix, pastValue, i, j, pacific, atlantic, newSet) => {
    // bounds and water constraints
    if (i < 0 || i > matrix.length || j < 0 || j > matrix[0].length) {
        return;
    }
    if (pastValue < matrix[i][j]) {
        return;
    }
    if (newSet.has([i, j].toString())) {
        return;
    }

    newSet.add([i, j].toString());

    if (i + 1 < matrix.length && matrix[i + 1][j] <= matrix[i][j]) {
        // console.log('matrix[i + 1][j] ->', i, j, '->', i + 1, j);
        dfs(matrix, matrix[i][j], i + 1, j, pacific, atlantic, newSet);
    }
    if (i - 1 >= 0 && matrix[i - 1][j] <= matrix[i][j]) {
        // console.log('matrix[i + 1][j] ->', i, j, '->', i - 1, j);
        dfs(matrix, matrix[i][j], i - 1, j, pacific, atlantic, newSet);
    }
    if (j + 1 < matrix[0].length && matrix[i][j + 1] <= matrix[i][j]) {
        // console.log('matrix[i + 1][j] ->', i, j, '->', i, j + 1);
        dfs(matrix, matrix[i][j], i, j + 1, pacific, atlantic, newSet);
    }
    if (j - 1 >= 0 && matrix[i][j - 1] <= matrix[i][j]) {
        // console.log('matrix[i + 1][j] ->', i, j, '->', i, j - 1);
        dfs(matrix, matrix[i][j], i, j - 1, pacific, atlantic, newSet);
    }

    newSet.delete([i, j].toString());

    if (i === 0 || j === 0) {
        // in pacific
        pacific.value = true;
    }
    if (i === matrix.length - 1 || j === matrix[0].length - 1) {
        // in atlantic
        atlantic.value = true;
    }
};

let matrix = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
];
console.log(waterFlow(matrix));
