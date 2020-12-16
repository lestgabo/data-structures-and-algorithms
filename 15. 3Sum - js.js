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
var threeSum2 = function (nums) {
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

const threeSum = (nums) => {
    // do 3 pointers, i j k -> i as the anchor and j and k moving fast
    // j to the very left, k to the very right
    // sort nums: O(NlogN) ascending helps to remove duplicates
    // while loop inside i for loop, it will loop while j < k
    // inside the while, check for the sum === target
    // if yes: push nums[i] [j] [k] into result
    //         check if next j is a duplicate if yes: increment
    //         check if next k is a duplicate if yes: decrement
    //         then increment j, decrement k (to feed the while loop)
    // else if (target < sum): increment j (remember we are in a sorted array)
    // else (target > sum): decrement k

    let target = 0;
    let result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        let partialTarget = target - nums[i];

        // break because positive numbers cant add to negative number
        if (nums[i] > 0) break;
        // removes duplicates of i
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        while (j < k) {
            let partialSum = nums[j] + nums[k];
            if (partialSum === partialTarget) {
                result.push([nums[i], nums[j], nums[k]]);

                // removes duplicates of j and k
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;

                // feed the while loop
                j++;
                k--;
            } else if (partialSum < partialTarget) {
                // e.g. 5 < 10, num[j]+num[k]=5 < 10 = partial target
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
};

const nums = [-1, 0, 1, 2, -1, -4]; //Output: [[-1,-1,2],[-1,0,1]]
console.log(nums.sort((a, b) => a - b));
console.log(threeSum(nums));
