class TreeNode {
    constructor (val, left, right) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function sumOfLeftLeaves(root) {
    if (root === null) return 0;
    let result = 0;

    if (root.left !== null 
        && root.left.left === null 
        && root.left.right === null) 
    {
        result = root.left.val;
    }

    let left = sumOfLeftLeaves(root.left);
    let right = sumOfLeftLeaves(root.right);
    return result + left + right;
}

let root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode (15);
root1.right.right = new TreeNode(7);

console.log(sumOfLeftLeaves(root1));