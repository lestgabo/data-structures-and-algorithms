

"""
7. Reverse Integer
Easy

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

"""
from typing import List


class Solution:
    def reverse(self, x: int) -> int:
        answer = 0
        while x > 0:
            answer = answer * 10
            answer = answer + (x % 10)
            x = x//10
        return answer

    def reverseString(self, x: int) -> int:
        string = str(x)
        reversed_string = string[::-1]
        return int(reversed_string)


sol = Solution()
print(sol.reverse(1220300))
print(sol.reverseString(1236670))
