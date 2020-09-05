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
    # brute force
    # def climbing_stairs(self, n: int):
    #     return self.climbing_stairs_recur(0, n)

    # def climbing_stairs_recur(self, i: int, n: int):
    #     if i > n:
    #         return 0
    #     if i == n:
    #         return 1
    #     return self.climbing_stairs_recur(i+1, n) + self.climbing_stairs_recur(i+2, n)

    def climbing_stairs(self, n: int):
        # initialize dp array of n size
        dp = [0] * (n + 1)
        dp[1] = 1
        # print(dp)
        dp[2] = 2
        # print(dp)
        for i in range(3, n+1):
            dp[i] = dp[i-1] + dp[i-2]
        return(dp[n])


sol = Solution()
n = 4
print(sol.climbing_stairs(n))
