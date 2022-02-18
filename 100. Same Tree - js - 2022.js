/**
 ** 100. Same Tree
 ** Easy
 ** https://leetcode.com/problems/same-tree/

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 
Example 1:

Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:

Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:

Input: p = [1,2,1], q = [1,1,2]
Output: false

 

Constraints:

    The number of nodes in both trees is in the range [0, 100].
    -104 <= Node.val <= 104
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

const isSameTree = (p, q) => {
    let pVals = [];
    let qVals = [];

    // left right root
    const postOrder = (root, pVals, qVals) => {
        if (!root) { 
            if (pVals) pVals.push(null)
            if (qVals) qVals.push(null)
            return;
        }

        postOrder(root.left, pVals, qVals);
        postOrder(root.right, pVals, qVals);
        console.log('root.val: ', root.val)
        if (pVals) pVals.push(root.val)
        if (qVals) qVals.push(root.val)
    } 
    console.log('p: ', p)
    console.log('q: ', q)
    postOrder(p, pVals, null);
    postOrder(q, null, qVals);

    console.log('pVals: ', pVals)
    console.log('qVals: ', qVals)
    const longer = Math.max(pVals.length, qVals.length);
    // compare vals
    for (let i = 0; i < longer; i++) {
        console.log('pVals[i]: ', pVals[i])
        console.log('qVals[i]: ', qVals[i])
        console.log('***********')
        if (pVals[i] !== qVals[i]) return false;
    }

    return true;
};

const p = new TreeNode(null);
const q = new TreeNode(0);

// const p = new TreeNode(2, new TreeNode(2));
// const q = new TreeNode(2, new TreeNode(2));

// const p = new TreeNode(1, new TreeNode(2));
// const q = new TreeNode(1, null, new TreeNode(2));

// const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// const q = new TreeNode(1, new TreeNode(1), new TreeNode(3));
console.log(isSameTree(p, q));
