/**
 ** 143. Reorder List
 ** Medium
 ** https://leetcode.com/problems/reorder-list/
 * 
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 
Example 1:

Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]


Constraints:
    The number of nodes in the list is in the range [1, 5 * 104].
    1 <= Node.val <= 1000
*/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
    const reverseLinkList = (head) => {
        if (!head) return null;
        
        let curr = head;
        let prev = null;
        let next = null

        while(curr != null) {
            // buffer
            next = curr.next;
            // reverse
            curr.next = prev;
            // iterate
            prev = curr;
            curr = next;
        }
       // curr is null at the end because its always next in the iteration, we dont return that
        return prev;
    }
    const reversed = reverseLinkList(head);
    console.log('reversed: ', reversed)
    return reversed;
};

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log(reorderList(head));
