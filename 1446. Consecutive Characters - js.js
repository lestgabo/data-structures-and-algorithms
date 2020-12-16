/**
 ** 1446. Consecutive Characters
 ** Easy
 ** https://leetcode.com/problems/consecutive-characters/

Given a string s, the power of the string is the maximum length of a 
non-empty substring that contains only one unique character.

Return the power of the string.


Example 1:

Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

Example 2:

Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

Example 3:

Input: s = "triplepillooooow"
Output: 5

Example 4:

Input: s = "hooraaaaaaaaaaay"
Output: 11

Example 5:

Input: s = "tourist"
Output: 1

 
Constraints:

    1 <= s.length <= 500
    s contains only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    // iterate through s
    // have max value -> maxPower =  max(maxPower, count)
    // if current char === next char, count++
    // if not, count = 0, calc maxPower
    // if at end or, s.length-2 because stop 1 from last index,
    //  then if still same char, calc maxPower

    if (s === '') return 0;
    if (s.length === 1) return 1;

    let maxPower = 0;
    let count = 0;
    for (let i = 0; i < s.length - 1; i++) {
        // console.log('*** new iterateion ***');
        let char = s[i];
        let nextChar = s[i + 1];
        // console.log('char: ', char);
        // console.log('nextChar: ', nextChar);

        // count up for current letter
        if (count === 0) count++;

        if (char === nextChar) {
            count++;
        } else {
            maxPower = Math.max(maxPower, count);
            count = 0;
        }
        // console.log('maxPower: ', maxPower);
        // console.log('count: ', count);
        // at end of s
        if (i === s.length - 2 && char === nextChar) {
            maxPower = Math.max(maxPower, count);
        }
    }
    return maxPower;
};

const s = 'leetttcode';
console.log(maxPower(s));
