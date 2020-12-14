/**
 ** 285. Inorder Successor in BST
 ** Medium
 ** https://leetcode.com/problems/inorder-successor-in-bst/

Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

The successor of a node p is the node with the smallest key greater than p.val.

 
Example 1:

Input: root = [2,1,3], p = 1
Output: 2
Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.

Example 2:

Input: root = [5,3,6,2,4,null,null,1], p = 6
Output: null
Explanation: There is no in-order successor of the current node, so the answer is null.


Note:

    If the given node has no in-order successor in the tree, return null.
    It's guaranteed that the values of the tree are unique.


 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */

const solution = (root, p) => {
    // two possibilities for a node's successor
    /**
    If the node has a right child, go one step right and then left till you can. Return the successor.

    Otherwise, implement iterative inorder traversal. While there are still nodes in the tree or in the stack:

        Go left till you can, adding nodes in stack.

        Pop out the last node. If its predecessor is equal to p, return that last node. Otherwise, save that node to be the predecessor in the next turn of the loop.

        Go one step right.

    If we're here that means the successor doesn't exit. Return null.
    */

    let stack = [];
    let inorder = null;

    if (p.right) {
        p = p.right;
        while (p.left) {
            p = p.left;
        }
        return p;
    }

    while (stack.length !== 0 || root) {
        // go left till you can

        while (root) {
            stack.push(root);
            root = root.left;
        }
        console.log('stack: ', stack);
        // now root becomes the left most
        root = stack.pop();
        console.log('stack popped, new root: ', root);
        // if previous node was equal to p, then the current node is its successor
        if (inorder === p.val) {
            return root;
        }
        inorder = root.val;

        // go one step right
        root = root.right;
    }
    return null;
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
// const p = new TreeNode(2);
const root = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)), new TreeNode(6));
const p = new TreeNode(3);

console.log(solution(root, p));
