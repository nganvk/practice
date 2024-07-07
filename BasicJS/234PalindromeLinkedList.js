class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = (next === undefined ? null : next);
    }
}

function isPalindrome(head) {
    let stack = [];

    while (head !== null) {
        stack.push(head.val);
        head = head.next;
    }

    for (let i = 0; i < stack.length; i++) {
        if (stack[i] !== stack[stack.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(2);
head1.next.next.next = new ListNode(1);

let head2 = new ListNode(1);
head2.next = new ListNode(2);

let head3 = new ListNode(1);

console.log(isPalindrome(head1));
console.log(isPalindrome(head2));
console.log(isPalindrome(head3));