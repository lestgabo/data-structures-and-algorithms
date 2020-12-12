/**
 ** 79. Word Search
 ** Medium
 ** https://leetcode.com/problems/word-search/
 
Given an m x n board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

 

Constraints:

    m == board.length
    n = board[i].length
    1 <= m, n <= 200
    1 <= word.length <= 103
    board and word consists only of lowercase and uppercase English letters.


 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
    // use dfs to on each neighbor letter -> going deeper if the needed letter is matching
    // iterate through the whole board, speed is O( M x N )

    const helperDfs = (board, word, wordIndex, i, j, backTrackSet) => {
        let ij = `${i}-${j}`;
        // boundaries;
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || wordIndex >= word.length || this.wordFound === true) {
            backTrackSet.delete(ij);
            return;
        }

        backTrackSet.add(ij);
        wordIndex++;
        let nextLetter = word[wordIndex];

        console.log('ij: ', ij);
        console.log('backTrackSet.has(ij): ', backTrackSet.has(ij));
        console.log('backTrackSet: ', backTrackSet);

        // found answer
        if (wordIndex === word.length) {
            this.wordFound = true;
            return;
        }

        // need to check if came from somewhere, it cannot go back
        // need to implement backtrack
        // up, down, left, right
        if (i + 1 < board.length && board[i + 1][j] === nextLetter && !backTrackSet.has(`${i + 1}-${j}`)) {
            helperDfs(board, word, wordIndex, i + 1, j, backTrackSet);
        }
        if (i - 1 >= 0 && board[i - 1][j] === nextLetter && !backTrackSet.has(`${i - 1}-${j}`)) {
            helperDfs(board, word, wordIndex, i - 1, j, backTrackSet);
        }
        if (j - 1 >= 0 && board[i][j - 1] === nextLetter && !backTrackSet.has(`${i}-${j - 1}`)) {
            helperDfs(board, word, wordIndex, i, j - 1, backTrackSet);
        }
        if (j + 1 < board[0].length && board[i][j + 1] === nextLetter && !backTrackSet.has(`${i}-${j + 1}`)) {
            helperDfs(board, word, wordIndex, i, j + 1, backTrackSet);
        }
        backTrackSet.delete(ij);
    };

    this.wordFound = false;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0] && this.wordFound === false) {
                let wordIndex = 0;
                let backTrackSet = new Set();
                helperDfs(board, word, wordIndex, i, j, backTrackSet);
            }
        }
    }

    return this.wordFound;
};

// const board = [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'E', 'E', 'D'],
// ];
// const word = 'ABCCED';
// const board = [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E'],
// ];
// const word = 'ABCB'; // expected: false
// let board = [['a', 'b']];
// let word = 'ba'; // expected: true
// let board = [
//     ['a', 'a', 'a', 'a'],
//     ['a', 'a', 'a', 'a'],
//     ['a', 'a', 'a', 'a'],
// ];
// let word = 'aaaaaaaaaaaaa'; // expected: false
// let board = [
//     ['a', 'a'],
//     ['a', 'a'],
// ];
// let word = 'aaaaa'; // expected: false
let board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'E', 'S'],
    ['A', 'D', 'E', 'E'],
];
let word = 'ABCESEEEFS'; // expected: true

console.log(exist(board, word));
