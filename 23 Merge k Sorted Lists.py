"""
23. Merge k Sorted Lists
Hard

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6


https://leetcode.com/problems/merge-k-sorted-lists/
"""
# Definition for singly-linked list.


class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

    def mergeKLists(self, lists: List[ListNode]) -> ListNode:

        # testHead = ListNode(3)
        # node1 = ListNode(2)
        # testHead.next = node1
        # node2 = ListNode(0)
        # node1.next = node2
        # node3 = ListNode(-4)
        # node2.next = node3
        # node3.next = node1


print(testHead.mergeKLists(testHead))
