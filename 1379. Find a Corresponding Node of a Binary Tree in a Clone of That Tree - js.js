/**
 ** 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 ** Medium
 ** https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
 ** https://leetcode.com/explore/featured/card/january-leetcoding-challenge-2021/579/week-1-january-1st-january-7th/3590/

Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

Follow up: Solve the problem if repeated values on the tree are allowed.

 

Example 1:

Input: tree = [7,4,3,null,null,6,19], target = 3
Output: 3
Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.

Example 2:

Input: tree = [7], target =  7
Output: 7

Example 3:

Input: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
Output: 4

Example 4:

Input: tree = [1,2,3,4,5,6,7,8,9,10], target = 5
Output: 5

Example 5:

Input: tree = [1,2,null,3], target = 2
Output: 2

 

Constraints:

    The number of nodes in the tree is in the range [1, 10^4].
    The values of the nodes of the tree are unique.
    target node is a node from the original tree and is not null.

 */

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    /*
        goal: return the target node inside clone
        
        do in-order tree traversal
        since node values are unique, if we find our target value from traversal
        we just return that current value
    */
    this.result = null;
    const inOrder = (head, target) => {
        //         head, left, right
        if (!head) return;
        if (head) {
            if (head.val === target.val) {
                // console.log('head: ', head);
                this.result = head;
                return;
            }
            inOrder(head.left, target);
            inOrder(head.right, target);
        }
    };
    // console.log('cloned: ', cloned);
    // console.log('target: ', target);
    inOrder(cloned, target);
    // console.log('this.result: ', this.result);
    return this.result;
};

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}
// Input: tree = [7,4,3,null,null,6,19], target = 3

let original = new TreeNode(7, new TreeNode(4), new TreeNode(3, new TreeNode(6), new TreeNode(19)));
let cloned = new TreeNode(7, new TreeNode(4), new TreeNode(3, new TreeNode(6), new TreeNode(19)));
let target = new TreeNode(3, new TreeNode(6), new TreeNode(19));
console.log(getTargetCopy(original, cloned, target));
