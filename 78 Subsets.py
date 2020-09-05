from typing import List


class Powerset:
    def __init__(self):
        self.results = []

    def generate_power_set(self, nums: List[int]):
        results = []
        self.dfs(sorted(nums), 0, [], results)
        return results

    def dfs(self, nums, index, path, results):
        results.append(path)
        for i in range(index, len(nums)):
            self.dfs(nums, i+1, path+[nums[i]], results)


powerset = Powerset()
print(powerset.generate_power_set([1, 2, 3]))
"""
FFurus
127

August 31, 2019 10:22 AM
Read More

DFS Visualization
idea from @Baka_Debakar

dfs(nums = [1,2,3], index = 0, path = [], res = [])
|
|__ dfs(nums = [1,2,3], index = 1 , path = [1], res = [[]])
|    |__ dfs(nums = [1,2,3], index = 2 , path = [1,2], res = [[],[1]])
|    	  |__ dfs(nums = [1,2,3], index = 3 , path = [1,2,3], res = [[],[1], [1,2]])
|    	  	   # next: res = [[],[1],[1,2],[1,2,3]]
|    	  	   # for loop will not be executed
|
|__ dfs(nums = [1,2,3], index = 2, path = [[2]], res = [[],[1],[1,2],[1,2,3]])
|    |__ dfs(nums = [1,2,3], index = 3 , path = [[2,3]], res = [[],[1],[1,2],[1,2,3],[2])
|    	  	   # next iteration: res =  [[],[1],[1,2],[1,2,3],[2],[2,3])
|    	  	   # for loop will not be executed
|
|__ dfs(nums = [1,2,3], index = 3, path = [[3]], res =  [[],[1],[1,2],[1,2,3],[2],[2,3])
     	  	   # next iteration: res =  [[],[1],[1,2],[1,2,3],[2],[2,3],[3])
     	  	   # for loop will not be executed

"""
