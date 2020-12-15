/**
 ** 200. Number of Islands
 ** Medium
 ** https://leetcode.com/problems/number-of-islands/

Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 
Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3


Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 300
    grid[i][j] is '0' or '1'.
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    // use dfs
    // call dfs on each element that we find land on
    // each time dfs is called in top later, counter increments
    // technique: while in dfs - if find land, make it water (collapse it)
    // dfs will only go through land from top, left, right, down
    // inside dfs, return if out of bounds AND IMPORTANTLY if grid is water

    const dfsHelper = (grid, row, col) => {
        // boundaries -> the grid check for water is very important
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') {
            return;
        }
        // flatten land into water
        if (grid[row][col] === '1') {
            grid[row][col] = '0';
        }
        // console.log('row: ', row);
        // console.log('col: ', col);
        // console.log('grid[row][col]: ', grid[row][col]);

        // go to neighbors to check for '1's
        dfsHelper(grid, row + 1, col);
        dfsHelper(grid, row - 1, col);
        dfsHelper(grid, row, col + 1);
        dfsHelper(grid, row, col - 1);
    };

    let counter = 0;
    if (grid.length === 0) return 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            // found land
            if (grid[row][col] === '1') {
                dfsHelper(grid, row, col);
                counter++;
                // console.log('counter: ', counter);
                // console.log('grid: ', grid);
            }
        }
    }
    return counter;
};

// const grid = [
//     ['1', '1', '1', '1', '0'],
//     ['1', '1', '0', '1', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '0', '0', '0'],
// ];
const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '1'],
];
console.log(numIslands(grid));
