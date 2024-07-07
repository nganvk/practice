class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size () {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let templastNode = this.head;
        let lastNode;
        while (templastNode) {
            lastNode = templastNode;
            templastNode = templastNode.next;
        }
        return lastNode;
    }

    getFirst() {
        return this.head;
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);

console.log(list.size())
// console.log(list.clear())
console.log(list.getLast())
console.log(list.getFirst())