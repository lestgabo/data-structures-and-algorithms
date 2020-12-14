/**
 ** 443. String Compression
 ** Medium
 ** https://leetcode.com/problems/string-compression/

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

    If the group's length is 1, append the character to s.
    Otherwise, append the character followed by the group's length.

The compressed string s should not be returned separately, but instead be stored in the input character array chars. 
Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.
 

Follow up:
Could you solve it using only O(1) extra space?

 

Example 1:

Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

Example 2:

Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.

Example 3:

Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

Example 4:

Input: chars = ["a","a","a","b","b","a","a"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","3","b","2","a","2"].
Explanation: The groups are "aaa", "bb", and "aa". This compresses to "a3b2a2". Note that each group is independent even if two groups have the same character.

 

Constraints:

    1 <= chars.length <= 2000
    chars[i] is a lower-case English letter, upper-case English letter, digit, or symbol.


 */

/**
 ** params {characters[]} chars
 ** return {numbers[]}
 */

const solution = (chars) => {
    // iterate through chars, check consecutive chars
    // have a consecutive count, if only 1 then push to result right away
    // increment count until new char is found
    // if count length equals 1 then push current char and its consecutive count to result right away
    // else, split the consecutive count and then add the current char and the split counts

    let result = [];
    let count = 0;

    if (chars.length === 1) return chars.length;

    // chars.length-1 because we are checking current and next index
    for (let i = 0; i < chars.length - 1; i++) {
        let char = chars[i];
        let nextChar = chars[i + 1];
        // console.log('--iteration--');
        // console.log('char: ', char);
        // console.log('nextChar: ', nextChar);
        // console.log('chars.length: ', chars.length);
        // console.log('i: ', i);
        // console.log('chars.length-2: ', chars.length - 2);

        if (count === 0) count++;
        if (char === nextChar) {
            count++;
        }
        // console.log('count: ', count);
        if (char !== nextChar) {
            if (count <= 1) {
                result.push(char);
                count = 0;
            } else {
                // console.log('** inside char !== nextChar and count > 1');
                let stringCount = count.toString().split('');
                // console.log('stringCount split: ', stringCount);
                result.push(char);
                stringCount.forEach((num) => result.push(num));
                count = 0;
            }

            if (i === chars.length - 2) {
                result.push(nextChar);
                count = 0;
            }
        }

        if (count > 0 && i === chars.length - 2) {
            // console.log('** inside the last iteration');
            let stringCount = count.toString().split('');
            // console.log('stringCount split: ', stringCount);
            result.push(char);
            stringCount.forEach((num) => result.push(num));
            count = 0;
        }
    }

    chars.splice(0, chars.length, ...result);
    // console.log(chars);
    return chars.length;
};

const chars = ['a', 'a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']; // expected: ["a","2","b","1","0"]
// const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c']; // expected: ["a","2","b","2","c","3"]
// const chars = ['a']; // expected: ["a"]
// const chars = ['a', 'b', 'c']; // expected: ["a","b","c"]
console.log(solution(chars));
