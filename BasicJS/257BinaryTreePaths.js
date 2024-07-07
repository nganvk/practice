class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = (left === undefined) ? null : left;
        this.right = (right === undefined) ? null : right;
    }
}

function binaryTreePaths(root) {
    let result = [];
    let stack = [];
    let pathStack = [];
    stack.push(root);
    pathStack.push(root.val.toString());

    while (stack.length !== 0) {
        let node = stack.pop();
        let path = pathStack.pop();

        if (node.left === null && node.right === null) {
            result.push(path);
        }

        if (node.right !== null){
            stack.push(node.right);
            pathStack.push(path + "->" + node.right.val);
        }

        if (node.left !== null) {
            stack.push(node.left);
            pathStack.push(path + "->" + node.left.val);
        }
    }

    return result;
}

function binaryTreePaths_optimized(root) {
    let result = [];
    let pathStack = "";

    function traverse(root) {
        if (root === null) {
            return;
        }

        let backTrack = pathStack;

        if (pathStack.length !== 0) {
            pathStack = pathStack + "->";
        }

        pathStack = pathStack + root.val;

        if (root.left === null && root.right === null) {
            result.push(pathStack);
        } else {
            traverse(root.left);
            traverse(root.right);
        }

        pathStack = backTrack;
    }

    traverse(root);
    return result;
}

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.left.right = new TreeNode(5);
root1.right = new TreeNode(3);

let root2 = new TreeNode(1);

console.log(binaryTreePaths_optimized(root1));
console.log(binaryTreePaths_optimized(root2));

