class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function preorderTraversal(root) {
    let result = [];
    if (!root) return result;
    let stack = [];
    stack.push(root);

    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
}

function preorderTraversal_optimized(root) {
    let result = [];
    
    function traverse(root) {
        if (!root) return;
        result.push(root.val);
        traverse(root.left);
        traverse(root.right);
    }

    traverse(root);
    return result;
}

let root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);

let root2 = new TreeNode(1);

let root3 = new TreeNode();

console.log(preorderTraversal_optimized(root1)); //[1,2,3]
console.log(preorderTraversal_optimized(root2)); //[1]
console.log(preorderTraversal_optimized(root3)); //[]