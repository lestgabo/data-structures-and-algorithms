
from collections import deque


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        window = deque([])
        max_length = 0

        for c in s:
            count = 0

            # checks where duplicate is
            for i in range(len(window)):
                if window[i] == c:
                    count = i + 1

            # pops until duplicate is gone
            for _ in range(count):
                window.popleft()

            window.append(c)
            max_length = max(max_length, len(window))

        return max_length


sol = Solution()
# print(sol.lengthOfLongestSubstring("abcabcbb"))
print(sol.lengthOfLongestSubstring("pwwkew"))
