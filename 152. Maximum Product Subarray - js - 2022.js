/**
 ** 152. Maximum Product Subarray
 ** Medium
 ** https://leetcode.com/problems/maximum-product-subarray/
 * 
152. Maximum Product Subarray
Medium

Given an integer array nums, find a contiguous non-empty subarray within the array 
that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.
 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

 
Constraints:

    1 <= nums.length <= 2 * 104
    -10 <= nums[i] <= 10
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const maxProduct = (nums) => {
    /**
     * most efficient way is DP
     * - the intuition is that negative numbers can yeet our current product to 
     *   be the lowest product in our list of products 
     * - BUT that yeeted product can be recovered to become the BIGGEST product 
     *   when multipled with another negative number
     * - therefore, while we store a max product, we also store a min product
     * - and for every iteration we get the max and min value from 3 different cases
     *   - current number (for max: by itself is largest)
     *   - current number * current max (for max: (+) * (+))
     *   - current number * current min (for max: (-) * (-))
     */
    // edge
    if (nums.length === 1) return nums[0];
    if (Array.isArray(nums) && !nums.length) return 0;

    let currentMax = nums[0];
    let currentMin = nums[0];
    let previousMax = nums[0];
    let previousMin = nums[0];
    let solution = currentMax;

    for (let i = 1; i < nums.length; i++) {
        let currentNumber = nums[i];
        currentMax = Math.max(currentNumber, currentNumber * previousMax, currentNumber * previousMin);
        currentMin = Math.min(currentNumber, currentNumber * previousMax, currentNumber * previousMin);

        previousMax = currentMax;
        previousMin = currentMin;

        // console.log('currentMax: ', currentMax)
        // console.log('currentMin: ', currentMin)
        // console.log('******')
        
        solution = Math.max(solution, currentMax);
    }
    return solution;
};

// let nums = [100,4,200,1,3,2] // 4
// let nums = [2,3,-2,4] // 6

Input: nums = [1,-2,3,-4,-3,-4,-3]
Output: 144
Expected: 432

// Input: nums = [0,2]
// Output: 0
// Expected: 2

// Input: nums = [-2,3,-4]
// Output: 3
// Expected: 24

// Input: nums = [7,-2,-4]
// Output: 8
// Expected: 56

// Input: nums = [-3,0,1,-2]
// Output: 0
// Expected: 1


console.log(maxProduct(nums));
