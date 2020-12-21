/**
    ** 15. 3Sum
    ** Medium
    ** https://leetcode.com/problems/3sum/

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:

Input: nums = []
Output: []

Example 3:

Input: nums = [0]
Output: []

 

Constraints:

    0 <= nums.length <= 3000
    -105 <= nums[i] <= 105
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = (nums) => {
    // can do O(n^2)
    // use 3 pointers
    // sort the numbers, O(nlogn) is < O(n^2) so its acceptable
    // i as slow, while j and k are fast
    // initialize as loop in i, then inside i, j is start and k is end
    // inside i, while loop (j < k)
    // inside i, if current num is same as previous num, continue right away to next iteration
    // dont want to repeat i again
    // we check sum of ijk if equal to target,
    // we check if sum > target:
    //      if yes: decrement k
    //        else: increase k
    //      if yes: add to results array
    //              and move j(increment) and k(decrement) if the next is an identical number
    //      if not:
    // at the end of while loop, feed the while loop
    //

    // sort, ok because less expensive that O(n^2)
    nums.sort((a, b) => a - b);

    let results = [];
    let target = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        // duplicate is skipped
        if (nums[i] === nums[i - 1]) continue;

        while (j < k) {
            let threeSum = nums[i] + nums[j] + nums[k];
            let threeArray = [nums[i], nums[j], nums[k]];
            if (threeSum === target) {
                results.push(threeArray);

                // duplicates skipped
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;

                // feed the while loop
                j++;
                k--;
            } else if (threeSum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return results;
};

const nums = [-1, 0, 1, 2, -1, -4]; //Output: [[-1,-1,2],[-1,0,1]]
console.log(nums.sort((a, b) => a - b));
console.log(threeSum(nums));
