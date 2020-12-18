/**
    ** 3. Longest Substring Without Repeating Characters
    ** Medium
    ** https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:

Input: s = ""
Output: 0

 

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.


 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // queue
    // set
    // while char already in set, shift the queue until not in queue
    // return joined stack as answer
    let myQueue = [];
    let maxLength = 0;
    let mySet = new Set();
    for (char of s) {
        console.log('char: ', char);
        console.log('mySet: ', mySet);
        console.log('myQueue: ', myQueue);
        if (!mySet.has(char)) {
            myQueue.push(char);
            mySet.add(char);
        } else {
            console.log('mySet.has(char): ', mySet.has(char));
            while (myQueue.includes(char)) {
                myQueue.shift();
                console.log('myQueue INSIDE WHILE: ', myQueue);
            }
            myQueue.push(char);
        }
        maxLength = Math.max(maxLength, myQueue.length);
    }
    return maxLength;
};

// const s = 'abcadefg';
// const s = 'abcabcbb';
const s = '';
console.log(lengthOfLongestSubstring(s));
