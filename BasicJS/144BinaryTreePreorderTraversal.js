class TreeNode {
    constructor (val, left, right) {
        this.val = val;
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function preorderTraversal(root) {
    let result = [];

    function traverse (node) {
        if (node === null) {
            return;
        } else {
            result.push(node.val);
            traverse(node.left);
            traverse(node.right);
        }
    }

    traverse(root);
    return result;
}

function preorderTraversal(root) {
    let result = [];
    let stack = [];

    if (root !== null) {
        stack.push(root);
    }

    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);

        if (node.right !== null) {
            stack.push(node.right);
        }
        
        if (node.left !== null) {
            stack.push(node.left);
        }

    }

    return result;
}

let root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);

let root2 = new TreeNode(1);

let root3 = new TreeNode();

console.log(preorderTraversal(root1));
console.log(preorderTraversal(root2));
console.log(preorderTraversal(root3));