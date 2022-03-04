/**
 ** 206. Reverse Linked List
 ** Easy
 ** https://leetcode.com/problems/reverse-linked-list/

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:

Input: head = [1,2]
Output: [2,1]

Example 3:

Input: head = []
Output: []

Constraints:
    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000
Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

 */

const reverseListIterative = (head) => {
    /**
     * - make a pointer curr instead of using head
     * - use a temp to save the next node
     * - also have a variable that stores previous node
     * - prev and temp(next) will default as null
     * - important that we iterate until our current node is null 
     *   (null head means we found the end of the list)
     * - important to see that at the end our main node from our reversed list 
     *   will now be prev
     * - so we retuirn prev because curr at the last step became null 
     *   (curr.next === null) which ends the while loop
     */
    let curr = head;
    let prev = null;
    let next = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }
    return prev;
};

const reverseListRecursive = (head) => {

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

// console.log(reverseListIterative(head));
console.log(reverseListRecursive(head));