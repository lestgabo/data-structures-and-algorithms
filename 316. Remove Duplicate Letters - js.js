/**
 ** 316. Remove Duplicate Letters
 ** Medium
 ** https://leetcode.com/problems/remove-duplicate-letters/

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

 

Example 1:

Input: s = "bcabc"
Output: "abc"

Example 2:

Input: s = "cbacdcbc"
Output: "acdb"

 

Constraints:

    1 <= s.length <= 104
    s consists of lowercase English letters.


 */

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    // use isInStack to compare current letter with stack top
    // use hash to store number of letters
    let letterCount = {};
    let isInStack = {};
    let stack = [];

    // init
    for (let i = 0; i < s.length; i++) {
        if (!letterCount[s[i]]) {
            letterCount[s[i]] = 0;
        }
        letterCount[s[i]] += 1;
        isInStack[s[i]] = false;
    }

    console.log('letterCount: ', letterCount);
    console.log('isInStack: ', isInStack);

    // iterate through string
    for (let i = 0; i < s.length; i++) {
        let currentLetter = s[i];
        let stackTop = stack[stack.length - 1];

        // decrement counter for letter found
        letterCount[currentLetter] -= 1;

        if (isInStack[currentLetter]) {
            // letter is in stack, skip
            continue;
        }

        // lexicographical order, abcd... b > a, or a < b
        if (currentLetter < stackTop) {
            // e.g. a < b, so we go in
            while (currentLetter < stackTop && letterCount[stackTop] > 0) {
                // remove the bigger letter from top stack
                isInStack[stack.pop()] = false;
                stackTop = stack[stack.length - 1];
            }
        }

        // push currentletter to stack
        isInStack[currentLetter] = true;
        stack.push(currentLetter);
        console.log('stack: ', stack);
    }
    return stack.join('');
};

const s = 'cbacdcbc'; //Output: "acdb"
console.log(removeDuplicateLetters(s));
