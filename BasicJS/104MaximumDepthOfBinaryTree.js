class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

//Recursive algorithm
function maxDepth(root) {
    if (!root) {
        return 0;
    } else {
        let leftDepth = maxDepth(root.left);
        let rightDepth = maxDepth(root.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }    
}

// Iterative algorithm
function maxDepth(root) {
    let depth = 0;

    if (!root) {
        return depth;
    } else {
        let stack = [];
        stack.push([root, 1]);
        
        while (stack.length !== 0) {
            let currentNode = stack.pop();
            root = currentNode[0];
            let currentDepth = currentNode[1];

            if (root !== null) {
                depth = Math.max(depth, currentDepth);
                stack.push([root.left, currentDepth + 1]);
                stack.push([root.right, currentDepth + 1]);
            }
        }
    }

    return depth;
}

let root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);

console.log(maxDepth(root1));