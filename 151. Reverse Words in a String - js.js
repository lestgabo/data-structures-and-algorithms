/**
 ** 151. Reverse Words in a String
 ** Medium
 ** https://leetcode.com/problems/reverse-words-in-a-string/

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

Example 4:

Input: s = "  Bob    Loves  Alice   "
Output: "Alice Loves Bob"

Example 5:

Input: s = "Alice does not even like bob"
Output: "bob like even not does Alice"

Constraints:

    1 <= s.length <= 104
    s contains English letters (upper-case and lower-case), digits, and spaces ' '.
    There is at least one word in s.

Follow up:

    Could you solve it in-place with O(1) extra space?

 */

/**
  * 
  - words not reversed, the sentence is
  - multiple spaces are reduced to only 1
  - each word must be separated by only 1 space
  - beginning and ending space however should be reduced to 0
  - capitalization is saved
  - each word is a sequence of non-space characters
  - at least 1 word in s
  - no special characters
  */

const solution2 = (s) => {
    let answer = '';
    answer = s.split(' ').reverse();
    answer = answer.filter((word) => word);
    return answer.join(' ');
};

const solution = (s) => {
    // push char of letters and digits into an array until space is found
    // while array only has no char yet, and current char is space " " then dont push
    // while current char is space " " and next char is space then dont push
    // while current char is space " " and string ends, then pop that space " "
    let sentence = [];
    let word = [];
    // sentence is whole answer
    // add chars to word if space is found: save word into  empty it if space is found
    let temp = s.slice();

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char !== ' ' && word.length !== 0) {
            word.push(char);
        } else if (char !== ' ' && word.length === 0) {
            word.push(char);
        }

        if (char === ' ' && word.length === 0) continue;
        if (char === ' ' || i === s.length - 1) {
            let joined = word.join('');
            sentence.unshift(joined);
            word = [];
        }
    }
    return sentence.join(' ');
};

const s = 'Alice does not even like bob';
// const s = '  Bob    Loves  Alice   ';
// console.log(solution(s));
console.log(solution2(s));
