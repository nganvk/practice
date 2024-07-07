class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function inorderTraversal(root) {
    let arr = [];
    traverse(root, arr);
    return arr;
}

function traverse(node, arr) {
    if (!node) return arr;
    traverse(node.left, arr);
    arr.push(node.val);
    traverse(node.right, arr);
    return arr;
}

let root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);

let root2 = new TreeNode();

let root3 = new TreeNode(1);

console.log(inorderTraversal(root1));
console.log(inorderTraversal(root2));
console.log(inorderTraversal(root3));