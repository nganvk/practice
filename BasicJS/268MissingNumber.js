function missingNumber (nums) {
    for (let i = 0; i <= nums.length; i++) {
        if (nums.indexOf(i) === -1) {
            return i;
        }
    }
}

function missingNumber_optimized(nums) {
    let n = nums.length;
    let total = n * (n + 1) / 2;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum = sum + nums[i];
    }

    return total - sum;
}

console.log(missingNumber_optimized([3, 0, 1])); //2
console.log(missingNumber_optimized([0, 1])); //2
console.log(missingNumber_optimized([9,6,4,2,3,5,7,0,1])); //8
console.log(missingNumber_optimized([1])); //0

