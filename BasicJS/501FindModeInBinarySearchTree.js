class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined) ? 0 : val;
        this.right = (val === undefined) ? null : val;
        this.left = (val === undefined) ? null : right;
    }
}

function findMode(root) {
    let res = [];
    let max = 0, count = 1;
    let prev = null;

    function traverse(root, res) {
        if (!root) return;
        traverse(root.left, res);
        
        if (prev) {
            if (prev === root.val) {
                count++;
            } else {
                count = 1;
            }
        }
        
        if (count > max) {
            res = [];
            res.push(root.val);
            max = count;
        } else if (count === max) {
            res.push(root.val);
        }

        prev = root.val;
        traverse(root.right, res);
    }
}