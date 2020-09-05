# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

    def printList(self):
        node = self
        output = ''
        while node != None:
            output += str(node.val)
            output += " "
            node = node.next
        print(output)

    def reverseListIteratively(self, head):
        prev = None
        curr = head
        while curr != None:
            nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
        return head

    def reverseListRecursively(self, head):
        if not head or not head.next:
            return head
        node = self.reverseRecursively(head.next)
        head.next.next = head
        head.next = None
        return node


testHead = ListNode(1)
node1 = ListNode(2)
testHead.next = node1
node2 = ListNode(3)
node1.next = node2
node3 = ListNode(4)
node2.next = node3
testTail = ListNode(5)
node3.next = testTail

print("Initial List: ")
testHead.printList()

testHead.reverseListIteratively(testHead)
print("List after reversal iteratively: ")
testTail.printList()

testHead.reverseListRecursively(testHead)
print("List after reversal recursively: ")
testTail.printList()
