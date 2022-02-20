/**
 ** 102. Binary Tree Level Order Traversal
 ** Easy
 ** https://leetcode.com/problems/same-tree/

Given the root of a binary tree, return the level order traversal of 
its nodes' values. (i.e., from left to right, level by level).

 
Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
Output: []


Constraints:

    The number of nodes in the tree is in the range [0, 2000].
    -1000 <= Node.val <= 1000
 */

/**
 ** Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const levelOrder = (root) => {
    
};

const root = new TreeNode(null);
// const root = new TreeNode(2, new TreeNode(2));
// const root = new TreeNode(1, null, new TreeNode(2));
// const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(levelOrder(root));
