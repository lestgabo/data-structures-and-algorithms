/**
 ** 21. Merge Two Sorted Lists
 ** Easy
 ** https://leetcode.com/problems/merge-two-sorted-lists/
 ** https://leetcode.com/explore/featured/card/january-leetcoding-challenge-2021/579/week-1-january-1st-january-7th/3592/

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
var mergeTwoLists = function (l1, l2) {
    /*
        compare the current heads of l1 and l2
        if l1 is lesser then we make l1.next the recursive call of 
        the function with current l1.next and l2 as the parameters
        vice versa for if l2 lesser
        
        since they are sorted ascending, if l1 or l2 is empty
        just return the other because the non empty would be higher than the empty already
    */
    /**
     * 2022 notes:
     * compare the heads of each list if l1 is lesser 
     * then l1.next is the recursive call for the next iteration and vice versa
     * we are going to be using a recursive function with l1 and l2 as the parameters
     * recursive because we are always comparing the heads of the lists
     * 
     * the trick -> if l1 head < l2 head
     *  So we return l1 and recursively call our function, but the difference is that, 
     *  now we call our function with l1.next in the parameter 
     *  because the current head of l2 is greater
     *  and we dont know if the next l1 head will also be lesser than the current l2 
     *  in the recursive function we will be using the same l2
     * 
     *  The oterside or the else part means l2 head is lower in value and we must use that instead
     *  so the recursive function is called with params (l1, l2.next) and we return l2
     * 
     *  Also, if one of the heads is empty or null,
     *  we just return the other head since they're already sorted
     * 
     */
    const helper = (l1, l2) => {
        if (!l1) {
            return l2;
        }
        if (!l2) {
            return l1;
        }

        if (l1.val < l2.val) {
            l1.next = helper(l1.next, l2);
            return l1;
        } else {
            l2.next = helper(l1, l2.next);
            return l2;
        }
    }
    return helper(l1,l2);
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

console.log(mergeTwoLists(head, head2));
