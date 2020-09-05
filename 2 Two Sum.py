

from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        complement = {}

        for idx, num in enumerate(nums):
            if num in complement:
                return [complement[num], idx]
            else:
                complement[target - num] = idx


sol = Solution()
print(sol.twoSum([2, 7, 11, 15], 9))
