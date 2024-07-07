class NumArray {
    constructor(nums) {
       this.prefix = [0];

        for (let i = 0; i < nums.length; i++) {
           this.prefix.push(this.prefix[i] + nums[i]);
        }
    }

    sumRange(left, right) {
        return this.prefix[right + 1] -this.prefix[left];
    }
}

let numArr = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArr);
console.log(typeof(numArr));
let sum = numArr.sumRange(0, 5);
console.log(sum);
console.log(numArr.sumRange(0, 5));