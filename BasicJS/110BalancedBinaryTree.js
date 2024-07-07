class TreeNode {
    constructor (val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function isBalanced(root) {
    let result = balanced(root);
    return result[0];
}
    

function balanced(root) {
    if (root === null) return [true, 0];
    let left = balanced(root.left);
    let right = balanced(root.right);
    let isBalanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
    return [isBalanced, Math.max(left[1], right[1]) + 1];
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(isBalanced(root));