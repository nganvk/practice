class TreeNode {
    constructor (val, left, right) {
        this.val = val;
        this.left = left
        this.right = right
    }
}

function sortedArrayToBST(nums) {
    function arrayToTree(left, right) {
        if (left > right) {
            return null;
        }

        let mid = Math.floor((left + right) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = arrayToTree(left, mid - 1);
        root.right = arrayToTree(mid + 1, right);
        return root;
    }

    return arrayToTree(0, nums.length - 1);
}

console.log(sortedArrayToBST([-10,-3,0,5,9]))

