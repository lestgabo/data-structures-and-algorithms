/**
 * 
 * 213. House Robber II
Medium

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
             because they are adjacent houses.

Example 2:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.

https://leetcode.com/problems/house-robber-ii/
 */

const helper = (nums) => {
    let max_array = new Array(nums.length);
    for (i in nums) {
        if (i == 0) max_array[i] = nums[i];
        if (i == 1) max_array[i] = Math.max(nums[0], nums[1]);
        if (i >= 2) max_array[i] = Math.max(nums[i] + max_array[i - 2], max_array[i - 1]);
    }
    return max_array[max_array.length - 1];
};

const rob = (nums) => {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let start1 = [...nums];
    let start2 = [...nums];
    start1.pop();
    start2.shift();
    // console.log('start1 -> ', start1);
    // console.log('start2 -> ', start2);
    let max_start1 = helper(start1);
    let max_start2 = helper(start2);

    return Math.max(max_start1, max_start2);
};

// let nums = [1, 2, 3, 1];
// let nums = [];
// let nums = [];
let nums = [11, 2];
// let nums = [1, 2, 3];
// let nums = [1, 2, 3, 4];
// let nums = [15, 2, 3];
// let nums = [2, 7, 9, 3, 1];
console.log(rob(nums));
