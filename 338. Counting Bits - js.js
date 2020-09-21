/**
 * 338. Counting Bits
Medium

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example 1:

Input: 2
Output: [0,1,1]

Example 2:

Input: 5
Output: [0,1,1,2,1,2]

Follow up:

    It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
    Space complexity should be O(n).
    Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.

https://leetcode.com/problems/counting-bits/
 */

/**
 * param {number} num
 * return {number[]}
 */

const countingBits = (num) => {
    // for loop 0 to num
    // convert integer into bits and count its 1's
    let numberOfOnes = [];

    for (let i = 0; i <= num; i++) {
        console.log(i.toString(2));
        numberOfOnes.push(getNumberOfOnes(i.toString(2)));
    }

    return numberOfOnes;
};

const getNumberOfOnes = (bits) => {
    let counter = 0;
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === '1') counter++;
    }
    return counter;
};

let num = 5;
console.log(countingBits(num));
