/**
 ** 33. Search in Rotated Sorted Array
 ** Medium
 ** https://leetcode.com/problems/search-in-rotated-sorted-array/

There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot 
index k (1 <= k < nums.length) such that the resulting array is
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:

Input: nums = [1], target = 0
Output: -1


Constraints:

    1 <= nums.length <= 5000
    -104 <= nums[i] <= 104
    All values of nums are unique.
    nums is an ascending array that is possibly rotated.
    -104 <= target <= 104

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// // code for binary search
// var search = function(nums, target) {
//     /**
//      * try doing binary search first
//      *  - a flat binary algo would only work for a not rotated sorted array
//      */
    
//     const binarySearch = (nums, left, right, target) => {
//         console.log('left: ', left)
//         console.log('right: ', right)

//         while(right >= left) {
//             let midIndex = left + Math.floor((right - left)/2);
//             let midNum = nums[midIndex];
//             console.log('mid index: ', midIndex)
//             console.log('mid num: ', nums[midIndex])  
//             if (midNum === target) return `Target ${target} is at index: ${midIndex}`
//             if (midNum > target) {
//                 return binarySearch(nums, left, midIndex - 1, target);
//             } else {
//                 return binarySearch(nums, midIndex + 1, right, target);
//             }
//         }

//         return `Target not in nums.`
//     }
//     let left = 0;
//     let right = nums.length-1;
//     console.log(binarySearch(nums, left, right, target))
// };

// code for binary search
var search = function(nums, target) {
    /**
     * try doing binary search first
     *  - a flat binary algo would only work for a not rotated sorted array
     * 
     * for a rotated sorted array:
     *  - in non-rotated we only neede mid value, 
     *    now we also need to find the values of left and right
     *  - we'll use left side instead of right but you can use either
     *    compare left if its smaller or equal to mid -> this means 
     *    THE LEFT SIDE IS THE PROPER SIDE. Proper meaning its correctly sorted
     *  - if the left side is the proper side we will go inside that if block
     *    then make another conditional check if target is in between left and mid
     *    - if the target is in between left and mid then we are on the correct side
     *      and will recursively call the binary search function again using left and mid
     *    - however if in this proper left side the target is not in between, 
     *      we will recursively call the binary search function again using mid and right
     *      the target will be found on the other side 
     *  - if the left side is greater than mid then its not proper and has 
     *    rotated nums in it so we use MID and RIGHT because this means
     *    THE RIGHT SIDE IS THE PROPER SIDE
     */
    
    const binarySearch = (nums, left, right, target) => {
        while(right >= left) {
            let midIndex = left + Math.floor((right - left)/2);
            let midNum = nums[midIndex];
            let leftNum = nums[left];
            let rightNum = nums[right];
     
            if (midNum === target) return midIndex;
    
            if (leftNum <= midNum) { // left side is proper 
                if (leftNum <= target && target < midNum) {
                    // target in the left side, return left side
                    return binarySearch(nums, left, midIndex - 1, target);
                } else { // return right side
                    return binarySearch(nums, midIndex + 1, right, target);
                }
            } else { // right side is proper
                if (midNum < target && target <= rightNum) {
                    // target in the right side, return right side
                    return binarySearch(nums, midIndex + 1, right, target);
                } else { // return left side
                    return binarySearch(nums, left, midIndex - 1, target)
                }
            }
        }
        return -1;
    }
    let left = 0;
    let right = nums.length-1;
    return (binarySearch(nums, left, right, target))
};


// const nums = [4,5,1,2,3]; // Output: 
// const target = 2;
const nums = [4,5,6,7,1,2]; // Output: 
const target = 7
console.log(search(nums, target));
