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

 const threeSum = (nums) => {
    // can do O(n^2)
    // use 3 pointers
    // sort the numbers, O(nlogn) is < O(n^2) so its acceptable
    // i as slow, while j and k are fast
    // initialize as loop in i, then inside i, j is start and k is end
    // inside i, while loop (j < k)
    // inside i, if current num is same as previous num, continue right away to next iteration
    // dont want to repeat i again
    // we check sum of ijk if equal to target,
    // if its equal to target, 0, 
    //  - then we save the values of from index ijk in nums and push the triplet into answers
    //  - skip duplicates of j by checking ahead and k by checking before it -> makes runtime faster
    //  - feed the while loop with j increment and k decrement -> moves while loop to next iteration
    // however if sum > target:
    //   sum too big and since our nums are sorted, the way to decrease the sum is to decrement k
    // else sum too small so we move j to the right to add more to the sum

    // sort, ok because less expensive that O(n^2)
    nums.sort((a, b) => a - b);
    const N = nums.length;
    let answers = [];

    for (let i = 0; i < N-2; i++){
        let j = i+1;
        let k = N-1;
        // skip duplicates of i 
        if (nums[i] === nums[i-1]) continue;

        while(j < k) {
            let tripletSum = nums[i] + nums[j] + nums[k];
            // 0 is the target given by the question
            if (tripletSum === 0) {
                answers.push([nums[i], nums[j], nums[k]]);

                // skip duplicates
                while (nums[j] === nums[j + 1]){
                    j++;
                }
                while (nums[k] === nums[k - 1]){
                    k--;
                }

                // next iteration of the loop
                j++;
                k--;
            } else if (tripletSum > 0) {
                // sum too big and since our nums are sorted, the way to decrease the sum is to decrement k
                k--;
            } else {
                // sum too small so we move j to the right to add more to the sum
                j++;
            }
        }
    }
  
    return answers;
};

// const nums = [-1, 0, 1, 2, -1, -4]; //Output: [[-1,-1,2],[-1,0,1]]
const nums = [-1, 0, 1, -5, 1, -2, 3, 2]; 
console.log(nums.sort((a, b) => a - b));
console.log(threeSum(nums));
