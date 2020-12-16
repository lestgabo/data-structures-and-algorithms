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

//  TLE
var threeSum = function (nums) {
    // brute force, 3 loops
    let resultCheck = new Set();
    let result = [];
    let threeSums = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    // console.log('nums[i]: ', nums[i]);
                    // console.log('nums[j]: ', nums[j]);
                    // console.log('nums[k]: ', nums[k]);
                    threeSums.push(nums[i]);
                    threeSums.push(nums[j]);
                    threeSums.push(nums[k]);
                    let toString = threeSums.sort();
                    let string = toString.join(',');
                    console.log('string:', string);
                    if (!resultCheck.has(string)) {
                        resultCheck.add(string);
                        result.push(threeSums);
                    }

                    threeSums = [];
                }
            }
        }
    }
    return result;
};

const nums = [-1, 0, 1, 2, -1, -4]; //Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums));
