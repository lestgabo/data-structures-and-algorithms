/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let needed = 0;
    let answer = [];

    for (let i = 0; i < nums.length; i++) {
        answer = [];
        if (target > 0) {
            if (nums[i] <= target) {
                needed = target - nums[i];
                answer.push(i);
                let inNums = nums.findIndex(function(element, index) {
                    if (index != i) {
                        return element === needed;
                    }
                });
                // console.log('element', element)
                // console.log('nums[i]', nums[i])
                // console.log('inNums', inNums);
                if (inNums != -1) {
                    answer.push(inNums);
                    break;
                }
            }
        } else {
            if (nums[i] >= target) {
                needed = target - nums[i];
                answer.push(i);
                let inNums = nums.findIndex(function(element, index) {
                    if (index != i) {
                        return element === needed;
                    }
                });
                // console.log('element', element)
                // console.log('nums[i]', nums[i])
                // console.log('inNums', inNums);
                if (inNums != -1) {
                    answer.push(inNums);
                    break;
                }
            }
        }
    }
    return answer;
};

let nums = [2, 3, 4];
let target = [7];
console.log(twoSum(nums, target));
