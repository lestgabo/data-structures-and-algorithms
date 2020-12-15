/**
 ** 912. Sort an Array
 ** Medium
 ** https://leetcode.com/problems/sort-an-array/

Given an array of integers nums, sort the array in ascending order.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]

Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]

 

Constraints:

    1 <= nums.length <= 50000
    -50000 <= nums[i] <= 50000

 */

const solution = (nums) => {
    const mergeSort = (nums) => {
        /**
         ** algorithm
            - divide array into two, left and right
            - if length of array === 1, return array
            - if not then keep going
            - conditional check, only do below if length of array is > 1 
            - recursively call mergesort on the divided parts until left and right are single elements
            - have 3 arrays (left, right, mutated original array) so we need 3 indexes (i, j, k)
            - while index i lesser than Left array and index j lesser than Right array
            -   - start comparing Left[i] with Right[j]
                - if left is bigger, mutate original array -> 
                    - arr[k] = L[i], 
                    - increment i
                - else 
                    - arr[k] = R[j], 
                    - increment j
                - either way, increment k (because added into mutate index)
            - when either L or R are exhausted
            - while i < left length
                - arr[k] = L[i]
                - increment i
                - increment k
            - while j < right length
                - arr[k] = R[i]
                - increment j
                - increment k
         */
        let length = nums.length;
        if (length <= 1) return nums;
        if (length > 1) {
            let mid = Math.floor(length / 2);
            let left = nums.slice(0, mid);
            let right = nums.slice(mid, length);
            console.log('mid: ', mid);
            console.log('left: ', left);
            console.log('right: ', right);
            mergeSort(left);
            mergeSort(right);
            let i = 0,
                j = 0,
                k = 0;
            // compare left and right then mutate nums
            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    nums[k] = left[i];
                    i++;
                } else {
                    nums[k] = right[j];
                    j++;
                }
                k++;
            }
            // if either left or right runs out
            while (i < left.length) {
                // right ran out, so we just add all the leftovers from left
                nums[k] = left[i];
                i++;
                k++;
            }
            while (j < right.length) {
                // left ran out, so we just add all the leftovers from right
                nums[k] = right[j];
                j++;
                k++;
            }
        }
    };

    const quickSort = (nums) => {
        /**
         **  algorithm
            if array length less than 1 return array (already sorted)
            1. pick a pivot
            2. partition the array into two sub-arrays: elements less than the pivot 
               and elemnts greater than the pivot
            3. call quicksort recursively on the two subarrays
            
            - inside 2, the partition:
                - the pivot should not be part of the partitioned arrays. pop() it
                - then iterate through that pivotless array comparing each element to pivot
                - if lesser, partition it to left array, greater to right
            - the quicksort function will then return (quicksort(left) + pivot + quicksort(right)) 
        */
        if (nums.length < 2) {
            return nums;
        } else {
            let pivot = nums.pop();
            let length = nums.length;
            let result = [];
            let less = [];
            let greater = [];

            for (let i = 0; i < length; i++) {
                if (nums[i] <= pivot) {
                    less.push(nums[i]);
                } else {
                    greater.push(nums[i]);
                }
            }
            // console.log('less: ', less);
            // console.log('greater: ', greater);
            // recursively call quicksort on left and right of pivot
            result = result.concat(quickSort(less), pivot, quickSort(greater));
            nums.splice(0, nums.length, ...result);
            return nums;
        }
    };

    // mergeSort(nums);
    quickSort(nums);
    return nums;
    // let result = quickSort(nums);
    // console.log('nums after sort: ', result);
    // return result;
};

const nums = [5, 2, 3, 1];
console.log(solution(nums));
