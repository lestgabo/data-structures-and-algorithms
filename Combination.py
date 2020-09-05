from typing import List


class Solution:
    def combination(self, nums: List[int]) -> List[List[int]]:
        big_arr = [[]]

        for num in nums:
            temp_list = list(big_arr)

            for i in range(len(temp_list)):
                temp_list[i] = temp_list[i] + [num]
                big_arr = big_arr + [temp_list[i]]

        return big_arr


sol = Solution()
print(sol.combination([1, 2, 3, 4]))
