function containsNearByDuplicate(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], {freq: 1, abs: i});
        } else {
            let absolutePosition = map.get(nums[i]).abs;
            let frequency = map.get(nums[i]).freq;
            frequency++;
            absolutePosition = Math.abs(absolutePosition - i);

            if (absolutePosition <= k) {
                return true;
            } else {
                map.set(nums[i], {freq: frequency, abs: i});
            }
        }
    }

    return false;
}

function containsNearByDuplicate(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (Math.abs(map.get(nums[i]) - i) <= k) {
                return true;
            }
        }

        map.set(nums[i], i);
    }

    return false;
}

console.log(containsNearByDuplicate([1,2,3,1], 3)); //true
console.log(containsNearByDuplicate([1,0,1,1], 1)); //true
console.log(containsNearByDuplicate([1,2,3,1,2,3], 2)); //false