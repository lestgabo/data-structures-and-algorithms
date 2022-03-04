/**
 ** 200. Number of Islands
 ** Medium
 ** https://leetcode.com/problems/number-of-islands/

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands 
horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 
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
const numIslands = (grid) => {
    // use dfs
    // call dfs on each element that we find land on
    // each time dfs is called in top later, counter increments
    // technique: while in dfs - if find land, make it water (collapse it)
    // dfs will only go through land from top, left, right, down
    // inside dfs, return if out of bounds AND IMPORTANTLY if grid is water

    /**    
     * 2022 notes:
     * - use DFS (depth-first search)
     * - an easy technique to do this is to flatten out any islands found
     * - for each island being flattened, we increment a counter
     * - flattened means we turn each cell adjacent (up down left right) from "1" to "0", land to water, using DFS
     * - and so when we move on in the next iterations, that island wont be recounted
     *   because it has been flattened or turned into water
     * - should at worst be a O(n^2) time complexity because we go through matrix once
     *   and go through matrix again if island adjacents found
     * - O(1) for space complexity as we are modifying the grid directly
     */

    const helper = (grid, i, j) => {
        // boundary check
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return;

        // flatten
        if (grid[i][j] === '1') grid[i][j] = '0';

        // DFS up down left right
        helper(grid, i - 1, j);
        helper(grid, i + 1, j);
        helper(grid, i, j - 1);
        helper(grid, i, j + 1);
    }

    let counter = 0;

    // console.log('grid: ', grid)

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                helper(grid, i, j);
                counter += 1;
            }
        }
    }
    
    // console.log('grid: ', grid)

    return counter;
};

const grid = [
    ["1","0","0","1","1","1","0","1","1","0","0","0","0","0","0","0","0","0","0","0"],
    ["1","0","0","1","1","0","0","1","0","0","0","1","0","1","0","1","0","0","1","0"],
    ["0","0","0","1","1","1","1","0","1","0","1","1","0","0","0","0","1","0","1","0"],
    ["0","0","0","1","1","0","0","1","0","0","0","1","1","1","0","0","1","0","0","1"],
    ["0","0","0","0","0","0","0","1","1","1","0","0","0","0","0","0","0","0","0","0"],
    ["1","0","0","0","0","1","0","1","0","1","1","0","0","0","0","0","0","1","0","1"],
    ["0","0","0","1","0","0","0","1","0","1","0","1","0","1","0","1","0","1","0","1"],
    ["0","0","0","1","0","1","0","0","1","1","0","1","0","1","1","0","1","1","1","0"],
    ["0","0","0","0","1","0","0","1","1","0","0","0","0","1","0","0","0","1","0","1"],
    ["0","0","1","0","0","1","0","0","0","0","0","1","0","0","1","0","0","0","1","0"],
    ["1","0","0","1","0","0","0","0","0","0","0","1","0","0","1","0","1","0","1","0"],
    ["0","1","0","0","0","1","0","1","0","1","1","0","1","1","1","0","1","1","0","0"],
    ["1","1","0","1","0","0","0","0","1","0","0","0","0","0","0","1","0","0","0","1"],
    ["0","1","0","0","1","1","1","0","0","0","1","1","1","1","1","0","1","0","0","0"],
    ["0","0","1","1","1","0","0","0","1","1","0","0","0","1","0","1","0","0","0","0"],
    ["1","0","0","1","0","1","0","0","0","0","1","0","0","0","1","0","1","0","1","1"],
    ["1","0","1","0","0","0","0","0","0","1","0","0","0","1","0","1","0","0","0","0"],
    ["0","1","1","0","0","0","1","1","1","0","1","0","1","0","1","1","1","1","0","0"],
    ["0","1","0","0","0","0","1","1","0","0","1","0","1","0","0","1","0","0","1","1"],
    ["0","0","0","0","0","0","1","1","1","1","0","1","0","0","0","1","1","0","0","0"]]
// const grid = [
//     ['1', '1', '1', '1', '0'],
//     ['1', '1', '0', '1', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '0', '0', '0'],
// ];
// const grid = [
//     ['1', '1', '0', '0', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '1', '0', '0'],
//     ['0', '0', '0', '1', '1'],
// ];
// const grid = [
//     ['1', '1', '1', '1', '0'],
//     ['1', '1', '0', '1', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '1', '0', '1'],
// ];
console.log(numIslands(grid));
