/**
 ** 105. Construct Binary Tree from Preorder and Inorder Traversal
 ** Medium
 ** https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

Given two integer arrays preorder and inorder where preorder is the preorder traversal 
of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.


Example 1:

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]


Constraints:

    1 <= preorder.length <= 3000
    inorder.length == preorder.length
    -3000 <= preorder[i], inorder[i] <= 3000
    preorder and inorder consist of unique values.
    Each value of inorder also appears in preorder.
    preorder is guaranteed to be the preorder traversal of the tree.
    inorder is guaranteed to be the inorder traversal of the tree.
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

const buildTree = (preorder, inorder) => {
    /**
     * how creating the binary tree works:
     * Input:  preorder = [3,9,20,15,7], 
     *          inorder = [9,3,15,20,7]
       Output:            [3,9,20,null,null,15,7]
     *  preorder: root -> left -> right
        inorder: left -> root -> right
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
     * 
     * 2022 notes:
     * - need to recursively make left and right subtrees within inorder  
     * - get the roots from preorder
     * - use hashmap to save inroder index relative to its node because we are
     *   using it to create new subtrees and need to have a start and end
     * - need to add boundary check for the start end to return the recursions
     *   which should be when start becomes greater than end
     * 
     */

    let myHash = {};
    inorder.map((node, index) => myHash[node] = index)
    // console.log(myHash)

    const subtree = (start, end) => {
        // boundary found, ends the recursion 
        if (start > end) return null;

        // root is always the next up in line in preorder
        let root = new TreeNode(preorder.shift());

        // console.log(root)

        // separate the left and right subtrees using root as the middle
        // this is why hashmap of inorder indexes is needed
        root.left = subtree(start, myHash[root.val] - 1);
        root.right = subtree(myHash[root.val] + 1, end);

        return root;
    }

    // full tree
    return subtree(0, inorder.length - 1)
};

// const root = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)), new TreeNode(6));
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));
