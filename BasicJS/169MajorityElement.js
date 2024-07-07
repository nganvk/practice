function majorityElement(nums) {
    let map = new Map();
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }

    for ([key, value] of map) {
        if (value > n / 2) {
            return key;
        }
    }
}

function majorityElement(nums) {
    let count = 0;
    let candidate;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }

        count = count + (nums[i] === candidate ? 1 : -1);
    }

    return candidate;
}

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([2]));