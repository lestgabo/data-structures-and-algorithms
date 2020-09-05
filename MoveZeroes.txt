/* 
Leetcode question
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
**************************************************
**************************************************
daily interview pro
Hi, here's your problem today. This problem was recently asked by Facebook:

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

Here is a starting point:

class Solution:
  def moveZeros(self, nums):
    # Fill this in.

nums = [0, 0, 0, 2, 0, 1, 3, 4, 0, 0]
Solution().moveZeros(nums)
print(nums)
# [2, 1, 3, 4, 0, 0, 0, 0, 0, 0]

*/

class Solution {
    moveZeroes(nums) {
        let count = 0;
        let zeroesArray = [];
        for (let i = 0; i <= nums.length - 1; i++) {
            if (nums[i] === 0) {
                count++;
                let zero = nums.splice(i, 1);
                // [0] because splice returns an array, [0] to be exact
                zeroesArray.push(zero[0]);
                i--;
            }
        }
        // doesnt work in leetcode the fuck
        // nums = [...nums, ...zeroesArray];
        // nums = nums.concat(zeroesArray)
        zeroesArray.forEach(zero => nums.push(0));
        return nums;
    }
}

const nums = [0, 0, 0, 2, 0, 1, 3, 4, 0, 0];
const solution = new Solution().moveZeroes(nums);
console.log(solution);
