class TreeNode101 {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function isSymmetric(root) {
    if (!root.left && !root.right) {
        return true;
    } else if (!root.left || !root.right) {
        return false;
    }

    let que = [];
    que.push(root.left);
    que.push(root.right);

    while(que.length > 0) {
        let left = que.shift();
        let right = que.shift();

        if (!left && !right) {
            continue;
        }

        if (!left || !right || left.val !== right.val) {
            return false;
        } else {
            que.push(left.left);
            que.push(right.right);
            que.push(left.right);
            que.push(right.left);
        }
    }

    return true;
}

let root1 = new TreeNode101(1);
root1.left = new TreeNode101(2);
root1.right = new TreeNode101(2);
root1.left.left = new TreeNode101(3);
root1.left.right = new TreeNode101(4);
root1.right.left = new TreeNode101(4);
root1.right.right = new TreeNode101(3);

let root2 = new TreeNode101(1);
root2.left = new TreeNode101(2);
root2.right = new TreeNode101(2);
root2.left.right = new TreeNode101(3);
root2.right.right = new TreeNode101(3);

let root3 = new TreeNode101(1);

let root4 = new TreeNode101(1);
root4.left = new TreeNode101(2);

let root5 = new TreeNode101(9);
root5.left = new TreeNode101(-42);
root5.right = new TreeNode101(-42);
root5.left.right = new TreeNode101(76);
root5.right.left = new TreeNode101(76);
root5.left.right.right = new TreeNode101(13);
root5.right.left.right = new TreeNode101(13);

console.log(isSymmetric(root1)); //true
console.log(isSymmetric(root2)); //false
console.log(isSymmetric(root3)); //true
console.log(isSymmetric(root4)); //false
console.log(isSymmetric(root5)); //false

// let arr = [1, null, null];
// console.log(arr.length);
