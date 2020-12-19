/**
 ** 5. Longest Palindromic Substring
 ** Medium
 ** https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

Example 3:

Input: s = "a"
Output: "a"

Example 4:

Input: s = "ac"
Output: "a"

 

Constraints:

    1 <= s.length <= 1000
    s consist of only digits and English letters (lower-case and/or upper-case),
 */

const longestPalindromicSubstring = (s) => {
    // theres a technique to this:
    // check left and right from a middle
    // run twice because palindrome can have 1 center or 2 chars for its center
    // then compare the two palindromes and get longer one
    // save longer into result, updating it if its longer

    if (s.length < 2) return s;
    let result = '';

    const helper = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    };

    for (let i = 0; i < s.length; i++) {
        // get center for palindrome
        let single = helper(s, i, i);
        let double = helper(s, i, i + 1);

        // get longer of the two
        let longerPalindrome = single.length > double.length ? single : double;

        // save to result
        if (longerPalindrome.length > result.length) result = longerPalindrome;
    }

    return result;
};

const s = 'cccccc';
// const s = 'abbbaaaa';
// const s = 'aca';
// const s = 'aab';
// const s = 'babad';
console.log(longestPalindromicSubstring(s));
