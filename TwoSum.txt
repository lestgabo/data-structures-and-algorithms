/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let Solution = function(nums, target) {
    let comp = {};

    for (let i = 0; i < nums.length; i++) {
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]], i];
        }
        comp[target - nums[i]] = i;
    }
};

let nums = [-6, -5, 22, 5, 6, 10];
let target = [5];
console.log(Solution(nums, target));
