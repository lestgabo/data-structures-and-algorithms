/**
 ** 48. Rotate Image
 ** Medium
 ** https://leetcode.com/problems/rotate-image/
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

 

Constraints:

    n == matrix.length == matrix[i].length
    1 <= n <= 20
    -1000 <= matrix[i][j] <= 1000

 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 const rotate = (matrix) => {
    /**
     * keywords: Transpose
     *  - the special trick is to traverse the matrix only when j < i to swap the matrix values only once 
     *  - another special trick is to just reverse the order of the values in the rows 
     *    when wanting to inverse of the matrix, its similar to reversing the order of the columns 
     * 
     */
    // obviously the same because nxn matrix, but just want to differentiate
    const numberOfRows = matrix.length;
    const numberOfColumns = matrix[0].length;

    // i => row; j => column
    for (let i = 0; i < numberOfRows; i++) {
        // this is the trick, j < i, allowing to only check then swap the opposites once
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;

            // console.log('i: ', i)
            // console.log('j: ', j)
            // console.log('current coordinate: ', i, j)
            // console.log('current coordinate val: ', matrix[i][j])
            // console.log('current coordinate temp: ', temp)
            // console.log('****')
        }
    }

    // reverse the rows -> this is basically same as reversing the order of the columns
    for (let i = 0; i < numberOfRows; i++) {
        matrix[i].reverse();
    }

    return matrix;
};

    /**
     *transpose out: [
            [1,4,7],
            [2,5,8],
            [3,6,9]]
     
    transposed * inversed out: [
            [7,4,1],
            [8,5,2],
            [9,6,3]]

    */
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]] 
    /**
     *  out: [
    *       [7,4,1],
*           [8,5,2],
            [9,6,3]]
     */
   
console.log(rotate(matrix));
