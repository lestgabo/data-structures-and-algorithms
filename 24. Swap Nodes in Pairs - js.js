/**
 ** 24. Swap Nodes in Pairs
 ** Medium
 ** https://leetcode.com/problems/swap-nodes-in-pairs/

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes. Only nodes itself may be changed.


Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:

Input: head = []
Output: []

Example 3:

Input: head = [1]
Output: [1]

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const swapPairs = (head) => {};

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

console.log(swapPairs(head));
