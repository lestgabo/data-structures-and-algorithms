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

/**
 *
 * @param {number[][]} matrix
 * @return {number[]} coordinates
 */

const pacificAtlantic = (matrix) => {
    if (matrix.length === 0) return [];

    let rowLength = matrix.length;
    let colLength = matrix[0].length;

    // initialize oceans with 0s
    let pacific = Array(rowLength)
        .fill()
        .map(() => Array(colLength).fill(0));
    let atlantic = Array(rowLength)
        .fill()
        .map(() => Array(colLength).fill(0));

    const dfs = (matrix, pastValue, i, j, ocean) => {
        // bounds and water constraints
        if (i < 0 || i > matrix.length - 1 || j < 0 || j > matrix[0].length - 1) {
            return;
        } else if (matrix[i][j] < pastValue) {
            return;
        } else if (ocean[i][j] === 1) {
            return;
        }
        // make into 1, meaning its been passed through
        ocean[i][j] = 1;

        // console.log(ocean);
        // console.log('i j', i, j);
        // console.log('matrix[i][j],', matrix[i][j]);
        // console.log('pastValue,', pastValue);

        dfs(matrix, matrix[i][j], i, j - 1, ocean);
        dfs(matrix, matrix[i][j], i, j + 1, ocean);
        dfs(matrix, matrix[i][j], i - 1, j, ocean);
        dfs(matrix, matrix[i][j], i + 1, j, ocean);
    };

    // left and right
    for (let i = 0; i < rowLength; i++) {
        dfs(matrix, 0, i, 0, pacific);
        dfs(matrix, 0, i, colLength - 1, atlantic);
    }
    // up and down
    for (let j = 0; j < colLength; j++) {
        dfs(matrix, 0, 0, j, pacific);
        dfs(matrix, 0, rowLength - 1, j, atlantic);
    }

    // console.log(pacific);
    // console.log(atlantic);
    let answer = [];
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (pacific[i][j] === 1 && atlantic[i][j] === 1) {
                answer.push([i, j]);
            }
        }
    }
    return answer;
};

let matrix = [
    [3, 3, 3],
    [3, 1, 3],
    [0, 2, 4],
]; //[[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]
// let matrix = [];
// let matrix = [
//     [1, 2, 2, 3, 5],
//     [3, 2, 3, 4, 4],
//     [2, 4, 5, 3, 1],
//     [6, 7, 1, 4, 5],
//     [5, 1, 1, 2, 4],
// ];
// let matrix = [[1,2,3,4,5,6,7,8,9,10,11,12],[44,45,46,47,48,49,50,51,52,53,54,13],[43,80,81,82,83,84,85,86,87,88,55,14],[42,79,108,109,110,111,112,113,114,89,56,15],[41,78,107,128,129,130,131,132,115,90,57,16],[40,77,106,127,140,141,142,133,116,91,58,17],[39,76,105,126,139,144,143,134,117,92,59,18],[38,75,104,125,138,137,136,135,118,93,60,19],[37,74,103,124,123,122,121,120,119,94,61,20],[36,73,102,101,100,99,98,97,96,95,62,21],[35,72,71,70,69,68,67,66,65,64,63,22],[34,33,32,31,30,29,28,27,26,25,24,23]]
console.log(waterFlow(matrix));
