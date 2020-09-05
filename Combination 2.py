from typing import List


class Solution:
    def combination(self, nums: List[int]) -> List[List[int]]:
        big_arr = [[]]
        answer = []
        target = nums[0]
        if nums:
            nums = nums[1::]

        for num in nums:
            temp_list = list(big_arr)

            for i in range(len(temp_list)):
                temp_list[i] = temp_list[i] + [num]
                print('temp_list[i] ->', temp_list[i])
                big_arr = big_arr + [temp_list[i]]

        for nums in big_arr:
            if sum(nums) == target:
                answer = answer + [nums]
        return answer


sol = Solution()
print(sol.combination([9, 2, 3, 4, 5]))
