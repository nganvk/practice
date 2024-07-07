class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = (next === undefined ? null : next);
    }
}

function reverseList(head) {
    if (head === null) {
        return head;
    } else {
        let stack = [], reversed = null, lastNode = null;

        while (head !== null) {
            stack.push(head);
            head = head.next;
        }

        while (stack.length > 0) {
            let node = stack.pop();
            
            if (reversed === null) {
                reversed = node;
            } else {
                lastNode.next = node;
            }

            lastNode = node;
        }

        lastNode.next = null;
        return reversed;
    }
}

function reverseList_optimized(head) {
    let reverse = null, curr = head;

    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = reverse;
        reverse = curr;
        curr = nextTemp;
    }

    return reverse;
}

let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

const util = require("util");
console.log(util.inspect(reverseList_optimized(head1), {depth: null}));