class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function countNodes(root) {
    let nodes = 0;

    function count(root) {
        if (root === null) {
            return;
        } else {
            count(root.left);
            count(root.right);
            nodes++;
        }
    }

    count(root);
    return nodes;
}

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);

let root2 = null;

let root3 = new TreeNode(1);

console.log(countNodes(root1));
console.log(countNodes(root2));
console.log(countNodes(root3));