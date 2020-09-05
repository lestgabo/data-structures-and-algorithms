/*
125. Valid Palindrome
Easy

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false

 

Constraints:

    s consists only of printable ASCII characters.

https://leetcode.com/problems/valid-palindrome/

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let temp = s.split('');
    let cleanTemp = [];
    for (i in temp) {
        if (isLetter(temp[i]) && temp[i] !== ' ') {
            cleanTemp.push(temp[i].toLowerCase());
        }
    }
    let original = cleanTemp.join('');
    let reversed = cleanTemp.reverse().join('');
    if (original == reversed) {
        return true;
    } else {
        return false;
    }
};

const isLetter = (c) => {
    // works for most Latin, Greek, Armenian and Cyrillic scripts. It will NOT work for Chinese, Japanese, Arabic, Hebrew and most other scripts
    return !isNaN(c) || c.toLowerCase() != c.toUpperCase();
};

let s = '0P';

// let s = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(s));
