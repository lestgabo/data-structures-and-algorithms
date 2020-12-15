/**
 ** 116. Populating Next Right Pointers in Each Node
 ** Medium
 ** https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Follow up:

    You may only use constant extra space.
    Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.

 

Example 1:

Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
    // console.log(root);
    /**
    ** Algorithm

    We start at the root node. 
    Since there are no more nodes to process on the first level or level 0, 
    we can establish the next pointers on the next level i.e. level 1. 
    An important thing to remember in this algorithm is that we 
    establish the next pointers for a level N while 
    we are still on level N−1 and once we are done establishing 
    these new connections, we move on to NNN and do the same thing for N+1N+1N+1.

    As we just said, when we go over the nodes of a particular level,
    their next pointers are already established. 
    This is what helps get rid of the queue data structure from the 
    previous approach and helps save space. 
    To start on a particular level, we just need the leftmost node. 
    From there on out, its just a linked list traversal.

    Based on these ideas, our algorithm will have the following pseudocode:

     leftmost = root
     while (leftmost.left != null)
     {
         head = leftmost
         while (head.next != null)
         {
             1) Establish Connection 1
             2) Establish Connection 2 using next pointers
             head = head.next
         }
         leftmost = leftmost.left
     }

    The Connection 1 and Connection 2 mentioned above correspond to 
    the two kinds of connections we looked at earlier on in the intuition section of this approach.

        The first one is fairly simple to establish given that it's between 
        the two nodes having a common parent. 
        So, we could simply do something like this to link the two children:

         node.left.next = node.right
         

        For the second type of connection, 
        we have to make use of the next pointers on the current level. 
        Remember that this second type of connection is between nodes that have different parents. More specifically, it's the link between the right child of a node and the left child of the next node. Since we already have the next pointers set up on the current level, we use this to set up the correct pointers on the next level.

        node.right.next = node.next.left

    Once we are done with the current level, we move on to the next one. 
    One last thing that's left here is to update the leftmost node. 
    We need that node to start traversal on a particular level. 
    Think of it as the head of the linked list. 
    Since this is a perfect binary tree, 
    the leftmost node will always be the left child of the current leftmost node. The only nodes which don't have any children are the ones on the final level and these would be the leaves of the tree.
 */

    // establish the next pointer of N-1 while we are still in level N
    // start with leftMost as the head
    // 2 different connections:
    //     1. children of parent
    //     2. current parent's right.next connecting to parent.next's left
    // ^ do above while head is true (theres more nodes in the level)
    // the while loop of head is iterated by: head = head.next
    // then when while loop of head is done move on to next level
    // the while loop of whole tree is iterated by: leftMost = leftMost.left

    if (!root) return root;
    // start with root node
    let leftMost = root;

    // once we reach final level, we are done
    while (leftMost.left) {
        // iterate the linked list starting from head node
        // and using the next pointers, establish the links for the next level
        head = leftMost;
        while (head) {
            // connection 1 - left and right of current node
            head.left.next = head.right;

            // connection 2 - current parent's right.next connecting to parent.next's left
            if (head.next) {
                head.right.next = head.next.left;
            }
            // move head right
            head = head.next;
        }
        // next level
        leftMost = leftMost.left;
    }
    return root;
};

/**
 * Definition for a Node.
 *  */
function TreeNode(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}

const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
console.log(connect(root));
