class TreeNode {
    constructor (val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function minDepth(root) {
    if (root === null) {
        return 0;
    } else if (root.left === null) {
        return minDepth(root.right) + 1;
    } else if (root.right === null) {
        return minDepth(root.left) + 1;
    } else {
        let leftDepth = minDepth(root.left);
        let rightDepth = minDepth(root.right);
        return Math.min(leftDepth, rightDepth) + 1;
    }
}

let root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);

let root2 = new TreeNode(2);
root2.right = new TreeNode(3);
root2.right.right = new TreeNode(4);
root2.right.right.right = new TreeNode(5);
root2.right.right.right.right = new TreeNode(6);

console.log(minDepth(root1));
console.log(minDepth(root2));