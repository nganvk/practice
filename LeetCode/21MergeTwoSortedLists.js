class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = (next === undefined) ? null : next;
    }
}

function mergeTwoLists(list1, list2) {
    let merge = new ListNode();
    let list = merge;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            list.next = list1;
            list1 = list1.next;
        } else {
            list.next = list2;
            list2 = list2.next;
        }

        list = list.next;
    }

    list.next = (!list1) ? list2 : list1;
    return merge.next;
}

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode (4);

let l2 = new ListNode(1);
l2.next = new ListNode (3);
l2.next.next = new ListNode (4);

let util = require('util');
console.log(util.inspect(mergeTwoLists(l1, l2), {depth: Infinity}));