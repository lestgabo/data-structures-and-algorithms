/**
 ** 11. Container With Most Water
 ** Medium
 ** https://leetcode.com/problems/container-with-most-water/

Given n non-negative integers a1, a2, ..., an , where each represents a 
point at coordinate (i, ai). n vertical lines are drawn such that the 
two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, 
which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

 

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

Example 3:

Input: height = [4,3,2,1,4]
Output: 16

Example 4:

Input: height = [1,2,1]
Output: 2

 

Constraints:

    n = height.length
    2 <= n <= 3 * 104
    0 <= height[i] <= 3 * 104
 */

const maxArea = (height) => {
    // two pointers, start and end
    // min = min(start, end)
    // maxArea = max(max, min*(end.index-start.index))
    // increment start if: its lower than end,
    // decrement end if: lower than start,

    let min = Number.MAX_VALUE;
    let maxArea = -Number.MAX_VALUE;
    // console.log('min: ', min);
    // console.log('max: ', max);
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        let start = height[i];
        let end = height[j];

        min = Math.min(start, end);
        maxArea = Math.max(maxArea, min * (j - i));
        // console.log('---NEW INTERATION---');
        // console.log('start: ', start);
        // console.log('end: ', end);
        // console.log('min: ', min);
        // console.log('maxArea: ', maxArea);
        if (start > end) {
            j--;
        } else {
            i++;
        }
    }
    return maxArea;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
