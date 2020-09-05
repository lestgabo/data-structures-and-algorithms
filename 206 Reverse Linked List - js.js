/**
 * 
 * 206. Reverse Linked List
Easy

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

https://leetcode.com/problems/reverse-linked-list/
 */

const reverseListIterative = (head) => {
    if (head === null) return null;
    let curr = head;
    let prev = null;
    let next = null;
    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

const reverseListRecursive = (head) => {
    let reversedHead = new ListNode();
    if (head == null || head.next == null) return head;

    reversedHead = reverseListRecursive(head.next);

    head.next.next = head;
    head.next = null;

    return reversedHead;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
test = new ListNode();
// console.log(reverseListIterative(head));
// console.log(reverseListRecursive(head));
console.log(reverseListRecursive(test));
// console.log('head', head.next.next.next.next.val);
