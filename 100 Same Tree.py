"""
100. Same Tree
Easy

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true

Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false

Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false


https://leetcode.com/problems/same-tree/
"""
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def preorder(root, values):
    if root:
        values.append(root.val)
        if root.left is None and root.right is not None:
            values.append(None)
        preorder(root.left, values)
        preorder(root.right, values)


def isSameTree(p: TreeNode, q: TreeNode) -> bool:
    values_p = []
    values_q = []
    preorder(p, values_p)
    preorder(q, values_q)
    print('values_p -> ', values_p)
    print('values_q -> ', values_q)
    if len(values_p) == len(values_q):
        for i in range(len(values_p)):
            if values_p[i] != values_q[i]:
                return False
    else:
        return False

    return True

    # preorder(q)


# p = TreeNode(1)
# p.left = TreeNode(2)
# p.right = TreeNode(3)
# p.right.right = TreeNode(22)
# q = TreeNode(1)
# q.left = TreeNode(2)
# q.right = TreeNode(3)
# q.right.right = TreeNode(22)

p = TreeNode(1)
p.left = TreeNode(2)
q = TreeNode(1)
q.right = TreeNode(2)

# preorder(p)
print(isSameTree(p, q))
# print(preorder(TreeNode, p))
