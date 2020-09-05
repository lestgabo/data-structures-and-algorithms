/**
 * 226. Invert Binary Tree
Easy

Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

https://leetcode.com/problems/invert-binary-tree/
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const solution = (root) => {
    if (root == null) return null;
    if (root) {
        let temp = root.left;
        root.left = solution(root.right);
        root.right = solution(temp);
    }
    return root;
};

let root;
root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
// root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7, new TreeNode(15), null)));

console.log('root ->', root);
console.log('***************************');
console.log(solution(root));
