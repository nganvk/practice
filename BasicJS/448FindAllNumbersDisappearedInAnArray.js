function findDisappearredNumbers(nums) {
    let arr = [];

    for (i = 1; i <= nums.length; i++) {
        arr[i - 1] = i;
    }

    let set = new Set(nums);
    let disappearedNumbers = arr.filter(num => !set.has(num));
    return disappearedNumbers;
}

function findDisappearredNumbers_optimzied(nums) {
    let set = new Set(nums);
    let disappearedNumbers = [];

    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            disappearedNumbers.push(i);
        }
    }

    return disappearedNumbers;
}

function findDisappearredNumbers_optimzied2 (nums) {
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        let idx = num - 1;
        nums[idx] = Math.abs(nums[idx]) * -1;
    }

    let disappearedNumbers = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) disappearedNumbers.push(i + 1);
    }

    return disappearedNumbers;
}

console.log(findDisappearredNumbers_optimzied2([4,3,2,7,8,2,3,1]));
console.log(findDisappearredNumbers_optimzied2([1,1]));