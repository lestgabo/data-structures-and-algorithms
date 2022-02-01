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
    // use a helper function that returns a palindrome
    // the trick is that -> as we iterate through s - each char is the middle 
    //   and we also do it again where there are 2 middles so current char + next
    //   and from the middle while the lefts and rights are equal we decrease left and increase right  
    //   return substring s with indexes of left and right -> which will be a palindrome

    const helper = (s, left, right) => {
        // check if left right are equal and boundary check
        while(s[left] === s[right] && left >= 0 && right < s.length ) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    let result = '';
    for (let i = 0; i < s.length; i++){
        let single = helper(s, i, i);
        let double = helper(s, i, i+1);
        // console.log('single: ', single);
        // console.log('double: ', double);
        // console.log('single.length: ', single.length);
        // console.log('double.length: ', double.length);

        // save longer of the two palindromes
        let longerPalindrome = '';
        if (single.length > double.length) {
            longerPalindrome = single;
        } else {
            longerPalindrome = double;
        }
        
        // save to result if longerPalindrome becomes longer in future iterations
        if (longerPalindrome.length > result.length) {
            result = longerPalindrome
        }
    }
    return result
};

// const s = 'cccccc';
const s = 'abbbaaaa';
// const s = 'aca';
// const s = 'aab';
// const s = 'babad';
console.log(longestPalindromicSubstring(s));
