/**
** 1. Two Sum
** Easy
** https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
    2 <= nums.length <= 103
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.
 */

const solution = (nums, target) => {
    // use hash to save needed pair on current index
    // when iterating through nums, we subtract target with current num
    // that difference is a number we need to find in nums
    // therefore, we save that difference in an array
    // when iterating through nums, we check if current num exist in hash
    // if it does, then we found a pair
    let myHash = {};
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i].toString();
        let missingPair = target - nums[i];
        // console.log('num: ', num);
        // console.log('myHash[num]: ', myHash[num]);
        if (myHash[num] >= 0) {
            // console.log('inside the if');
            // console.log('myHash[num]: ', myHash[num]);
            answer.push(myHash[num]);
            answer.push(i);
        } else {
            myHash[missingPair] = i;
        }
        // console.log('myhash: ', myHash);
    }
    return answer;
};

// const nums = [2, 7, 11, 15];
const nums = [3, 2, 4];
const target = 6;
// const target = 9;
console.log(solution(nums, target));
