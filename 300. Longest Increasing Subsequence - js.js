/**
 * 300. Longest Increasing Subsequence
Medium

Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 

Note:

    There may be more than one LIS combination, it is only necessary for you to return the length.
    Your algorithm should run in O(n2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?

https://leetcode.com/problems/longest-increasing-subsequence/
 */

const lengthOfLIS = (nums) => {
    if (nums.length === 0) return 0;

    let dp = [];
    for (let i = 0; i < nums.length; i++) {
        dp.push(1);
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    // finds the max of an array
    return Math.max(...dp);
};

// let nums = []; // 0
// let nums = [1];
// let nums = [10, 9, 2, 5, 3, 7, 101, 18]; // 4
let nums = [18, 55, 66, 2, 3, 54]; // 3
// let nums = [4, 10, 4, 3, 8, 9]; // 3
console.log(lengthOfLIS(nums));
