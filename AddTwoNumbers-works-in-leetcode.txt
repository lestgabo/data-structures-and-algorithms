/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// var addTwoNumbers = function(l1, l2) {
//     let x = new ListNode();
//     let root = x;
//     let curr = l1;
//     let curr2 = l2;
//     let sum = 0;
//     let carry = null;

//     // console.log('curr: ', curr.val);
//     // console.log('currnext: ', curr.next.val);
//     // console.log('root.next: ', root.next);
//     while (curr || curr2) {
//         root.next = curr || curr2;
//         root = root.next;
//         sum = (curr ? curr.val : 0) + (curr2 ? curr2.val : 0) + (carry || 0);
//         root.val = sum % 10;
//         carry = sum >= 10 ? Math.floor(sum / 10) : null;

//         // if (curr !== null) curr = curr.next;
//         // if (curr2 !== null) curr2 = curr2.next;
//         curr = curr && curr.next;
//         curr2 = curr2 && curr2.next;
//     }

//     if (carry !== null) {
//         root.next = new ListNode(carry);
//     }
//     return x.next;
// };

// BETTER

/**
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * [@param](https://leetcode.com/rooparam) {ListNode} l1
 * [@param](https://leetcode.com/rooparam) {ListNode} l2
 * @return {ListNode}

 */
var addTwoNumbers = function(l1, l2) {
    let head,
        c = head,
        one = l1,
        two = l2,
        carry = 0;
    // console.log(head);
    // console.log(l1);
    // console.log(l2);
    while (one || two) {
        let x = 0,
            y = 0,
            sum = carry,
            next,
            tmpNode;
        if (one.val) {
            x = one.val;
        }
        if (two.val) {
            y = two.val;
        }
        sum += x + y;
        carry = Math.floor(sum / 10);
        next = sum % 10;
        tmpNode = new ListNode(next);
        console.log(next);
        console.log(head);
        if (head == null) {
            head = new ListNode(next);
            c = head;
        } else {
            c.next = tmpNode;
            c = c.next;
        }
        if (one.next != null) {
            one = one.next;
        } else {
            one = false;
        }
        if (two.next != null) {
            two = two.next;
        } else {
            two = false;
        }
    }
    if (carry > 0) {
        let tmpNode = new ListNode(carry);
        c.next = tmpNode;
    }
    console.log(head);
    return head;
};

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log(l1);
console.log(l2);
console.log(addTwoNumbers(l1, l2));
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

// let l1 = new ListNode(2);
// let l2 = new ListNode(5);
// console.log(addTwoNumbers(l1, l2));
// let l1 = new ListNode(4);
// let l2 = new ListNode(6);
// console.log(addTwoNumbers(l1, l2));
// let l1 = new ListNode(3);
// let l2 = new ListNode(4);
// console.log(addTwoNumbers(l1, l2));
