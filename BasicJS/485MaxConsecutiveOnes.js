function findMaxConsecutiveOnes(nums) {
    let count = 0;
    let maxOne = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            maxOne = Math.max(maxOne, count);
        } else count = 0;
    }

    return maxOne;
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));