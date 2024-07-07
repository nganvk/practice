function intersection(nums1, nums2) {
    let concat = [...nums1, ...nums2];
    let set = [...new Set(concat)];
    let result = [];

    for (let i = 0; i < set.length; i++) {
        if ((nums1.indexOf(set[i]) !== -1) && (nums2.indexOf(set[i]) !== -1)) {
            result.push(set[i]);
        }
    }

    return result;
}

function intersection_optimized(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let result = [...set1].filter(num => set2.has(num));
    return result;
}

// console.log(intersection_optimized([1,2,2,1], [2,2]));
// console.log(intersection_optimized([4,9,5], [9,4,9,8,4]));

let b = [1,2,2];
let a = new Set (b);
console.log([...a]);