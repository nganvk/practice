class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function postorderTraversal(root) {
    let result = [];

    function traverse(node) {
        if (node === null) {
            return result;
        } else {
            traverse(node.left);
            traverse(node.right);
            result.push(node.val);
        }
    }

    traverse(root);
    return result;
}

function postorderTraversal(root) {
    let result = [], stack1 = [], stack2 = [];

    if (root === null) {
        return result;
    } else {
        stack1.push(root);

        while (stack1.length > 0) {
            let node = stack1.pop();
            stack2.push(node);

            if (node.left !== null) {
                stack1.push(node.left);
            }

            if (node.right !== null) {
                stack1.push(node.right);
            }
        }

        while (stack2.length > 0) {
            let node = stack2.pop();
            result.push(node.val);
        }
    }

    return result;
}

let root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);

let root2 = new TreeNode(1);

let root3 = new TreeNode();

console.log(postorderTraversal(root1));
console.log(postorderTraversal(root2));
console.log(postorderTraversal(root3));