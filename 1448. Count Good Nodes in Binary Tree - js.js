/**
 ** 1448. Count Good Nodes in Binary Tree
 ** Medium
 ** https://leetcode.com/problems/count-good-nodes-in-binary-tree/

Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

 

Example 1:

Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.

Example 2:

Input: root = [3,3,null,4,2]
Output: 3
Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

Example 3:

Input: root = [1]
Output: 1
Explanation: Root is considered as good.

 

Constraints:

    The number of nodes in the binary tree is in the range [1, 10^5].
    Each node's value is between [-10^4, 10^4].

 */

const solution = (root) => {
    // console.log(root);
    // save a global good
    // have a max when going through each node, max is b/w current node.val and max
    // recurse helper, going through each node (preorder: root, left, right)
    // if max is equal to or greater than current node.val then good++

    let good = 0;
    if (!root) return 0;

    const helper = (node, max) => {
        // found leaf
        if (!node) return;

        max = Math.max(max, node.val);
        if (node.val >= max) good++;
        helper(node.left, max);
        helper(node.right, max);
    };

    helper(root, root.val);
    return good;
};

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

root = new TreeNode(3, new TreeNode(1, new TreeNode(3), null), new TreeNode(4, new TreeNode(1), new TreeNode(5)));
console.log(solution(root));
