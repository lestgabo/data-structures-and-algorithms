/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// ITERATIVE
var reverseListIterative = function(head) {
  let curr = head;
  // let prev = new ListNode();
  let next;
  let prev;

  // console.log('start head:', head);
  while (curr != null) {
    // console.log(curr.val);
    // console.log('prev:', prev);
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
  // console.log('prev:', prev);
  // console.log('after head:', head);
};

// RECURSIVE
var reverseListRecursive = function(head) {
  let reversedListHead = new ListNode();
  if (head == null || head.next == null) {
    return head;
  }
  reversedListHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return reversedListHead;
  // return reverseListRecursive(head.next);
};

head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
// console.log(reverseListIterative(head));
console.log(reverseListRecursive(head));
// console.log('head', head.next.next.next.next.val);
