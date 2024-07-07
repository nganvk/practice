class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function sumOfLeftLeaves(root) {
    if (!root) return 0;
    let result = 0;
    if (root.left && !root.left.left && !root.left.right) result = root.left.val;
    let left = root.left ? sumOfLeftLeaves(root.left) : 0;
    let right = root.right ? sumOfLeftLeaves(root.right) : 0;
    return result + left + right;
}

let root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode (15);
root1.right.right = new TreeNode(7);

console.log(sumOfLeftLeaves(root1));