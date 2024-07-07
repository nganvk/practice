function twoSum (nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

// console.log(twoSum ([2,7,11,15], 9));
// console.log(twoSum ([3,2,4], 6));
// console.log(twoSum ([3,3], 6));

///FASTER APPROACH
function twoSumFaster (nums, target) {
    let set = new Set ();
    let complement = 0;
    for (i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (set.has(complement)) {
            return [nums.indexOf(complement), i]
        }
        set.add(nums[i])
    }
}

function twoSum2 (nums, target) {
    let set = new Set();
    let remaining;
    for (i = 0; i < nums.length; i++) {
        remaining = target - nums[i];
        if (set.has(remaining)) {
            return [i, nums.indexOf(remaining)]
        }
        set.add(nums[i]);
    }
}

console.log(twoSum2 ([2,7,11,15], 9));
console.log(twoSum2 ([3,2,4], 6));
console.log(twoSum2 ([3,3], 6));