/**
 ** 1026. Maximum Difference Between Node and Ancestor
 ** Medium
 ** https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/

Given the root of a binary tree, find the maximum value V for which there exist different nodes A and B where V = |A.val - B.val| and A is an ancestor of B.

A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is an ancestor of B.

 

Example 1:

Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.

Example 2:

Input: root = [1,null,2,null,0,3]
Output: 3

 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
    // console.log(root);
    // use a helper function to get the max, recursively get max of each node from its left and right leaves
    // if on a leaf, return max-min -> which is then returned to the ancestor node

    // edge
    if (!root) return 0;

    const helper = (node, max, min) => {
        // on a leaf
        if (!node) return max - min;

        // update max and min
        max = Math.max(max, node.val);
        min = Math.min(min, node.val);
        let left = helper(node.left, max, min);
        let right = helper(node.right, max, min);

        // return the max of left and right subtrees
        return Math.max(left, right);
    };

    return helper(root, root.val, root.val);
};

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// root = [8,3,10,1,6,null,14,null,null,4,7,13]
const root = new TreeNode(
    8,
    new TreeNode(3, new TreeNode(1), new TreeNode(6, new TreeNode(4), new TreeNode(7))),
    new TreeNode(10, null, new TreeNode(14, new TreeNode(13), null))
);
console.log(maxAncestorDiff(root));
