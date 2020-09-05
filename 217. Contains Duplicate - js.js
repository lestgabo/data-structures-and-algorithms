/**
 * 
 * 217. Contains Duplicate
Easy

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true

Example 2:

Input: [1,2,3,4]
Output: false

Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

https://leetcode.com/problems/contains-duplicate/
 */

const solution = (nums) => {
    let hashmap = {};
    for (num of nums) {
        if (hashmap[num]) {
            hashmap[num]++;
        } else {
            hashmap[num] = 1;
        }
    }
    for (const [key, value] of Object.entries(hashmap)) {
        if (value > 1) return true;
    }
    return false;
};

// let nums = [1, 2, 3, 1];
let nums = [1, 2, 3, 4];
console.log(solution(nums));
