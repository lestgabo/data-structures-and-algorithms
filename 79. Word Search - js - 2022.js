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

const exist = (board, word) => {
    // use dfs to on each neighbor letter -> going deeper if the needed letter is matching
    // iterate through the whole board, speed is O( M x N )

    /**
     * 2022 notes:
     * - use DFS (Depth-First Search) and backtracking to increase efficiency
     * - just use an index to track given "word" and for current cell, we get the next NEEDED letter
     *   by increasing index and move there through DFS if the next letter is in that cell
     * - we'll know we're at the full word iff the index is equal in size to the given word
     * - backtracking is applied using a set, add each visited cell into a set so we can
     *   check if the next DFS is allowed to go there
     * - every cell we are on, we add to the set
     * - once we cannot move anymore through DFS, we delete the current cell from the set, 
     *   freeing the cell and essentially backtracking
     * - inside DFS boundary check is NEEDED
     */

    const helperDFS = (board, word, wordIndex, i, j, backtrackSet, wordFound) => {      
        let currentCell = `${i}${j}`;

        // if boundaries met, end the DFS, free up the current cell in backtrack set
        if (i < 0 || i >= board.length || 
            j < 0 || j >= board[0].length || 
            backtrackSet.has(currentCell) || 
            wordIndex >= word.length ||
            wordFound) {

            backtrackSet.delete(currentCell);
            return wordFound;
        }

        let currentLetter = board[i][j];

        backtrackSet.add(currentCell);

        // word found
        if (currentLetter === word[wordIndex] && wordIndex === word.length) {
            console.log('word was found!')
            wordFound = true;
            return wordFound;
        }

        console.log('currentCell: ', currentCell)
        console.log('backtrackCEll: ', backtrackSet)
        console.log('wordFound: ', wordFound)

        // DFS up down left right
        helperDFS(board, word, wordIndex++, i - 1, j, backtrackSet, wordFound)
        helperDFS(board, word, wordIndex++, i + 1, j, backtrackSet, wordFound)
        helperDFS(board, word, wordIndex++, i, j - 1, backtrackSet, wordFound)
        helperDFS(board, word, wordIndex++, i, j + 1, backtrackSet, wordFound)

        backtrackSet.delete(currentCell);
    };

    let wordFound = false;
    
    // iterate through board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0 ; j < board[0].length; j++) {
            let backtrackSet = new Set();
            let wordIndex = 0;

            wordFound = helperDFS(board, word, wordIndex, i, j, backtrackSet, wordFound);
        }
    }
    console.log('word found: ', wordFound)
    return wordFound;
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
        ["A","B","C","E"],
        ["S","F","C","S"],
        ["A","D","E","E"]]
let word = "SEE" // Output: true

// let board = [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'E', 'S'],
//     ['A', 'D', 'E', 'E'],
// ];
// let word = 'ABCESEEEFS'; // expected: true

console.log(exist(board, word));
