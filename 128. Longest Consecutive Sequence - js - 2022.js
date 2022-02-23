/**
 ** 128. Longest Consecutive Sequence
 ** Medium
 ** https://leetcode.com/problems/longest-consecutive-sequence/
 * 
Given an unsorted array of integers nums, 
return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.


Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9


Constraints:
    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const longestConsecutive = (nums) => {
    /**
     * - use set -> set lookup is O(n)
     * - iterate through set (forEach) if curr-1 is not in set then we make a temp = temp+1
     *   because we are at the least most of a potential consecutive sequence
     * - then while temp is in set (has) we increment temp+=1
     * - after while loop (temp not in set anymore) 
     *   we get the max between curr and new streak (temp - x) = consecutive sequence streak
     */
    let numSet = new Set(nums)
    let streak = 0;

    console.log(numSet)

    numSet.forEach((num) => {
        // if num - 1 not in set
        if (!numSet.has(num - 1)) {
            let temp = num + 1
            // consecutive nums
            while (numSet.has(temp)) {
                temp += 1
            }
            // get max streak
            streak = Math.max(streak, temp - num)
        }
    })
        
    return streak;
};

// let nums = [100,4,200,1,3,2] // 4
let nums = [0,3,7,2,5,8,4,6,0,1] // 9

console.log(longestConsecutive(nums));
