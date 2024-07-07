function maxSubArray (nums) {
    let maxSub = -Infinity;
    let currentSum = 0;
    if (nums.length === 1) {
        return maxSub = nums[0];
    }
    if (nums.length > 1) {
        for (i = 0; i < nums.length; i++) {
            currentSum = Math.max(nums[i], nums[i] + currentSum);
            maxSub = Math.max(maxSub, currentSum);
        }
        return maxSub;
    }
}

console.log(maxSubArray([1]));
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([5,4,-1,7,8]));
console.log(maxSubArray([-2,1]));
console.log(maxSubArray([-1, -2]));
console.log(maxSubArray([-2, -1]));



