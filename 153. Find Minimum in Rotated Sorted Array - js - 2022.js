/**
 ** 153. Find Minimum in Rotated Sorted Array
 ** Medium
 ** https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * 
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
For example, the array nums = [0,1,2,4,5,6,7] might become:

    [4,5,6,7,0,1,2] if it was rotated 4 times.
    [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the 
array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, 
return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.


Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 


Constraints:
    n == nums.length
    1 <= n <= 5000
    -5000 <= nums[i] <= 5000
    All the integers of nums are unique.
    nums is sorted and rotated between 1 and n times.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const findMin = (nums) => {
    /**
     * - the basics are the same as 33. Search in a Rotated Sorted Array where
     *   we use a modified binary search to find our target
     * - this time we use a modified binary search to find an inflection point
     * - this inflection point is where relative to the first element in the  
     *   rotated array, all to the left of this element is larger and to the right smaller
     * - its the inflection point and that element would also be our minimum
     * - find mid element and compare it to the left most element 
     *   - if left is lesser that means its a properly sorted side and our inflection point
     *     is then on the right side, we recursively return the right side
     *   - if left is greater then we are on the side where the inflection point is
     *     and return the left side recursively
     * - on every call we check if we found the inflection point by checking
     *   - the element to the left and to the right of the mid element we are on
     *   - we are at the infleciton point if EITHER of these two conditions are met:
     *     - element before mid is GREATER than mid, the inflection point is the mid, return mid
     *     - element after mid is lesser than mid, inflection is the next element after mid, return mid+1
     */

    /**
     * @param {*} nums 
     * @param {*} left 
     * @param {*} right 
     * @returns {number} min
     */
    const binarySearch = (nums, left, right) => {
        // proper means sorted correctly
        while (right >= left) {
            let midIndex = left + Math.floor((right - left)/2);
            let midNum = nums[midIndex];
            let leftNum = nums[left];
            let rightNum = nums[right];

            console.log('midNum: ', midNum)
            console.log('leftNum: ', leftNum)
            console.log('rightNum: ', rightNum)
            console.log('********')

            // base cases 
            // - rotated enough that it became the same as before
            if (leftNum <= midNum && leftNum <= rightNum) return nums[0];
            // - only 1
            if (nums.length === 1) return nums[0];

            // inflection point conditions
            if (nums[midIndex] > nums[midIndex + 1]) return nums[midIndex + 1];
            if (nums[midIndex] < nums[midIndex - 1]) return nums[midIndex];
        
            // proper left side so return right side, inflection point is there
            if (leftNum <= midNum) {
                return binarySearch(nums, midIndex + 1, right);
            // else return left side
            } else {
                return binarySearch(nums, left, midIndex - 1);
            }
        }
    }
    let left = 0;
    let right = nums.length - 1;
    return binarySearch(nums, left, right);
};

Input: nums =  [11,13,15,17]
// Input: nums =  [3,4,5,1,2]
Output: 1
Explanation: // The original array was [1,2,3,4,5] rotated 3 times.

console.log(findMin(nums));
