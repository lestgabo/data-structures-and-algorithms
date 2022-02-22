/**
 ** 124. Binary Tree Maximum Path Sum
 ** Hard
 ** https://leetcode.com/problems/binary-tree-maximum-path-sum/

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes 
in the sequence has an edge connecting them. 
A node can only appear in the sequence at most once. 
Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

 
Example 1:

Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Example 2:

Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

 
Constraints:
    The number of nodes in the tree is in the range [1, 3 * 104].
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
 * @param {TreeNode} root
 * @return {number}
 */

const maxPathSum = (root) => {
    /**
     * - simplify with a helper to calculate max gain from a node
     * - use recursions
     * - use maximums
     *     - maxGain left side (compare to 0 because if negative, take 0 and need something to compare to)
     *     - maxGain right side
     * - new path price => curr node val + maxGain left + maxGain right
     * - find maximum of every new path price
     */

    let maxSum = Math.max();
    // console.log('maxSum: ', maxSum)
    const maxGain = (node) => {
        // edge, if no leaf return 0
        if (!node) return 0;

        // max gain for left and right -> compare to 0 because we dont want to keep negatives
        let leftGain = Math.max(maxGain(node.left), 0);
        let rightGain = Math.max(maxGain(node.right), 0);

        // new price path
        let newPrice = node.val + leftGain + rightGain;

        // update max sum 
        maxSum = Math.max(maxSum, newPrice)

        // console.log('node.val: ', node.val)
        // console.log('leftGain: ', leftGain)
        // console.log('rightGain: ', rightGain)
        // console.log('newPrice: ', newPrice)
        // console.log('maxSum: ', maxSum)
        // console.log('***********************: ')

        // for recursion: return the max gain if continue the same path
        return node.val + Math.max(leftGain, rightGain);
    }

    maxGain(root);
    return maxSum;
};

const root = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

console.log(maxPathSum(root));
