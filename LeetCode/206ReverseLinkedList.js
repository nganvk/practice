class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next === undefined ? null : next;
    }
}

function reverseList(head) {
    if (!head) return head;
    let stack = [];
    let reverse = null, lastNode = null;

    while (head) {
        stack.push(head);
        head = head.next;
    }

    while (stack.length !== 0) {
        let node = stack.pop();

        if (reverse === null) {
            reverse = node;
        } else {
            lastNode.next = node;
        }

        lastNode = node;
    }

    if (lastNode.next !== null) lastNode.next = null;
    return reverse;
}

function reverseList_optimized(head) {
    if (!head) return head;
    let prev = null;

    while (head) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
}

let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

const util = require('util');
console.log(util.inspect(reverseList_optimized(head1), {depth: Infinity}));