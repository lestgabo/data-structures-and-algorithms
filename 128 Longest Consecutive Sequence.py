"""
128. Longest Consecutive Sequence
Hard

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
https://leetcode.com/problems/longest-consecutive-sequence/

"""

from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:


nums = [100, 4, 200, 1, 3, 2]
sol = Solution()
print(sol.longestConsecutive(nums))
