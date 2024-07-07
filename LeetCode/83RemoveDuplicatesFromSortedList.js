class ListNode {
    constructor (val, next) {
        this.val = val;
        this.next = next === undefined ? null : next;
    }
}

function deleteDuplicates(head) {
    if (!head || !head.next) return head;
    let curr = head;
    let reversed = curr;

    while (head) {
        if (head.next && (head.val !== head.next.val)) {
            curr.next = head.next;
            curr = curr.next;
        }

        head = head.next;
    }
    
    if (curr.next) curr.next = null;
    return reversed;
}

let list1 = new ListNode(1);
list1.next = new ListNode(1);
list1.next.next = new ListNode(2);

let list2 = new ListNode(1);
list2.next = new ListNode(1);
list2.next.next = new ListNode(2);
list2.next.next.next = new ListNode(3);
list2.next.next.next.next = new ListNode(3);

let list3 = new ListNode();

let list4 = new ListNode(0);
list4.next = new ListNode(0);
list4.next.next = new ListNode(0);
list4.next.next.next = new ListNode(0);
list4.next.next.next.next = new ListNode(0);

let list5 = new ListNode(0);
list5.next = new ListNode(0);
list5.next.next = new ListNode(0);
list5.next.next.next = new ListNode(3);

const util = require('util');
console.log(util.inspect(deleteDuplicates(list1), {depth: null}));
console.log(util.inspect(deleteDuplicates(list2), {depth: null}));
console.log(util.inspect(deleteDuplicates(list3), {depth: null}));
console.log(util.inspect(deleteDuplicates(list4), {depth: null}));
console.log(util.inspect(deleteDuplicates(list5), {depth: null}));