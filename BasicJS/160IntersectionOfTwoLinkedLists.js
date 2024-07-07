class ListNode {
    constructor (val, next) {
        this.val = val;
        this.next = (next === undefined ? null : next);
    }
}

function getIntersectionNode(headA, headB) {
    let set = new Set();

    while (headA !== null) {
        set.add(headA);
        headA = headA.next;
    }

    while (headB !== null) {
        if (set.has(headB)) {
            return headB;
        }

        headB = headB.next;
    }

    return null;
}

let intersect1 = new ListNode(8);
intersect1.next = new ListNode(4);
intersect1.next.next = new ListNode(5);

let head1 = new ListNode(4);
head1.next = new ListNode(1);
head1.next.next = intersect1;

let head2 = new ListNode(5);
head2.next = new ListNode(6);
head2.next.next = new ListNode(1);
head2.next.next.next = intersect1;

console.log(getIntersectionNode(head1, head2));