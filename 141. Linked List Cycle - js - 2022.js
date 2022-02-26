/**
 ** 141. Linked List Cycle
 ** Easy
 ** https://leetcode.com/problems/linked-list-cycle/
 * 
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be 
reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer
is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.


Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 

Constraints:
    The number of the nodes in the list is in the range [0, 104].
    -105 <= Node.val <= 105
    pos is -1 or a valid index in the linked-list.
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const hasCycle = (head) => {
    /**
     * - use 2 pointers, 1 fast and 1 slow
     * - slow iterates normally while
     * - fast iterates 2x or 2nexts
     * - should work because if theres a cycle the slow will eventually 
     *   catch up to the fast and become equal
     * - however we will know theres no cycle if fast becomes null or finds an end
     *   before slow catches up to it
     * - so an important part is a while loop that keeps updating slow and fast
     *   until they are equal
     *   or until fast finds an end or becomes null
     */
    if (!head) return false;

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        // no cycle, found an end
        if (!fast || !fast.next) return false; 

        // console.log('slow: ', slow.val)
        // console.log('fast: ', fast.val)

        slow = slow.next;
        fast = fast.next.next;
    }
    return slow === fast ? true : false;
};

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
// pos = 1 (makes cycle)
head.next.next.next.next = head.next;

// head = []
console.log(hasCycle(head));
