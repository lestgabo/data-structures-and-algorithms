/**
 ** 125. Valid Palindrome
 ** Easy
 ** https://leetcode.com/problems/valid-palindrome/
 * 
 * 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


Constraints:
    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.
 */


/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = (s) => {
    // convert into split chars array so we can use filter 
    let splitString = s.split('');
    /**
     * filter out non-alphanumerics:
       Here ^ means beginning of string and $ means end of string, and 
       [0-9a-z]+ means one or more of character from 0 to 9 OR from a to z.
     */
    let alphanumerics = splitString.filter((c) => c.match(/^[a-zA-Z0-9]+$/) )

    // make reverse and lowercase
    let normal = alphanumerics.join('').toLowerCase();
    let reversed = alphanumerics.reverse().join('').toLowerCase();

    // console.log('alphanumerics: ', alphanumerics)
    // console.log('splitString: ', splitString)
    // console.log('normal: ', normal)
    // console.log('reversed: ', reversed)

    // compare
    for (let i = 0; i < normal.length; i++) {
        if (normal[i] !== reversed[i]) return false
    }
    // valid palindrome
    return true;
};



let s = 'Bananab';
// let s = ' ';
// let s = 'A man, a plan, a canal: Panama';

// let s = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(s));
