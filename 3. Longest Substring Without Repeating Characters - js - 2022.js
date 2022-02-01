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

// tip: substring means unbroken string inside a string -> pointed out in example 3 
var lengthOfLongestSubstring = function (s) {
    // queue
    // set
    // if char in set then shift the queue until char is not in queue anymore
    // if char not in set then add char into set
    // then add the current char into the queue
    // then find max length between the existing longest queue and current iteration queue 
    
    let myQueue = [];
    let mySet = new Set();
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (mySet.has(char)){
            while (myQueue.includes(char)) {
                myQueue.shift();
            }
        } else {
            mySet.add(char);
        }
        myQueue.push(char)
        maxLength = Math.max(maxLength, myQueue.length);
    }
    return maxLength;
};

const s = 'abcadefg';
// const s = 'abcabcbb';
// const s = '';
console.log(lengthOfLongestSubstring(s));
