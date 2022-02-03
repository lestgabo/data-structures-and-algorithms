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
    /**
     * basically, merge 2 sorted lists k-1 times
     * - so we need to make code to merge 2 sorted lists first
     * - theres 2 parts to the solution:
     *   - 1 is to have code for merging 2 sorted lists into 1
     *   - 2 is to iterate through array of sorted lists
     *       figure out how to iterate through the list only once and 
     *       merge each of the lists into one big sorted lists
     */
    const getMergedList = (l1, l2) => {
        if (!l1) return l2;
        if (!l2) return l1;

        if (l1.val < l2.val) {
            l1.next = getMergedList(l1.next, l2);
            return l1;
        } else {
            l2.next = getMergedList(l1, l2.next)
            return l2;
        }
    }

    let answer = [];
    const N = lists.length;

    // edge cases
    if (N === 1) return lists[0];
    if (N === 0 || N === undefined) return null;
    if (Array.isArray(lists) && !lists.length) return null;
    // set answer to have the first list to sort
    if (N > 1) answer = lists[0];

    // N-1 because we want to stop 1 index before the end because we are checking 1 ahead
    for (let i = 0; i < N-1; i++) {
        let temp = getMergedList(answer, lists[i+1])
        answer = temp;
    }

    return answer;
};

// definition for singly-linked list
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

head = new ListNode(1);
head.next = new ListNode(4);
// head.next.next = new ListNode(5);
head2 = new ListNode(2);
head2.next = new ListNode(3);
// head2.next.next = new ListNode(4);
head3 = new ListNode(-1);
head3.next = new ListNode(0);
// head = new ListNode(2);
// head2 = null;
// head3 = new ListNode(-1);
let array = [[]];
// array.push(head);
// array.push(head2);
// array.push(head3);

// input [[2],[],[-1]], expected: [-1,2], got [-1]
console.log(solution(array));
