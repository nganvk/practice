class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function hasPathSum(root, targetSum) {
    if (root === null) {
        return false;
    }

    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }

    let leftSum = hasPathSum(root.left, targetSum - root.val);
    let rightSum = hasPathSum(root.right, targetSum - root.val);
    return leftSum || rightSum;
}

let root1 = new TreeNode(5);
root1.left = new TreeNode(4);
root1.right = new TreeNode(8);
root1.left.left = new TreeNode(11);
root1.left.left.left = new TreeNode(7);
root1.left.left.right = new TreeNode(2);
root1.right.left = new TreeNode(13);
root1.right.right = new TreeNode(4);
root1.right.right.right = new TreeNode(1);

let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);

let root3 = new TreeNode();


console.log(hasPathSum(root1, 22)); //true
console.log(hasPathSum(root2, 5)); //false
console.log(hasPathSum(root3, 0)); //false