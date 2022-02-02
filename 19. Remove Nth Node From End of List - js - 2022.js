/**
 ** 19. Remove Nth Node From End of List
 ** Medium
 ** https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Given the head of a linked list, remove the nth node from 
the end of the list and return its head.

Follow up: Could you do this in one pass?

 

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]

 

Constraints:

    The number of nodes in the list is sz.
    1 <= sz <= 30
    0 <= Node.val <= 100
    1 <= n <= sz


 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    /*
     * need to figure out we are at the nth node
     * then remove that node
     * - if node.next is null then we are at end
     * - from there return a ++1
     * - capture that value of number from the end

     */
    if (!head) return head;

    // get listnode size
    const getListNodeSize = (head) => {
        if (!head) return;
        let length = 0;
        while (head) {
            length++;
            head = head.next;
        }
        return length;
    } 

    const listNodeSize = getListNodeSize(head);

    // we have list size now we remove the nth node from the end
    // 12345 n=2 -> remove 4 => 1235
    // listNodeSize-n = 5-2 = 3
    // while going through listnodes when we get to the targetNode or node to remove
    // we check if the next node is null, if it is then 

    let newHead = head;
    let targetNode = listNodeSize - n;
    let counter = 0;

    // edge 
    if (counter === targetNode) {
        return head.next;
    }
    
    while(newHead && counter < targetNode) {
        // console.log('count: ', count)
        // console.log('targetNode: ', targetNode)
        // console.log('counter + 1: ', counter + 1)
        // console.log('targetNode: ', targetNode)
        console.log('newHead: ', newHead)
        console.log('counter === targetNode: ', counter + 1 === targetNode)
        if (counter + 1 === targetNode) {
            // we are at targetNode -> start to remove next node
            // next is currently the node to remove
            let next = newHead.next;
            // replaces the node to remove by pointing the head's next node to be 2 nodes next
            newHead.next = next.next;
        }
        counter++;
        // next iteration
        newHead = newHead.next;
    }
    return head;
};

/**
 ** Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// //[1,2] n=1 expected: [1]
// const head = new ListNode(1);
// head.next = new ListNode(2);
// const n = 3; // nth node from the end of the list

const head = new ListNode(3);
head.next = new ListNode(4);
head.next.next = new ListNode(5);
// const n = 3; //expected: [4,5]
const n = 2; //expected: [3,5]
// const n = 1; //expected: [3,4]

// const head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// // const n = 3; //expected: [1,3,4]
// // const n = 2; //expected:    [1,2,4]
// const n = 1; //expected: [1,2,3]
console.log(removeNthFromEnd(head, n));
