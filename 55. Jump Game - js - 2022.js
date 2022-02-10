/**
 ** 55. Jump Game
 ** Medium
 ** https://leetcode.com/problems/jump-game/

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.


Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

Constraints:

    1 <= nums.length <= 104
    0 <= nums[i] <= 105
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

 const canJump = (nums) => {
    /**
     * Greedy approach 
     * - makes the optiomal choice at each step and hoping that at the end its also the global optimal
     * 
     * - need to iterate over nums starting from index 0 to last
     * - keep updating maxReach to record how far we can jump so far Math.max
     * - if our maxReach ever becomes lesser than current index then we for sure cannot reach the end index
     *   and just return false
     */
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        // console.log('i: ', i)
        // console.log('maxRreach: ', maxReach)
        // console.log('i + num: ', i + num)

        // our max reach cant reach the end index
        if (i > maxReach) return false;

        // set new max reach 
        maxReach = Math.max(maxReach, i + num);

        // console.log('*******')
    }

    return true;
};


const nums = [3,2,1,0,4] // false
// const nums = [2,3,1,1,4]
// // Output: true
console.log(canJump(nums));


/**
 * my try until i gave up lol
 * 
 * 
 *  const canJump = (nums) => {
    let remain = nums.length - 1;
    console.log('original rem: ', remain)
    const helper = (index, remain, jump) => {
        console.log('index: ', index)
        console.log('remain: ', remain)
        console.log('jump: ', jump)
        console.log('element: ', nums[index])
        console.log('**********')
        // found last index
        if (remain === 0) console.log('true baby');

        // still in array after jump
        if (remain > 0) {
            console.log('rem > 0')
            helper(index + jump, remain - nums[index], nums[index + jump])
        } 
        else if (remain < 0) {
            console.log('rem < 0')
            helper(index, remain + nums[index], nums[index + jump] - 1)
        }

    }

    return helper(0, remain, nums[0]);
};
 */
