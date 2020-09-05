

from typing import List


class Solution:
    def palindrome(self, s: str) -> bool:
        print(list(reversed(s)))
        print(''.join(list(reversed(s))))
        print(s)


sol = Solution()
print(sol.palindrome('hello'))
