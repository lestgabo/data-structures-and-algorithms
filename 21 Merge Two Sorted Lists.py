"""
21. Merge Two Sorted Lists
Easy

Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

https://leetcode.com/problems/merge-two-sorted-lists/
"""


class ListNode(object):
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

    def __repr__(self):
        return f"{self.val}, ({self.next.__repr__()})"


def twoSortedList(self, l1, l2):
    new_head = ListNode(0)
    new_tail = new_head

    while(l1 and l2):
        if (l1.val <= l2.val):
            new_tail.next = l1
            l1 = l1.next
        else:
            new_tail.next = l2
            l2 = l2.next
        new_tail = new_tail.next

    # when one of the lists is done
    if l1:
        new_tail.next = l1
    else:
        new_tail.next = l2

    return new_head.next


l1 = ListNode(1, ListNode(2, ListNode(4)))
l2 = ListNode(1, ListNode(3, ListNode(4)))
print(twoSortedList(0, l1, l2))
