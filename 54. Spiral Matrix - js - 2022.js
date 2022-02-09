/**
 ** 54. Spiral Matrix
 ** Medium
 ** https://leetcode.com/problems/spiral-matrix/

Given an m x n matrix, return all elements of the matrix in spiral order.

 
Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 10
    -100 <= matrix[i][j] <= 100
 */

/**
 ** param  {numbers[][]} matrix
 ** return {number[]}
 */

const solution = (matrix) => {
    // start at top left
    // while loop, exit only when array size for solution is equal to "m x n", or amount of numbers
    // have index i be for rows, j for columns
    // have string "direction" which will be right, down, left, up -> cycle again
    // have set that stores coordinate of numbers found
    // direction will change when boundaries are reached
    // boundaries are: if next iteration is out of bounds or next iteration already in set

    /**
     * 2022 notes:
     * this time we are using a visited matrix filled with 0s and set to 1 when visited
     * - it took me a while wondering why my deeper if else statements couldnt be reached 
     *   but it was because I wasn't bracketing the OR (||) statements together when
     *   I mixed them with an AND (&&). Seeing the boolean values through console.log made me see my error
     */

    if (Array.isArray(matrix) && !matrix.length) return matrix;

    let rowLength = matrix.length;
    let colLength = matrix[0].length;
    // initialize visited array with 0s
    let visited = Array(rowLength).fill().map(() => Array(colLength).fill(0));
    let result = [];
    // using i for rows and j for columns
    let i = 0;
    let j = 0;
    let direction = 'right';

    // console.log('visited start: ', visited)
    // console.log('rowLength: ', rowLength)
    // console.log('colLength: ', colLength)

    while(result.length < rowLength * colLength) {
        // set current cell as visited
        visited[i][j] = 1;
        // push cell value to result
        result.push(matrix[i][j]);

        // console.log('i and j: ', i,j)
        // console.log('visited: ', visited)
        // console.log('direction: ', direction)
        // console.log('right check: ', direction === 'right' && j + 1 < colLength && visited[i][j + 1] === 0);
        // console.log('right boundary check: ', direction === 'right' && (j + 1 >= colLength || visited[i][j + 1] === 1));
        // console.log('down check: ', direction === 'down' && i + 1 < rowLength && visited[i + 1][j] === 0);
        // console.log('down boundary check: ', direction === 'down' && i + 1 >= rowLength || !!visited[i + 1][j] === 1);
        // console.log('left check: ', direction === 'left' && j - 1 > 0 && visited[i][j - 1] === 0);
        // console.log('left boundary check: ', direction === 'left' && j - 1 <= 0 || visited[i][j - 1] === 1);

        // bracketing the the boundary and visited OR is IMPORTANT because either of those can can be false
 
            // going right
        if (direction === 'right' && j + 1 < colLength && visited[i][j + 1] === 0) {
            j++;
        } else if (direction === 'right' && (j + 1 >= colLength || visited[i][j + 1] === 1)) {
            // found boundary, go down
            direction = 'down';
            i++;
        } else if (direction === 'down' && i + 1 < rowLength && visited[i + 1][j] === 0) {
            // going down 
            // i + 1 even though going down because our perspective is in arrays and indexes
            i++;
        } 
        else if (direction === 'down' && (i + 1 >= rowLength || visited[i + 1][j] === 1)) {
            // found boundary, go left
            direction = 'left';
            j--;
        } 
        else if (direction === 'left' && j - 1 >= 0 && visited[i][j - 1] === 0) {
            // going left
            j--;
        } 
        else if (direction === 'left' && (j - 1 < 0 || visited[i][j - 1] === 1)) {
            // found boundary, go up
            direction = 'up';
            i--;
        } 
        else if (direction === 'up' && i - 1 >= 0 && visited[i - 1][j] === 0) {
            // going up
            i--;
        } 
        else if (direction === 'up' && (i - 1 < 0 || visited[i - 1][j] === 1)) {
            // found boundary, go right
            direction = 'right';
            j++;
        }
    }
    // console.log('***************')
    return result;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]; //expected:  [1,2,3,6,9,8,7,4,5]
// matrix = [
//     [1, 2,  3,  4],
//     [5, 6,  7,  8],
//     [9, 10, 11, 12],
// ]; //expeceted: [1,2,3,4,8,12,11,10,9,5,6,7]
// matrix = [
//     [2, 5],
//     [8, 4],
//     [0, -1],
// ];

console.log(solution(matrix));
