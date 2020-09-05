/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var getInterSectionNode = function(headA, headB) {
    let curr = headA;
    let currB = headB;
    let hashirama = new Set();

    let newA = curr;
    while (newA != null) {
        hashirama.add(newA);
        newA = newA.next;
    }

    // this console log shows the reason why this works
    // the node put into our hashirama Set (HashSet in Java and C++) is from current to the end
    // so hashirama.has(currB) is like checking if curr == curr B which means checking if the linked lists are now the same
    // if theyre now the same, means the lists intersect is that current node
    //     Set { ListNode { val: 4, next: ListNode { val: 1, next: [Object] } },
    //   ListNode { val: 1, next: ListNode { val: 8, next: [Object] } },
    //   ListNode { val: 8, next: ListNode { val: 4, next: [Object] } },
    //   ListNode { val: 4, next: ListNode { val: 5, next: null } },
    //   ListNode { val: 5, next: null } }
    // console.log(hashirama);

    while (currB != null) {
        if (hashirama.has(currB)) {
            return currB;
        }
        currB = currB.next;
    }
    return null;
};

headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = new ListNode(8);
headA.next.next.next = new ListNode(4);
headA.next.next.next.next = new ListNode(5);
headB = new ListNode(5);
headB.next = new ListNode(0);
headB.next.next = new ListNode(1);
headB.next.next.next = headA.next.next;
headB.next.next.next.next = headA.next.next.next;
headB.next.next.next.next.next = headA.next.next.next.next;

console.log(getInterSectionNode(headA, headB));
