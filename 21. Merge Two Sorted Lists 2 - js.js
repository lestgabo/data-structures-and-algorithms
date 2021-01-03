/**
 ** 21. Merge Two Sorted Lists
 ** Easy
 ** https://leetcode.com/problems/merge-two-sorted-lists/

Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

 
Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: l1 = [], l2 = []
Output: []

Example 3:

Input: l1 = [], l2 = [0]
Output: [0]


Constraints:

    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both l1 and l2 are sorted in non-decreasing order.

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const solution = (l1, l2) => {
    /**
     * compare current heads of l1 and l2 and make next node from the head with lower value
     * recursively call the next node with variables of the lower head's next and current bigger head
     * return that node
     * if one head is null, then just return the other head because its sorted already
     */

    const helper = (l1, l2) => {
        if (!l1) return l2;
        if (!l2) return l1;

        if (l1.val > l2.val) {
            l2.next = helper(l1, l2.next);
            return l2;
        } else {
            l1.next = helper(l1.next, l2);
            return l1;
        }
    };
    return helper(l1, l2);
};

// definition for singly-linked list
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(4);
head2 = new ListNode(1);
head2.next = new ListNode(3);
head2.next.next = new ListNode(4);

console.log(solution(head, head2));
