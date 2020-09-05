"""
20. Valid Parentheses
Easy

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true

Example 2:

Input: "()[]{}"
Output: true

Example 3:

Input: "(]"
Output: false

Example 4:

Input: "([)]"
Output: false

Example 5:

Input: "{[]}"
Output: true



https://leetcode.com/problems/valid-parentheses/
"""


class Solution:
    def validParentheses(self, s: str) -> bool:
        temp = str(s)
        want_empty = []
        past_c = ''
        for i, c in enumerate(s):
            # print('c->', c)
            # print('i->', i)
            # if want_empty != []:
            #     print('want_empty[-1]->', want_empty[-1])
            # print('want_empty->', want_empty)
            # '(', ')', '[', ']', '{', '}'
            if (c == ")" and past_c == "(") or (c == "]" and past_c == "[") or (c == "}" and past_c == "{"):
                want_empty.pop()
                if want_empty != []:
                    past_c = want_empty[-1]
            else:
                want_empty.append(c)
                past_c = c

        # print('want_empty - after for loop ->', want_empty)
        print('want_empty -> ', want_empty)
        if want_empty == []:
            return True
        else:
            return False


sol = Solution()
# s = "()[]{}"
s = "[[]][][()(){}]"
print(sol.validParentheses(s))
