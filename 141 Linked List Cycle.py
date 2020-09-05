"""
141. Linked List Cycle
Easy

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.



Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


"""
# Definition for singly-linked list.


class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

    def printList(self):
        node = self
        output = ''
        count = 0

        # while node != None or count < 30:
        while node != None and count < 30:
            output += str(node.val)
            output += " "
            node = node.next
            count += 1
        print(output)

    def linkedListCycle(self, head):
        if head == None or head.next == None:
            return False

        slow = head
        fast = head.next

        while slow != fast:
            if fast == None or fast.next == None:
                return False
            slow = slow.next
            fast = fast.next.next

        if slow == fast:
            return True
        else:
            return False

    # def linkedListCycle(self, head):
    #     if head == None or head.next == None:
    #         return False

    #     slow = head
    #     fast = head.next

    #     while slow != fast:
    #         if fast == None or fast.next == None:
    #             return False

    #         slow = slow.next
    #         fast = fast.next.next

    #     return True


testHead = ListNode(3)
node1 = ListNode(2)
testHead.next = node1
node2 = ListNode(0)
node1.next = node2
node3 = ListNode(-4)
node2.next = node3
node3.next = node1

# print("Initial List: ")
# testHead.printList()

print(testHead.linkedListCycle(testHead))
# print(testHead.linkedListCycle(testHead))
# print("List after reversal iteratively: ")
# testTail.printList()
