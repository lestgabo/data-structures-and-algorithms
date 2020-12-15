/**
 ** 24. Swap Nodes in Pairs
 ** Medium
 ** https://leetcode.com/problems/swap-nodes-in-pairs/

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes. Only nodes itself may be changed.


Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:

Input: head = []
Output: []

Example 3:

Input: head = [1]
Output: [1]

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
    We iterate the linked list with jumps in steps of two.

    Swap the pair of nodes as we go, before we jump to the next pair. 
    Let's represent the two nodes to be swapped by firstNode and secondNode.

    Swap the two nodes. The swap step is

       firstNode.next = secondNode.next
       secondNode.next = firstNode
     

    We also need to assign the prevNode's next to the head of the swapped pair. This step would ensure the currently swapped pair is linked correctly to the end of the previously swapped list.

       prevNode.next = secondNode
     

    This is an iterative step, so the nodes are swapped on the go and attached to the previously swapped list. And in the end we get the final swapped list.

  */

// definition for singly-linked list
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const swapPairs = (head) => {
    //  console.log(head);
    if (!head || !head.next) return head;

    // dummy node
    let dummy = new ListNode(-1);
    dummy.next = head;

    let prevNode = dummy;

    while (head && head.next) {
        // nodes to be swapped
        let firstNode = head;
        let secondNode = head.next;

        // swapping
        prevNode.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;

        // reinitializing the head and previous node for next swap
        prevNode = firstNode;
        head = firstNode.next;
    }

    // the variable prevNode has been used to create the dummy list
    // dummy.next is still the head of the new list
    return dummy.next;
};

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

console.log(swapPairs(head));
