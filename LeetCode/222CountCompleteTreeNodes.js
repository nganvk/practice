class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = (left === undefined) ? null : left;
        this.right = (right === undefined) ? null : right;
    }
}

function countNodes(root) {
    if (!root) return 0;
    let nodes = 1;
    let left = countNodes(root.left);
    let right = countNodes(root.right);
    return nodes + left + right;
}

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);

let root2 = null;

let root3 = new TreeNode(1);

console.log(countNodes(root1)); //6
console.log(countNodes(root2)); //0
console.log(countNodes(root3)); //1