/**
 ** 70. Climbing Stairs
 ** Easy
 ** https://leetcode.com/problems/climbing-stairs/

You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top?

 
Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

 
Constraints:
    1 <= n <= 45
 */

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    /**
     * - the trick here is that you can get each step's distinct way to climb
     * by adding the only possible steps you can get to it, meaning to get to the 
     * current step, you could only have come from 1step before or 2steps before
     * - and those steps before is the same
     * - but this of course means the first and second steps there are respectively
     *   only 1 and 2 distinct distinct ways to climb them -> so those 2 are hard coded in
     * 
     * - can do fibbonacci way -> curr = curr-1 + curr-2 
     * - can do dippo (DP) -> dp[i] = dp[i-1] + dp[i-2] 
     */

    if (n === 1) return 1;
    if (n === 2) return 2;

    let dp = [];
    dp[0] = 1;
    dp[1] = 2;
    for (let i = 2; i < n; i++) {
        // console.log('dp[i - 1]: ', dp[i - 2])
        // console.log('dp[i - 2]: ', dp[i - 1])
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    // console.log('dp: ', dp)
    return dp[n-1]
};

// Input: n = 3 // output: 3
// Input: n = 2 // output: 2
Input: n = 5 // output: 
console.log(climbStairs(n));

