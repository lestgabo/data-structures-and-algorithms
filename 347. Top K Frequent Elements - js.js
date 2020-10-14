/**
 * 347. Top K Frequent Elements
Medium

Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

Note:

    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
    It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
    You can return the answer in any order.

https://leetcode.com/problems/top-k-frequent-elements/
 */

/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const kFrequentElements = (nums, k) => {
    /**
     * try hash map, count number of occurences for each number. return top k
     */
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (dict[num]) {
            dict[num] += 1;
        } else {
            dict[num] = 1;
        }
    }
    let items = [];
    for (const property in dict) {
        items.push([property, dict[property]]);
    }
    items.sort((first, second) => {
        return second[1] - first[1];
    });
    // console.log(items);
    let answer = [];
    for (let i = 0; i < k; i++) {
        answer.push(parseInt(items[i][0]));
    }
    return answer;
};

// let nums = [1, 1, 1, 2, 2, 3];
// let nums = [1, 2]; // [1,2]
// let nums = [1, 1, 3, 3, 3, 5, 5, 6, 6, 6, 6];
let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6];
let k = 10; // [1,2,5,3,6,7,4,8,10,11]
// let k = 2;
console.log(kFrequentElements(nums, k));
