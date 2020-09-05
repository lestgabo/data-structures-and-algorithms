"""
56. Merge Intervals
Medium

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
Output: [[1, 6], [8, 10], [15, 18]]
Explanation: Since intervals[1, 3] and [2, 6] overlaps, merge them into[1, 6].

Example 2:

Input: [[1, 4], [4, 5]]
Output: [[1, 5]]
Explanation: Intervals[1, 4] and [4, 5] are considered overlapping.
"""
from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals:
            return intervals
        # sort() can be used to perform this variation of sort by passing a function as a key that performs the sorting according to the desired inner list index
        intervals.sort(key=lambda x: x[0])
        merged = [intervals[0]]

        for current in intervals:
            previous = merged[-1]
            if current[0] <= previous[1]:
                # merging
                previous[1] = max(previous[1], current[1])
            else:
                merged.append(current)
        return merged


sol = Solution()
intervals = [[1, 3], [15, 18], [2, 6], [8, 10]]
print(sol.merge(intervals))
