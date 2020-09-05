/**
 * 
 * 235. Lowest Common Ancestor of a Binary Search Tree
Easy

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

 

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

 

Constraints:

    All of the nodes' values will be unique.
    p and q are different and both values will exist in the BST.

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const solution = (root, p, q) => {
    this.lowestCommonAncestor = root.val;
    if (root) {
        if (root.val > p.val && root.val > q.val) {
            solution(root.left, p, q);
        } else if (root.val < p.val && root.val < q.val) {
            solution(root.right, p, q);
        } else {
            this.lowestCommonAncestor = root.val;
        }
    }
    return this.lowestCommonAncestor;
};

let root;
root = new TreeNode(
    6,
    new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
    new TreeNode(8, new TreeNode(7), new TreeNode(9))
);
// let p = new TreeNode(2);
// let q = new TreeNode(4);
let p = new TreeNode(2);
let q = new TreeNode(8);
// console.log('root ->', root);
// console.log('***************************');
console.log(solution(root, p, q));
