/*
141. Linked List Cycle
Easy

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.



Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

https://leetcode.com/problems/linked-list-cycle/
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const hasCycle = (head) => {
    let n = 0;
    if (head === null || head.next === null) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow !== fast || n < 20) {
        console.log(slow.val);
        if (fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
        n++;
    }
    return slow === fast ? true : false;
};

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = head.next;
console.log(hasCycle(head));
