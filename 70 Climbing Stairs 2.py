"""
70. Climbing Stairs
Easy

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

https://leetcode.com/problems/climbing-stairs/

"""


class Solution:
    # better -> passes

    def climbing_stairs(self, n: int):
        if n == 1:
            return 1
        a = 1
        b = 2
        for _ in range(2, n):
            temp = b
            b = a + b
            a = temp
        return b


sol = Solution()
n = 4
print(sol.climbing_stairs(n))
