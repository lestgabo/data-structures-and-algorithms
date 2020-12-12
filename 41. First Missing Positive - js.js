/**
 ** 41. First Missing Positive
 ** Hard
 ** https://leetcode.com/problems/first-missing-positive/

Given an unsorted integer array nums, find the smallest missing positive integer.

Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space.?

 

Example 1:

Input: nums = [1,2,0]
Output: 3

Example 2:

Input: nums = [3,4,-1,1]
Output: 2

Example 3:

Input: nums = [7,8,9,11,12]
Output: 1

 

Constraints:

    0 <= nums.length <= 300
    -231 <= nums[i] <= 231 - 1


 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let sorted = nums.sort((a, b) => a - b);
    let largestNum = sorted[sorted.length - 1];
    let numSet = new Set(sorted);
    // console.log(sorted);
    if (largestNum <= 0 || sorted.length === 0) return 1;
    // iterate from 1 -> highest value
    // use set
    console.log('numSet: ', numSet);
    for (let i = 1; i <= largestNum + 1; i++) {
        // console.log('(i): ', i);
        // console.log('numSet.has(i): ', numSet.has(i));
        // console.log('!numSet.has(i): ', !numSet.has(i));
        // if the first i is not in set, that is our first missing positive
        if (!numSet.has(i)) {
            return i;
        }
    }
};

// const nums = [7, 8, 9, 11, 12]; // 1
// const nums = [-22, -1, 0]; // 1
// const nums = [2, 1, 0]; // 3
// const nums = [2, 1, 0, 3, 4, 5, 7, 8]; // 6
const nums = [];
console.log(firstMissingPositive(nums));
