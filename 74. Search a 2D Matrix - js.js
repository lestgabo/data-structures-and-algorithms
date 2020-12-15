/**
 ** 74. Search a 2D Matrix
 ** Medium
 ** https://leetcode.com/problems/search-a-2d-matrix/

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.

 
Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
Output: false

Example 3:

Input: matrix = [], target = 0
Output: false

 
Constraints:

    m == matrix.length
    n == matrix[i].length
    0 <= m, n <= 100
    -104 <= matrix[i][j], target <= 104
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//  correct way is to use binary search?
const searchMatrix = (matrix, target) => {
    // console.log(matrix);
    if (matrix.length === 0) return false;
    // only one row
    if (matrix.length === 1) {
        return matrix[0].includes(target);
    }
    // try saving first integers on each row
    // iterate through the first integers comparing them to the target
    // compare target with 2 indexes at a time, current and next
    // stop at row where firstInteger[current] < target < firstInteger[next]
    // if target lesser than firstIntegers[0] then return false
    // if target larger than firstIntegers[matrix.length-1] then search through that row only
    let firstIntegers = [];
    let matrixRowToSearch;

    for (let i = 0; i < matrix.length; i++) {
        firstIntegers.push(matrix[i][0]);
    }
    // edge
    if (firstIntegers[0] > target) return false;

    // console.log(firstIntegers);
    for (let i = 0; i < firstIntegers.length - 1; i++) {
        let curr = firstIntegers[i];
        let next = firstIntegers[i + 1];
        // console.log('curr: ', curr);
        // console.log('target: ', target);
        // console.log('next: ', next);
        if (curr <= target) {
            if (target === next) {
                matrixRowToSearch = i + 1;
            } else {
                matrixRowToSearch = i;
            }
        }
        // last iteration and target still bigger than next
        if (i === firstIntegers.length - 2 && target >= next) {
            matrixRowToSearch = i + 1;
        }
    }

    // console.log('matrixRowToSearch: ', matrixRowToSearch);
    return matrix[matrixRowToSearch].includes(target);
};

// const matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50],
// ];
// const target = 16;
const matrix = [[1], [3]];
const target = 1;
console.log(searchMatrix(matrix, target));
