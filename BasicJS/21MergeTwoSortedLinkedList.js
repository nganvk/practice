class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function mergeTwoLists(list1, list2) {
    let list = new ListNode();
    let merged = list;

    if(!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }

    while (list1 && list2) {
        if (list1.val > list2.val) {
            list.next = list2;
            list2 = list2.next;
        } else if (list1.val <= list2.val) {
            list.next = list1;
            list1 = list1.next;
        }
        list = list.next;
    }

    list.next = list1 === null ? list2 : list1;

    return merged.next;   
}

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode (4);

let l2 = new ListNode(1);
l2.next = new ListNode (3);
l2.next.next = new ListNode (4);

console.log(mergeTwoLists(l1, l2));