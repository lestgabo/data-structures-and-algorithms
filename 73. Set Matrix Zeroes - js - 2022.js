/**
 ** 73. Set Matrix Zeroes
 ** Medium
 ** https://leetcode.com/problems/set-matrix-zeroes/

Given an m x n integer matrix matrix, if an element is 0, 
set its entire row and column to 0's.
You must do it in place.

 
Example 1:

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]


Constraints:

    m == matrix.length
    n == matrix[0].length
    1 <= m, n <= 200
    -231 <= matrix[i][j] <= 231 - 1

 
Follow up:

    A straightforward solution using O(mn) space is probably a bad idea.
    A simple improvement uses O(m + n) space, but still not the best solution.
    Could you devise a constant space solution?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 const setZeroes = (matrix) => {
    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    let firstRow = false;
    let firstCol = false;

    // check first if the first row or column HAD a 0 before it was modified
    // this is needed if we need to update to 0 the whole first row or column in the end
    for (let i = 0; i < rowLength; i++) { 
        if (matrix[i][0] === 0) firstCol = true;
    }
    for (let j = 0; j < colLength; j++) {
        if (matrix[0][j] === 0) firstRow = true;
    }

    // first pass -> if cell is 0 modify first row and col to be 0
    // start at [1,1] because we dont want to mess with or first row and column checks
    for (let i = 1; i < rowLength; i++) {
        for (let j = 1; j < colLength; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0; 
                matrix[i][0] = 0;
            }
        }
    }

    // console.log('first pass matrix: ' ,matrix)

    // second pass -> make cells 0s if its first row/col is 0
    for (let i = 1; i < rowLength; i++) {
        for (let j = 1; j < colLength; j++) {
            // use first row or col as 0 check
            if (matrix[0][j] === 0 || matrix[i][0] === 0) {
                matrix[i][j] = 0; 
            }
        }
    }

    // console.log('second pass matrix: ' ,matrix)

    // lastly, make first row and/or col 0s of they have zeroes in them
    for (let i = 0; i < rowLength; i++) { 
        if (firstCol === true) matrix[i][0] = 0;
    }
    for (let j = 0; j < colLength; j++) {
        if (firstRow === true) matrix[0][j] = 0;
    }

    // console.log('firstRow: ', firstRow)
    // console.log('firstCol: ', firstCol)

    return matrix;
};

// Input: matrix = [
//         [1,0,1],
//         [1,1,1],
        // [1,1,0]]
// Output: [
//      [0,0,0],
//      [1,0,0],
//      [0,0,0]
// ]

// Input: matrix = [
//         [1,1,1],
//         [1,0,1],
//         [1,1,1]]
// Output: [
//      [1,0,1],
//      [0,0,0],
//      [1,0,1]
// ]

Input: matrix = [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

console.log(setZeroes(matrix));

const setZeroes_space_inefficient = (matrix) => {
    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    let markedRows = [];
    let markedCols = [];

    // mark or add row and col indexes into marked variable if 0s found
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (matrix[i][j] === 0) {
                markedRows.push(i);
                markedCols.push(j);
            }
        }
    }
    
    // console.log('markedRows: ', markedRows)
    // console.log('markedCols: ', markedCols)
    // console.log('has: ', markedRows.includes(0)) // true
    // console.log('has: ', markedRows.includes(2)) // false

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            // checks if current row or column is marked 
            if (markedRows.includes(i) || markedCols.includes(j)) {
                matrix[i][j] = 0;
            }
        }
    }

    // console.log('new matrix: ' ,matrix)
    return matrix;
};
