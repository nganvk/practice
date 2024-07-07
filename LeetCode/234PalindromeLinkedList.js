class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next === undefined ? null : next;
    }
}

function isPalindrome (head) {
    let stack = [];

    while (head) {
        stack.push(head.val);
        head = head.next;
    }

    for (let i = 0; i < Math.floor(stack.length / 2); i++) {
        if (stack[i] !== stack[stack.length - 1 - i]) return false;
    }

    return true;
}

function isPalindrome_optimzied(head) {
    let slow = head, fast = head, prev = null;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    } 

    while (slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    while (prev) {
        if (prev.val !== head.val) return false;
        prev = prev.next;
        head = head.next;
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

console.log(isPalindrome_optimzied(head1)); //true
console.log(isPalindrome_optimzied(head2)); //fales
console.log(isPalindrome_optimzied(head3)); //true