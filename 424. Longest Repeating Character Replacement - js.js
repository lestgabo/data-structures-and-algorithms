/**
 * 424. Longest Repeating Character Replacement
Medium

Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 10^4.

Example 1:

Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.

 

Example 2:

Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

https://leetcode.com/problems/longest-repeating-character-replacement/
 */

const characterReplacement = (s, k) => {
    let left = 0;
    let maxLength = 0;
    let maxCount = 0;
    // tracks count of each character, 26 in english alphabet
    let charCounts = new Array(26);

    if (s === '') return 0;

    for (let right = 0; right < s.length; right++) {
        if (charCounts[s.charCodeAt(right) - 'A'.charCodeAt(0)]) {
            charCounts[s.charCodeAt(right) - 'A'.charCodeAt(0)] += 1;
        } else {
            charCounts[s.charCodeAt(right) - 'A'.charCodeAt(0)] = 1;
        }
        let currentCharCount = charCounts[s.charCodeAt(right) - 'A'.charCodeAt(0)];

        maxCount = Math.max(maxCount, currentCharCount);
        // console.log('currentCharCount ->', currentCharCount);
        // console.log('maxCount ->', maxCount);
        // right - left - maxCount => number of different characters; number of characters we have to change
        // add 1 because we're adding new letter on
        while (right - left - maxCount + 1 > k) {
            charCounts[s.charCodeAt(left) - 'A'.charCodeAt(0)] -= 1;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

let s = 'ABAAABB';
let k = 1;
console.log(characterReplacement(s, k));
