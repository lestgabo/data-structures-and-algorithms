/** 
    ** 104. Maximum Depth of Binary Tree
    ** Easy
    ** https://leetcode.com/problems/maximum-depth-of-binary-tree/

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 
Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2


Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const maxDepth = (root) => {
    /**
     * - do preorder traversal (root, left, right) while having a level counter
     * - add level counter into a hash map
     */

    // edge
    if (!root || root.val === null) return 0;

    let myHash = {};

    const helper = (root, level) => {
        if (!root) return;

        level += 1;

        if (!myHash[level]) {
            myHash[level] = [root.val];
        } else {
            myHash[level].push(root.val)
        }

        helper(root.left, level);
        helper(root.right, level);
    }

    helper(root, 0)

    const levels = Object.keys(myHash);
    // console.log('levels: ' ,levels)
    return levels[levels.length - 1];
};

const root = new TreeNode(null);
// const root = new TreeNode(2);
// const root = new TreeNode(1, null, new TreeNode(2));
// const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7, null, null)));

console.log(maxDepth(root));
