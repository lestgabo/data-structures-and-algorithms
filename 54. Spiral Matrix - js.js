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

    let result = [];
    let i = 0,
        j = 0;
    let direction = 'right'; // ['right', 'down', 'left', 'up'];
    let numbersFound = new Set();
    let matrixMSize = matrix.length;
    let matrixNSize = matrix[0].length;
    let numbersNeeded = matrixMSize * matrixNSize;

    while (numbersFound.size < numbersNeeded) {
        let numberCoordinate = `${i}-${j}`;
        console.log('-- new iteration --');
        console.log('numberCoordinate: ', numberCoordinate);
        console.log('current direction: ', direction);
        console.log('matrix[i][j]: ', matrix[i][j]);
        if (numbersFound.has(numberCoordinate) === false && matrix[i][j] !== undefined) {
            numbersFound.add(numberCoordinate);
            result.push(matrix[i][j]);
        }
        console.log('result: ', result);
        // going right, will be inside matrix, number not yet in set
        if (direction === 'right' && j + 1 < matrixNSize && numbersFound.has(`${i}-${j + 1}`) === false) {
            j++;
        }
        // going right, will not be inside matrix or number in set
        else if (direction === 'right' && (j + 1 >= matrixNSize || numbersFound.has(`${i}-${j + 1}`) === true)) {
            i++;
            direction = 'down';
            // console.log('REACHED DIRECTION CHANGE');
        }
        // going down, will be inside matrix, number not yet in set
        else if (direction === 'down' && i + 1 < matrixMSize && numbersFound.has(`${i + 1}-${j}`) === false) {
            i++;
        }
        // going down, will not be inside matrix or number in set
        else if (direction === 'down' && (i + 1 >= matrixMSize || numbersFound.has(`${i + 1}-${j}`) === true)) {
            j--;
            direction = 'left';
            // console.log('REACHED DIRECTION CHANGE');
        }
        // going left, will be inside matrix, number not yet in set
        else if (direction === 'left' && j - 1 >= 0 && numbersFound.has(`${i}-${j - 1}`) === false) {
            j--;
        }
        // going left, will not be inside matrix or number in set
        else if (direction === 'left' && (j - 1 < 0 || numbersFound.has(`${i}-${j - 1}`) === true)) {
            i--;
            direction = 'up';
            // console.log('REACHED DIRECTION CHANGE');
        }
        // going up, will be inside matrix, number not yet in set
        else if (direction === 'up' && i - 1 >= 0 && numbersFound.has(`${i - 1}-${j}`) === false) {
            i--;
        }
        // going up, will not be inside matrix or number in set
        else if (direction === 'up' && (i - 1 < 0 || numbersFound.has(`${i - 1}-${j}`) === true)) {
            j++;
            direction = 'right';
            // console.log('REACHED DIRECTION CHANGE');
        } else {
            // console.log('reached the last else');
        }

        // console.log('set: ', numbersFound);
    }
    // console.log('result: ', result);
    return result;
};

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]; //expected:  [1,2,3,6,9,8,7,4,5]
// matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
// ]; //expeceted: [1,2,3,4,8,12,11,10,9,5,6,7]
matrix = [
    [2, 5],
    [8, 4],
    [0, -1],
];
console.log(solution(matrix));
