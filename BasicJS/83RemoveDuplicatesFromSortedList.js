class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = (next === undefined ? null : next);
    }
}

// function deleteDuplicates(head) {
//     if (!head) return head;

//     let list = new ListNode(Number.MIN_SAFE_INTEGER);
//     let current = list;

//     while (head) {
//         if (head.val !== current.val) {
//             current.next = new ListNode(head.val);
//             current = current.next;
//         }
//         head = head.next;
//     }

//     if (list.next === null) {
//         return list
//     } else return list.next;
    
// }

function deleteDuplicates(head) {
    if (!head) return head;
    let unique = head;
    let current = head.next;

    while (current) {
        if (unique.val === current.val) {
            current = current.next;
        } else {
            unique.next = current;
            unique = current;
            current = current.next;
        }
    }

    unique.next = null;
    return head;
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
// console.log(util.inspect(deleteDuplicates(list1), {depth: null}));
// console.log(util.inspect(deleteDuplicates(list2), {depth: null}));
// console.log(util.inspect(deleteDuplicates(list3), {depth: null}));
// console.log(util.inspect(deleteDuplicates(list4), {depth: null}));
console.log(util.inspect(deleteDuplicates(list5), {depth: null}));