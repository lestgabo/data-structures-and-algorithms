/**
 ** 53. Maximum Subarray
 ** Easy
 ** https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:

Input: nums = [1]
Output: 1

Example 3:

Input: nums = [0]
Output: 0

Example 4:

Input: nums = [-1]
Output: -1

Example 5:

Input: nums = [-2147483647]
Output: -2147483647

 

Constraints:

    1 <= nums.length <= 2 * 104
    -231 <= nums[i] <= 231 - 1


 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // do running sum
    // add current with next and save the sum into a sum array
    // if current index of sum is < 0 then dont add that index's sum with next
    // return the max number in the sum array

    let currentSum = [nums[0]];

    for (let i = 0; i < nums.length - 1; i++) {
        if (currentSum[i] < 0) {
            currentSum.push(0 + nums[i + 1]);
        } else {
            currentSum.push(currentSum[i] + nums[i + 1]);
        }
    }

    return Math.max(...currentSum);
};

//expected sums: [-2, 1, -2, 4, 3, 5, 6, 1, 5]
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // answer: 6
console.log(maxSubArray(nums));
