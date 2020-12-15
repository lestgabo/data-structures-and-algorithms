/**
 ** 23. Merge k Sorted Lists
 ** Hard
 ** https://leetcode.com/problems/merge-k-sorted-lists/

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:

Input: lists = []
Output: []

Example 3:

Input: lists = [[]]
Output: []

 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const solution = (lists) => {
    // console.log(lists);
    /**
     * basically, merge 2 sorted lists k-1 times
     * - so we need to make code to merge 2 sorted lists first
     */

    // mergeTwo returns a merged sorted node from two lists
    const mergeTwo = (l1, l2) => {
        // console.log('l1: ', l1);
        // console.log('l2: ', l2);
        if (l1 === null) return l2;
        if (l2 === null) return l1;

        if (l1.val < l2.val) {
            l1.next = mergeTwo(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwo(l1, l2.next);
            return l2;
        }
    };

    if (lists.length === 1) return lists[0];
    if (lists.length === 0) return null;

    let currentMerged = null;

    for (let i = 0; i < lists.length - 1; i++) {
        let l1;
        let l2 = lists[i + 1];
        // merge the first 2, then merge the next ones to that
        if (currentMerged === null) {
            currentMerged = lists[i];
        }
        currentMerged = mergeTwo(currentMerged, l2);
    }
    return currentMerged;
};

// definition for singly-linked list
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// head = new ListNode(1);
// head.next = new ListNode(4);
// head.next.next = new ListNode(5);
// head2 = new ListNode(1);
// head2.next = new ListNode(3);
// head2.next.next = new ListNode(4);
// head3 = new ListNode(2);
// head3.next = new ListNode(6);
head = new ListNode(2);
head2 = null;
head3 = new ListNode(-1);
let array = [];
array.push(head);
array.push(head2);
array.push(head3);

// input [[2],[],[-1]], expected: [-1,2], got [-1]
console.log(solution(array));
