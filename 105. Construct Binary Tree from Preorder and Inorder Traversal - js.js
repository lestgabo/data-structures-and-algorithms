/**
 ** 105. Construct Binary Tree from Preorder and Inorder Traversal
 ** Medium
 ** https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var solution = function (preorder, inorder) {
    /** 
     ** how creating the binary tree works:
        preorder -> root -> left -> right
        inorder -> left -> root -> right

        - the first element in preorder is a root
            - [3] 
        - find that same element in inorder
            - inside inorder, that root separates left and right subtrees from that root
            - [9]-left, [3]-root, [15,20,7]-right
        - left:
            - preorder: 9 20 15 7
            - inorder: 9
        - repeat again
        - root now 9, and inorder is done here (no more elements for it)
        - right: 
            - preorder: 20 15 7
            - inrder 15 20 7
     */
    let hash = {};
    inorder.forEach((node, index) => (hash[node] = index));

    const buildTree = (start, end) => {
        if (start > end) return null;

        let root = new TreeNode(preorder.shift());

        // new end is the location of the root element in inorder
        root.left = buildTree(start, hash[root.val] - 1);
        // new start is the location of the root element in inorder
        root.right = buildTree(hash[root.val] + 1, end);

        return root;
    };

    return buildTree(0, inorder.length - 1);
};

// const root = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)), new TreeNode(6));
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
console.log(solution(preorder, inorder));
