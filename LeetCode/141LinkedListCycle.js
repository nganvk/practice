class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next === undefined ? null : next;
    }
}

function hasCycle(head) {
    if (!head || !head.next) return false;
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
}

function hasCycle_2(head) {
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head, fast = head.next;

    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
}

let head1 = new ListNode(3);
head1.next = new ListNode(2);
head1.next.next = new ListNode(0);
head1.next .next.next = new ListNode(-4);
head1.next .next.next.next = head1.next;

let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = head2.next;

let head3 = new ListNode(1);

let head4 = new ListNode()

console.log(hasCycle(head1)); //true
console.log(hasCycle(head2)); //true
console.log(hasCycle(head3)); //false
console.log(hasCycle(head4)); //false