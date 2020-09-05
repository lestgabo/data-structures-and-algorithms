/**
 * 300. Longest Increasing Subsequence
Medium

Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 

Note:

    There may be more than one LIS combination, it is only necessary for you to return the length.
    Your algorithm should run in O(n2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?

https://leetcode.com/problems/longest-increasing-subsequence/
 */

const lengthOfLIS = (nums) => {
    if (nums.length === 0) return 0;

    let getDirection = [];
    for (let i = 0; i < nums.length - 1; i++) {
        let num1 = nums[i];
        let num2 = nums[i + 1];
        if (num2 > num1) {
            getDirection.push(true);
        } else {
            getDirection.push(false);
        }
    }
    // console.log(getDirection);
    let negativeBeforeFirstPositive = 0;
    let lastPositive = 0;

    for (let i = 0; i < getDirection.length; i++) {
        let direction = getDirection[i];
        if (negativeBeforeFirstPositive === 0 && direction === true) {
            negativeBeforeFirstPositive = i - 1;
        }
        if (direction === true) {
            lastPositive = i;
        }
    }

    // find indexes to remove, the false or negatives
    let negatives = new Set();
    for (let i = negativeBeforeFirstPositive; i < lastPositive; i++) {
        if (i !== negativeBeforeFirstPositive && getDirection[i] === false) {
            negatives.add(i);
        }
    }
    // console.log(negatives);
    // because getDirection is shifted 1 index right, we compensate
    negativeBeforeFirstPositive += 1;
    lastPositive += 1;
    // console.log(negativeBeforeFirstPositive);
    // console.log(lastPositive);
    // remove negatives
    let increasing = [];
    for (let i = negativeBeforeFirstPositive; i < lastPositive + 1; i++) {
        if (!negatives.has(i)) {
            increasing.push(i);
        }
    }
    // console.log(increasing);
    let minusCounter = 0;
    let prev = nums[increasing[0]];
    for (let i = 0; i < increasing.length; i++) {
        console.log('nums[increasing[i]] ->', nums[increasing[i]]);
        console.log('prev->', prev);
        if (nums[increasing[i]] < prev) {
            minusCounter += 1;
        }
        console.log('minusCounter->', minusCounter);
        prev = nums[increasing[i]];
    }
    console.log('increasing ->', increasing);
    return increasing.length - minusCounter;
};

// let nums = []; // 0
// let nums = [1];
// let nums = [10, 9, 2, 5, 3, 7, 101, 18]; // 4
let nums = [18, 55, 66, 2, 3, 54]; // 3
// let nums = [4, 10, 4, 3, 8, 9]; // 3
console.log(lengthOfLIS(nums));
