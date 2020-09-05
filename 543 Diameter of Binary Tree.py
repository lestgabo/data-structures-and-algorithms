# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def diameterOfBinaryTree(self, root):
        self.ans = 1

        def depth(node):
            if not node:
                return 0

            L = depth(node.left)
            R = depth(node.right)
            self.ans = max(self.ans, L+R+1)
            return max(L, R)+1

        depth(root)
        return self.ans-1  # self.ans returns number of nodes, but we want number of paths so -1


testHead = TreeNode(1)
node2 = TreeNode(2)
node3 = TreeNode(3)
node4 = TreeNode(4)
node5 = TreeNode(5)
testHead.left = node2
testHead.right = node3
node2.left = node4
node3.right = node5

sol = Solution()
print(sol.diameterOfBinaryTree(testHead))
