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
    let left = 0;
    let N = nums.length;
    let right = 1;

    // edge
    if (nums.length === 1) return nums[0];
    if (Array.isArray(nums) && !nums.length) return;

    const productOfArray = (subbarray) => {
        return subbarray.reduce((previousValue, currentValue) => previousValue *= currentValue)
    }

    let products = [nums[0]];
    while (left !== N) {
        
        let latestProduct = products[products.length - 1];
        let currentProduct = productOfArray(nums.slice(left, right + 1));
        console.log('left: ', left);
        console.log('right: ', right);
        console.log('latestProduct: ', latestProduct);
        console.log('currentProduct: ', currentProduct);
        console.log('************');
        products.push(currentProduct);
        // right at end
        if (right === N - 1) {
            left += 1
        } else if (currentProduct < latestProduct && latestProduct > 0) {
            left += 1
        } else {
            right += 1;
        }
    }
    products.push(productOfArray(nums))
    products.push(...nums)
    console.log('products: ', products)
    return Math.max(...products)
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
