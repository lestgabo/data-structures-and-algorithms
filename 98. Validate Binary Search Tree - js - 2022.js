/**
 ** 98. Validate Binary Search Tree
 ** Medium
 ** https://leetcode.com/problems/validate-binary-search-tree/

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.


Example 1:

Input: root = [2,1,3]
Output: true

Example 2:

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.


Constraints:

    The number of nodes in the tree is in the range [1, 104].
    -231 <= Node.val <= 231 - 1
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isValidBST = (root) => {
    // console.log(root);

    // try inorder => (left, node, right)
    // inorder traversal of a valid Binary Search Tree means
    // that each element should be smaller than the next one

    let result = [];
    const inOrder = (root) => {
        if (!root) return

        inOrder(root.left);
        // console.log('val: ', root.val)
        result.push(root.val);
        inOrder(root.right);
        
    }
    inOrder(root);
    // console.log('result: ', result);
    // edge
    if (result.length === 1) return true;
    
    // check if in order
    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] >= result[i + 1]) return false;
    }
    return true;
};

/**
 ** Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// const root = new TreeNode(2, new TreeNode(2));
// const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const root = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
console.log(isValidBST(root));
