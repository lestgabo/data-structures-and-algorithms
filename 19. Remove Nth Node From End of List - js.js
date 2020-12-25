/**
 ** 19. Remove Nth Node From End of List
 ** Medium
 ** https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Given the head of a linked list, remove the nth node from 
the end of the list and return its head.

Follow up: Could you do this in one pass?

 

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]

 

Constraints:

    The number of nodes in the list is sz.
    1 <= sz <= 30
    0 <= Node.val <= 100
    1 <= n <= sz


 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // console.log(head);
    /*
     * need to figure out we are at the nth node
     * then remove that node
     * - if node.next is null then we are at end
     * - from there return a ++1
     * - capture that value of number from the end

     */
    if (!head) return head;

    let length = 0;
    const helper = (head, length) => {
        if (!head) return;
        while (head) {
            length++;
            head = head.next;
        }
        return length;
    };
    let listNodeSize = helper(head, length);
    // console.log('listNodeSize: ', listNodeSize);
    // we have the size, now we need to stop at node before the node to remove
    // size-n, 5-2 = 3, so at 3 we do our node removal
    let anchorNode = listNodeSize - n;
    let counter = 0;
    let head1 = head;
    // console.log('anchorNode: ', anchorNode);
    // edge
    if (counter === anchorNode) {
        return head.next;
    }

    while (counter < anchorNode && head1) {
        // console.log('need to be done 3 times: ', counter);
        // we are at anchorNode, the node right before the node to delete
        if (counter + 1 === anchorNode) {
            // console.log('inside anchor');

            let next = head1.next;
            // console.log('next.next bool: ', !next.next);
            // console.log('next.next: ', next.next);
            // console.log('head1: ', head1);
            // console.log('next: ', next);

            if (!next.next && next.next !== null) {
                head1.next = next;
            } else {
                head1.next = next.next;
            }
        }
        counter++;
        head1 = head1.next;
    }

    return head;
};

/**
 ** Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// //[1,2] n=1 expected: [1]
// const head = new ListNode(1);
// head.next = new ListNode(2);
// const n = 3; // nth node from the end of the list

const head = new ListNode(3);
head.next = new ListNode(4);
head.next.next = new ListNode(5);
const n = 2; //expected: [1,2,3,5]
// const n = 1; //expected: [1,2,3,5]

// const head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);
// const n = 3; //expected: [1,2,3,5]
console.log(removeNthFromEnd(head, n));
