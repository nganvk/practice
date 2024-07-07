class NumArray {
    constructor (nums) {
        this.prefixSum = [0];
        let sum = 0;

        for (let num of nums) {
            sum = sum + num;
            this.prefixSum.push(sum);
        }
    }

    sumRange(left, right) {
        return this.prefixSum[right + 1] - this.prefixSum[left];
    }
}

let numArr = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArr);
console.log(typeof(numArr));
let sum = numArr.sumRange(0, 5);
console.log(sum);