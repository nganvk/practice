function intersect(nums1, nums2) {
    let map = new Map();
    let intersect = [];

    for (let num of nums1) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    }

    for (let num of nums2) {
        if (map.get(num) > 0) {
            intersect.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return intersect;
}

console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([4,9,5], [9,4,9,8,4]));
console.log(intersect([1,2,2,1], [2]));