class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    let left = isSameTree(p.left, q.left);
    let right = isSameTree(p.right, q.right);
    return left && right;
}

let root1 = new TreeNode(1);                            
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);

let root3 = new TreeNode(1);
root3.left = new TreeNode(2);

let root4 = new TreeNode(1);
root4.right = new TreeNode(2);

let root5 = new TreeNode(1);
root5.left = new TreeNode(2);
root5.right = new TreeNode(1);

let root6 = new TreeNode(1);
root6.left = new TreeNode(1);
root6.right = new TreeNode(2);

console.log(isSameTree(root1, root2)); //true
console.log(isSameTree(root3, root4)); //false
console.log(isSameTree(root5, root6)); //false