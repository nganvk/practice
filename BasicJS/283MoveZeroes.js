function moveZeroes(nums) {
    let countZero = 0;
    let index = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            countZero++;
            index.push(i);
        }
    }

    while (index.length !== 0) {
        let zero = index.pop();
        nums.splice(zero, 1);
    }

    while (countZero > 0) {
        nums.push(0);
        countZero--;
    }

    return nums;
}

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([0, 0, 0, 1]));