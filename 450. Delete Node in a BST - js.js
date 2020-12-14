/**
 ** 450. Delete Node in a BST
 ** Medium
 ** https://leetcode.com/problems/delete-node-in-a-bst/

Given a root node reference of a BST and a key, 
delete the node with the given key in the BST. 
Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

    Search for a node to remove.
    If the node is found, delete the node.

Follow up: Can you solve it with time complexity O(height of tree)?

 

Example 1:

Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Example 2:

Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.

Example 3:

Input: root = [], key = 0
Output: []

 

Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -105 <= Node.val <= 105
    Each node has a unique value.
    root is a valid binary search tree.
    -105 <= key <= 105
 */

/**
 ** @param {TreeNode} root
 ** @param {number} key
 ** @return {TreeNode}
 */

const solution = (root, key) => {
    // console.log(root);

    // one step right and then always left
    const successor = (node) => {
        node = node.right;
        while (node.left) {
            node = node.left;
        }
        return node.val;
    };

    // one step left and then always right
    const predecessor = (node) => {
        node = node.left;
        while (node.right) {
            node = node.right;
        }
        return node.val;
    };

    const helper = (root, key) => {
        if (!root) {
            return null;
        }
        // check key if greater than val go right, else go left
        if (root.val < key) {
            root.right = helper(root.right, key);
        } else if (root.val > key) {
            root.left = helper(root.left, key);
        } else {
            // node is at key
            if (root.right) {
                // get the key to replace current node
                root.val = successor(root);
                // recursively delete the successor
                root.right = helper(root.right, root.val);
            } else if (root.left) {
                root.val = predecessor(root);
                // recursively delete the predecessor
                root.left = helper(root.left, root.val);
            } else {
                // node is a leaf
                root = null;
            }
        }
        return root;
    };

    return helper(root, key);
};

/**
 ** Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7)));
// const root = new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, new TreeNode(3), new TreeNode(7)));
// const TreeNode = [5, 3, 6, 2, 4, null, 7];
const key = 3;
console.log(solution(root, key));

/*
 * inorder traversal
 *
 */
// if (root) {
//     dfsHelper(root.left);
//     console.log(root.val);
//     dfsHelper(root.right);
// }
