class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function invertTree(root) {
    if (root === null) {
        return root;
    } else {
        let tempNode = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(tempNode);
        return root;
    }
}

let root1 = new TreeNode(4);
root1.left = new TreeNode(2);
root1.right = new TreeNode(7);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log(invertTree(root1));