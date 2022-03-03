/**
 ** 198. House Robber
 ** Medium 
 ** https://leetcode.com/problems/house-robber/
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint stopping 
you from robbing each of them is that adjacent houses have security systems 
connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

 
Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.


Constraints:
    1 <= nums.length <= 100
    0 <= nums[i] <= 400
*/

const moneyRobbed = (nums) => {
    let max_array = Array(nums.length);
    // DP (Dynamic Programming)
    // iterate through each house, and decide to rob or not rob, while having a max for each decision
    // backwards thinking: nums[i] + nums[i-2] => rob,
    if (nums.length === 0) return 0;
    
};

let nums = [1, 2, 3, 1]; // 4
// let nums = [];
// let nums = [15, 2, 3];
// let nums = [2, 7, 9, 3, 1];
console.log(moneyRobbed(nums));
