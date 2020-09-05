/*
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

https://leetcode.com/problems/maximum-depth-of-binary-tree/
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const solution = (root) => {
    let level = 0;
    this.depth = 0;

    const helper = (root, level) => {
        this.depth = Math.max(this.depth, level);
        if (root) {
            helper(root.left, level + 1);
            helper(root.right, level + 1);
        }
    };

    helper(root, level);
    return this.depth;
};

let root;
root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7, new TreeNode(15), null)));

console.log('root ->', root);
console.log(solution(root));
