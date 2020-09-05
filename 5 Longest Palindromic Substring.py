"""
5. Longest Palindromic Substring
Medium

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:

Input: "cbbd"
Output: "bb"

https://leetcode.com/problems/longest-palindromic-substring/
"""


class Solution:
    # def longestPalindrome(self, s: str) -> str:
    #     # a palindrome has a center
    #     # think of each character as a center of a palindrome to check for all palindromes
    #     # a double center is also valid if the palindrome is even, while a single center is an odd palindrome
    #     # this should take O(n^2) time because:
    #     #   you have to pass through the string once, O(n), for each center or double center
    #     #   then the check for each palindrome of each center will take another pass, O(n)
    #     self.max_length = 0
    #     self.start = 0
    def longestPalindrome(self, s: str) -> str:
        if s == "":
            return s

        self.max_length = 0
        self.start = 0

        for i in range(len(s)):
            self.spreadOutFromCenter(s, i, i)
            self.spreadOutFromCenter(s, i, i+1)

        ans = s[self.start: self.start + self.max_length]
        return ans

    def spreadOutFromCenter(self, s, left, right):
        # if in boundary of string: left, right and equal left right -> then spread
        while (left > -1 and right < len(s) and s[left] == s[right]):
            left -= 1
            right += 1

        # new max and start if the palindrome is longer
        if (self.max_length < right-left-1):
            self.max_length = right-left-1
            self.start = left+1


sol = Solution()
s = "dabab"
print(sol.longestPalindrome(s))

# * working for 1 center
# class Solution:
#     def longestPalindrome(self, s: str) -> str:
#         # a palindrome has a center
#         # think of each character as a center of a palindrome to check for all palindromes
#         # a double center is also valid if the palindrome is even, while a single center is an odd palindrome
#         # this should take O(n^2) time because:
#         #   you have to pass through the string once, O(n), for each center or double center
#         #   then the check for each palindrome of each center will take another pass, O(n)
#         current_longest = []

#         for (i, center) in enumerate(s):
#             print('NEW ITERATION ** ************')
#             print('center ->', center)
#             print('i ->', i)
#             long_pal = [s[i]]

#             if current_longest == None:
#                 current_longest = long_pal

#             if (i - 1) >= 0:
#                 k = i - 1
#                 left = s[k]
#             else:
#                 k = None
#                 left = None
#             if (i + 1) < len(s):
#                 j = i + 1
#                 right = s[j]
#             else:
#                 j = None
#                 right = None

#             while (left == right):
#                 print('left ->', left)
#                 print('right ->', right)
#                 long_pal.insert(0, left)
#                 long_pal.append(right)

#                 if len(current_longest) < len(long_pal):
#                     current_longest = long_pal
#                 else:
#                     current_longest = current_longest

#                 # if left == None and right == None:
#                 # next left and right
#                 if (k - 1) >= 0:
#                     k = k - 1
#                     left = s[k]
#                 else:
#                     k = None
#                     left = None
#                 if (j + 1) < len(s):
#                     j = j + 1
#                     right = s[j]
#                 else:
#                     j = None
#                     right = None

#                 if left == None and right == None:
#                     break

#             # current_longest = max(current_longest, length)
#             # print('current_longest ->', current_longest)
#         return "".join(current_longest)


# sol = Solution()
# s = "boop meem poob"
# print(sol.longestPalindrome(s))
