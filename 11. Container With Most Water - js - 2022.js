/**
 ** 11. Container With Most Water
 ** Medium
 ** https://leetcode.com/problems/container-with-most-water/

Given n non-negative integers a1, a2, ..., an , where each represents a 
point at coordinate (i, ai). n vertical lines are drawn such that the 
two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, 
which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

 // newer 2022 question
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
// newer 2022 question

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

    // max height is the lowest between the 2 pointers (start, end)
    // so find the min of the two and save it as min
    // and we find our contained by multiplying the min with the x-axis 
    // which is the difference between start and end
    // the strick is:
    //   increment start if: its lower than end,
    //   decrement end if: lower than start,


    let start = 0
    let end = height.length - 1;
    let contained = 0;
    while (start < end) {
        let lowerHeight = Math.min(height[start], height[end])
        contained = Math.max(contained, lowerHeight * (end - start))

        if (height[start] > height[end]) {
            end--;
        } else {
            start++;
        }
    }
    return contained;
};

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const height =  [4,3,2,1,4];
console.log(maxArea(height));
