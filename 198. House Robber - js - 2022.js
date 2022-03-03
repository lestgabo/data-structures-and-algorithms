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
    /**
     * DP (Dynamic Programming)
     * iterate through each house, and decide to rob or not rob, while having a max for each decision
     * backwards thinking: nums[i] (current) + DP[i-2] (2 houses before's max from DP) => rob,
     */
    
    // base cases
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let maxArray = Array(nums.length);
    maxArray[0] = nums[0];
    maxArray[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        // rob means current house plus the max of 2 houses before
        let rob = nums[i] + maxArray[i - 2];
        // dont rob means just using the previous house
        let dontRob = maxArray[i - 1];

        // console.log('rob: ', rob)
        // console.log('dontRob: ', dontRob)

        maxArray[i] = Math.max(rob, dontRob)
    }
    // console.log('maxArray: ', maxArray)
    return maxArray[nums.length - 1];
};


Input: nums = [2,1,1,2]
Output: 3
Expected: 4

// let nums = [1, 2, 3, 1]; // 4
// let nums = [];
// let nums = [15, 2, 3]; // 18
// let nums = [2, 7, 9, 3, 1];
console.log(moneyRobbed(nums));
