"""
200. Number of Islands
Medium

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1

Example 2:

Input:
11000
11000
00100
00011

Output: 3

my approach: use BFS to collapse each found island
11000
10001
00000
00000

00000
00001  1
00000
00000

00000
00000  2
00000
00000
"""

from typing import List


class Solution:
    def numOfIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0

        count = 0
        row = len(grid)
        col = len(grid[0])
        visited = [[False for j in range(col)] for i in range(row)]

        def dfs(i: int, j: int):
            if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or visited[i][j] == True or grid[i][j] == '0':
                return  # if any of the above are true, we exit the dfs function
            visited[i][j] = True
            dfs(i-1, j)
            dfs(i+1, j)
            dfs(i, j-1)
            dfs(i, j+1)

        for i in range(row):
            for j in range(col):
                if grid[i][j] == '1' and not visited[i][j]:
                    dfs(i, j)
                    count += 1

        return count


grid = [["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "1"]]
sol = Solution()
print(sol.numOfIslands(grid))


"""
class Solution(object):
    def numIslands(self, grid):
#    
# : type grid: List[List[str]]
# : rtype: int
# 
        if not grid: return 0
        r, c = len(grid), len(grid[0])
        visited = [[False for _ in range(c)] for _ in range(r)]

        def dfs(i, j):
            if i < 0 or i >= r or j < 0 or j >= c or grid[i][j] == '0' or visited[i][j]:
                return
            visited[i][j] = True
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)

        count = 0
        for i in range(r):
            for j in range(c):
                if not visited[i][j] and grid[i][j] == '1':
                    dfs(i, j)
                    count += 1
        return count
"""
