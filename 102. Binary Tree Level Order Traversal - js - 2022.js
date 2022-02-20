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
    /**
     * - use BFS (breadth-first search) - ideal but i tots forgot how to do it
     * - 
     * - gonna try using hashmap - save the levels as keys
     */

    let myHash = {};
    let solution = [];

    const helper = (root, level) => {
        if (!root) return;

        level += 1;
        if (!myHash[level]) {
            myHash[level] = [root.val];
        } else {
            myHash[level].push(root.val);
        }
        // myHash[`${level}`].push(root.val)
        console.log('level: ', level);
        console.log('root val: ', root.val);
        console.log('****************');
        helper(root.left, level);
        helper(root.right, level);
    }

    helper(root, 0)
    console.log('myHash: ' ,myHash)
    Object.values(myHash).map((vals) => {
        console.log('vals: ', vals)
        solution.push(vals);
    })
    return solution
};

// const root = new TreeNode(null);
// const root = new TreeNode(2, new TreeNode(2));
// const root = new TreeNode(1, null, new TreeNode(2));
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(44)), new TreeNode(3, new TreeNode(33), new TreeNode(5, new TreeNode(6), new TreeNode(7))));
// const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3, null, new TreeNode(5, new TreeNode(6), new TreeNode(7))));
console.log(levelOrder(root));
