"""
Given an array of integers nums, sort the array in ascending order.



Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]

Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]


https://leetcode.com/problems/sort-an-array
"""

# best merge sort explanation: https://www.youtube.com/watch?v=TzeBrDU-JaY
from typing import List

# correct


class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        self.mergeSort(nums)
        return nums

    def mergeSort(self, arr: List[int]) -> List[int]:
        if (len(arr) > 1):
            mid = len(arr)//2
            L = arr[:mid]
            R = arr[mid:]

            self.mergeSort(L)
            self.mergeSort(R)

            i = 0  # index for L array
            j = 0  # index for R array
            k = 0  # index to mutate arr array

            # once divided into single elements
            while i < len(L) and j < len(R):
                if L[i] < R[j]:
                    arr[k] = L[i]
                    i += 1
                else:
                    arr[k] = R[j]
                    j += 1
                k += 1

            # when either L or R are exhausted
            while i < len(L):
                arr[k] = L[i]
                i += 1
                k += 1

            while j < len(R):
                arr[k] = R[j]
                j += 1
                k += 1


sol = Solution()

nums = [5, 1, 1, 2, 0, 0]

print(sol.sortArray(nums))
