function nextGreaterElement(nums1, nums2) {
    let ans = [];

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let found = 0;

            if (nums1[i] === nums2[j]) {
                for (let k = j + 1; k < nums2.length; k++) {
                    if (nums2[k] > nums1[i]) {
                        ans[i] = nums2[k];
                        found = 1;
                        break;
                    }
                }

                if (found === 0) ans[i] = -1;
            }
        }
    }

    return ans;
}

function nextGreaterElement_optimized(nums1, nums2) {
    let map = new Map();
    let stack = [];

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0) {
            if (stack[stack.length - 1] < nums2[i]) map.set(stack.pop(), nums2[i]);
            else break;
        }

        stack.push(nums2[i]);
    }

    let ans = [];

    for (let i = 0; i < nums1.length; i++) {
        ans[i] = map.get(nums1[i]) || -1;
    }

    return ans;
}

console.log(nextGreaterElement_optimized([4,1,2], [1,3,4,2]));
console.log(nextGreaterElement_optimized([2,4], [1,2,3,4]));
console.log(nextGreaterElement_optimized([1,3,5,2,4], [6,5,4,3,2,1,7]));


