/**
 ** 39. Combination Sum
 ** Medium
 ** https://leetcode.com/problems/combination-sum/
Given an array of distinct integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen numbers sum to target. 
You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that 
sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:

Input: candidates = [2], target = 1
Output: []

 

Constraints:

    1 <= candidates.length <= 30
    1 <= candidates[i] <= 200
    All elements of candidates are distinct.
    1 <= target <= 500


 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum = (candidates, target) => {
    /**
     * keywords: Backtracking, Recursion, and DFS (Depth-First Search)
     * 
     * The trick is when on a current node, we don't look back (iterate the index before)
     * (so if the given nums/candidates are not sorted, we sort them first)
     * We dont need to look back because the previous node should take care of those combinations
     * 
     * Our backtrack/search function will have parameters backtrack(remain, comb, start)
     * remain -> how much remains after we subtract from target with the current num
     *    - once it reaches exactly 0, then we are at a combination of elements that is valid
     *      and we push these combinations to our results
     *    - however if remains becomes less than 0, < 0, then the combinations
     *      of numbers is invalid and wont be pushed into results, we return nothing
     * comb -> current combination of elements
     *    - this is where the backtracking trick happens or we are bracktracking 
     *      by popping the latest num in the comb once remain <= 0
     *    - because once remain <= 0 we have already found out if the combination 
     *      is valid or not. Therefore that node should be cut hence backtrack.
     * start -> index of current num
     */
    let solution = [];

    const backtrack = (remain, comb, start) => {
        if (remain === 0) {
            // found a valid combination
            // console.log('comb complete remain 0: ', comb)
            return solution.push([...comb])
        } else if (remain < 0) {
            // sum of combinations are over target, we are using sorted positive integers
            // so once it becomes negative, it will always be an invalid combination
            return;
        }
    
        for (let i = start; i < candidates.length; i++) {
            // console.log('start: ', start)
            // console.log('remain: ', remain)
            // console.log('candidates[i]: ', candidates[i])
            // console.log('comb: ', comb)
            // console.log('*****************')
            comb.push(candidates[i]);
            // recursive call
            backtrack(remain - candidates[i], comb, i);
            // backtrack by popping current candidate out because we are either at remain <= 0
            comb.pop();
        }
    }

    backtrack(target, [], 0)
    return solution;
};



const candidates = [2,3,6,7]; // Output: [[2,2,3],[7]]
const target = 7
console.log(combinationSum(candidates, target));
