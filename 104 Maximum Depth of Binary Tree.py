"""
104. Maximum Depth of Binary Tree
Easy

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its depth = 3.
"""

# Definition for a binary tree node.


class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def maxDepth(self, root) -> int:
        depth = 0
        depth = self.maxDepthHelper(root, 0)
        return depth

    def maxDepthHelper(self, root, depth):
        if root == None:
            return depth
        # elif root.left == None and root.right == None:
        #     return depth+1
        depth_left = self.maxDepthHelper(root.left, depth+1)
        depth_right = self.maxDepthHelper(root.right, depth+1)
        return max(depth_left, depth_right)


root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
r = TreeNode(7)
root.right.right = r
l = TreeNode(15)
root.right.left = l
# rr = TreeNode(223)
# r.right = rr
sol = Solution()

# root = [3, 9, 20, None, None, 15, 7]
print(sol.maxDepth(root))
