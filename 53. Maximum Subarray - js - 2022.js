/**
 ** 53. Maximum Subarray
 ** Easy
 ** https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.


Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:

Input: nums = [1]
Output: 1

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23


Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    // do running sum
    // add current with next and save the sum into a sum array
    // if current index of sum is < 0 then dont add that index's sum with next
    // return the max number in the sum array

    /**
     * 2022 notes:
     * want to pass through the nums array only once
     * a subarray is a contiguous part of an array
     *  - imagine a window in the array w/ its left and right is movable
     *    and each diff combination of left and right in each index
     *    as long as left < right is a contiguous array
     *    key part being left window < right window
     * We need to find the next sum index
     *  - to find it, we have to add the current sum index and the next num 
     */
    
    // edge
    if (nums.length === 1) return nums[0];
    // initialize sums with first num
    let sums = [nums[0]];
    // checking next, so need to end 1 before length
    for (let i = 0; i < nums.length - 1; i++) {
        // the sums is 1 index ahead, so we add onto its i+1
        // if sums[i] (previous sum) < 0, it shouldnt be used as we want the highest sum
        if (sums[i] < 0) {
            sums[i+1] = nums[i+1];
        } else {
            sums[i+1] = sums[i] + nums[i+1];
        }
    }
    // return biggest number in sums
    return Math.max(...sums);
};

const nums = [-2,1];
// expected sums = [1]

// const nums = [4,-1,2,1];
// // expected sums = [3,5,6]

// //expected sums: [-1, -3, 4, 3, 5, 6, 1, 5]
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // answer: 6
console.log(maxSubArray(nums));
