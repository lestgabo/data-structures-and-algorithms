"""
11. Container With Most Water
Medium

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

 

The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49


https://leetcode.com/problems/container-with-most-water/
"""

from typing import List


class Solution:
    def mostWater(self, height: List[int]) -> int:
        water_width = float('inf')
        water_height = float('inf')
        max_area = 0
        i = 0
        j = len(height)-1

        while (i != j):
            water_width = j - i
            if height[i] > height[j]:
                water_height = height[j]
                j -= 1
            else:
                water_height = height[i]
                i += 1
            max_area = max(max_area, water_width * water_height)

        return max_area


sol = Solution()
height = [1, 8, 2, 5]
print(sol.mostWater(height))

# * brute force -> works
# class Solution:
#     def mostWater(self, height: List[int]) -> int:
#         water_width = float('inf')
#         water_height = float('inf')
#         max_area = 0
#         for i in range(len(height)):
#             for j in range(i+1, len(height)):
#                 water_width = j-i
#                 water_height = min(height[i], height[j])
#                 # print('i: ', i, 'height: ', height[j])
#                 # print('water_width: ', water_width)
#                 # print('water_height: ', water_height)
#                 # print('area: ', water_width * water_height)
#                 max_area = max(max_area, water_width * water_height)

#         return max_area


# sol = Solution()
# height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
# print(sol.mostWater(height))
