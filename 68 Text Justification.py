"""
68. Text Justification
Hard

Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

    A word is defined as a character sequence consisting of non-space characters only.
    Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
    The input array words contains at least one word.

Example 1:

Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Example 2:

Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified becase it contains only one word.

Example 3:

Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]


https://leetcode.com/problems/text-justification/
"""
from typing import List
import copy


class Solution(object):

    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        # print('before: ', words)

        lines = self.getLines(words, maxWidth)
        # print('lines: ', lines)

        justified = self.justifyLines(lines, maxWidth)

    def justifyLines(self, lines: List[str], maxWidth: int):
        justified = []

        for line in lines:
            tempLine = copy.deepcopy(line)
            spacesNeeded = maxWidth - len(tempLine)

            lineArray = line.split(" ")

            # print('lineArray: ', lineArray)
            # print('spacesNeeded: ', spacesNeeded)
            spacesIndex = []
            # saves space indexes into an array
            for i, ch in enumerate(tempLine):
                if ch == " ":
                    spacesIndex.append(i)

            # do loop if theres spaces to add into line
            while spacesNeeded > 0 and spacesIndex != []:
                for i, ch in enumerate(tempLine):
                    if ch == " ":
                        tempLine = tempLine[:i] + " " + tempLine[i:]
                        spacesNeeded -= 1
                        i += 1

            print('tempLine: ', tempLine)
            justified.append(tempLine)

        return justified

    def getLines(self, words, maxWidth):
        tempWords = copy.deepcopy(words)
        localMax = 0
        line = ''
        lines = []
        while len(tempWords) > 0:
            word = tempWords.pop(0)
            localMax += len(word)
            # while I still have words left, do the loop
            if localMax > maxWidth:
                localMax = 0
                # if line has extra space, ignore it when appending
                if line[-1] == " ":
                    lines.append(line[:-1])
                else:
                    lines.append(line)
                line = ''
            line += word
            # gives space after each word
            if localMax + 1 < maxWidth:
                localMax += 1
                line += " "

        # if line has extra space, ignore it when appending
        if line[-1] == " ":
            lines.append(line[:-1])
        else:
            lines.append(line)

        return lines


sol = Solution()
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
print(sol.fullJustify(words, maxWidth))
