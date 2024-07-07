function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let remain = target - nums[i];
        if (map.has(remain)) return [map.get(remain), i];
        map.set(nums[i], i);
    }
}

console.log(twoSum([2,7,11,15], 9)) //[0,1]
console.log(twoSum([3,2,4], 6)) //[1,2]
console.log(twoSum([3,3], 6)) //[0,1]
console.log(twoSum([-3,1,10], 7)) //[0,2]
console.log(twoSum([1,-109,10,0], -109)) //[1,3]