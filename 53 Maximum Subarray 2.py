"""
53. Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
"""

from typing import List


class Solution:
    def maxSubarray(self, nums: List[int]) -> int:
        left = 0
        right = 1
        max_sum = float('-inf')
        temp = []
        while left < len(nums):
            if left == right:
                right += 1
            print('left -> ', left)
            print('right -> ', right)
            temp = nums[left:right]
            curr_sum = sum(temp)
            if curr_sum < 0 or right == len(nums):
                left += 1
            else:
                right += 1
            max_sum = max(max_sum, curr_sum)
            print('current sum ->', curr_sum)
            print('max_sum ->', max_sum)
        return max_sum


# nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
# nums = [-2, 1, -3, 4, -1, -2, -1, 5, 4]
nums = [-1]
# nums = [-2, -3, -1]
# nums = [4, -1, 2, 1, 5, 4]
sol = Solution()
print(sol.maxSubarray(nums))
