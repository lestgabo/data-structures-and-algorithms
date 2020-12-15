/**
    ** 148. Sort List
    ** Medium
    ** https://leetcode.com/problems/sort-list/

Given the head of a linked list, return the list after sorting it in ascending order.

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

 

Example 1:

Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:

Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Example 3:

Input: head = []
Output: []

 

Constraints:

    The number of nodes in the list is in the range [0, 5 * 104].
    -105 <= Node.val <= 105

 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const sortList = (head) => {
    // console.log(head);
    if (head === null || head.next === null) return head;

    // use merge sort on the linked list
    // split the list
    const [left, right] = split(head);
    // console.log('left: ', left);
    // console.log('right: ', right);

    // temp node to link all the sorted nodes
    const root = new ListNode(null);
    return merge(root, sortList(left), sortList(right));
};

const split = (node) => {
    // use slow & fast pointer to find middle node
    // splits the list into list[0, slow] and list[slow+1, list.length]
    let slow = node;
    let fast = node;
    // when fast finds null, slow will be at mid
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const left = node;
    const right = slow.next;
    // cut off slow so that left is not connected to right
    slow.next = null;

    return [left, right];
};

const merge = (root, left, right) => {
    // merge the smaller node in the left and right list first
    let pointer = root;
    while (left !== null || right !== null) {
        // either left or right is exhausted
        if (left === null) {
            pointer.next = right;
            right = right.next;
        } else if (right === null) {
            pointer.next = left;
            left = left.next;
        }
        // left and right still have nodes
        else {
            if (left.val < right.val) {
                pointer.next = left;
                left = left.next;
            } else {
                pointer.next = right;
                right = right.next;
            }
        }
        pointer = pointer.next;
    }
    // return the second node in the list because the first is a temporary node
    return root.next;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);
// head.next.next.next.next = new ListNode(5);

console.log(sortList(head));
