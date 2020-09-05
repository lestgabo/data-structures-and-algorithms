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
        # running sum
        curr_sum = [nums[0]]
        for i in range(len(nums)-1):
            if curr_sum[i] < 0:
                curr_sum.append(0 + nums[i+1])
            else:
                curr_sum.append(curr_sum[i] + nums[i+1])

        return max(curr_sum)

        # # print(sum(nums))
        # curr_sum = 0
        # for i in range(len(nums)):
        #     for j in range(1, len(nums)):
        #         # curr_sum =
        #         curr_sum = max(curr_sum, sum(nums[i:j+1]))

        # return curr_sum


# nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
# nums = [-2, 1, -3, 4, -1, -2, -1, 5, 4]
nums = [-2, -3, -1]
# nums = [4, -1, 2, 1, 5, 4]
sol = Solution()
print(sol.maxSubarray(nums))
