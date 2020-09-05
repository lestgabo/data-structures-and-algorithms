"""
102. Binary Tree Level Order Traversal
Medium

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its level order traversal as:

[
  [3],
  [9,20],
  [15,7]
]

https://leetcode.com/problems/binary-tree-level-order-traversal/
"""
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def levelOrderTraversal(p: TreeNode) -> bool:
    values = []

    def levelOrder(root, level):
        print('new loop of levelOrder **************')
        print('values -> ', values)
        if root:
            if len(values) == level:
                values.append([])
            values[level].append(root.val)
            if root.left:
                print('level -> ', level)
                print('root.left.val ->', root.left.val)
                levelOrder(root.left, level + 1)
            if root.right:
                print('level -> ', level)
                print('root.right.val ->', root.right.val)
                levelOrder(root.right, level + 1)

    levelOrder(p, 0)
    return values


p = TreeNode(3)
p.left = TreeNode(9)
p.right = TreeNode(20)
p.left.left = TreeNode(33)
p.right.left = TreeNode(15)
p.right.right = TreeNode(7)

print(levelOrderTraversal(p))
