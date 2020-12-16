/** 
    ** 104. Maximum Depth of Binary Tree
    ** Easy
    ** https://leetcode.com/problems/maximum-depth-of-binary-tree/

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

const solution2 = (root) => {
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

// makes more sense
const solution = (root) => {
    // on leaf, return 0 from left and right
    // therefore, going up the stack,
    // that leaf returns: Math.max(0, 0)+1 = 1
    // teste
    if (!root) return 0;

    let left = solution(root.left);
    let right = solution(root.right);

    return Math.max(left, right) + 1;
};

let root;
root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7, null, null)));

console.log(solution(root));
