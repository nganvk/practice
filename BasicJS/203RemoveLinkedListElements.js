class ListNode{
    constructor(val, next) {
        this.val = val;
        this.next = (next === undefined ? null : next);
    }
}

function removeElements(head, val) {
    if (head === null) {
        return head;
    } else {
        while(head.val === val) {
            if (head.next !== null) {
                head = head.next
            } else {
                head = null;
                return head;
            }
        }

        let pointer = head, curr = head.next;

        while (curr !== null) {
            if (curr.val !== val) {
                pointer.next = curr;
                pointer = pointer.next;
            }

            curr = curr.next;
        }

        pointer.next = null;
        return head;
    }
}

let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(6);
head1.next.next.next = new ListNode(3);
head1.next.next.next.next = new ListNode(4);
head1.next.next.next.next.next = new ListNode(5);
head1.next.next.next.next.next.next = new ListNode(6);

let head2 = new ListNode();

let head3 = new ListNode(7);
head3.next = new ListNode(7);
head3.next.next = new ListNode(7);
head3.next.next.next = new ListNode(7);

const util = require("util");
console.log(util.inspect(removeElements(head1, 6), {depth: null}));
console.log(util.inspect(removeElements(head2, 1), {depth: null}));
console.log(util.inspect(removeElements(head3, 7), {depth: null}));