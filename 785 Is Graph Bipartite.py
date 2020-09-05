class Solution:
    def isBipartite(self, graph):
        color = dict()

        def depth_first_search(position: int):
            for i in graph[position]:
                if i in color:
                    if color[i] == color[position]:
                        return False
                else:
                    color[i] = 1-color[position]
                    if not depth_first_search(i):
                        return False
            return True

        for i in range(len(graph)):
            if i not in color:
                color[i] = 0
                if not depth_first_search(i):
                    return False

        return True


sol = Solution()
print(sol.isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]))
