/**
 * 268. Missing Number
Easy

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2

Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

https://leetcode.com/problems/missing-number/
*/

const missingNumber = (nums) => {
    // in array of nums
    // out integer, num
    let mySet = new Set(nums);
    let setSize = mySet.size + 1;
    for (let i = 0; i < setSize; i++) {
        if (!mySet.has(i)) return i;
    }
};

// let nums = [0];
// let nums = [1];
let nums = [3, 5, 7, 1, 2, 4, 0];
// let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums));
