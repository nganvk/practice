function plusOne(digits) {
    let flagPlusOne;

    for (let i = digits.length - 1; i >= 0; i--) {
        flagPlusOne = false;
        if (digits[i] !== 9) {
            digits[i]++;
            break;
        } else {
            digits[i] = 0;
            flagPlusOne = true;
        }
    }

    if (flagPlusOne) {
        return [1, ...digits];
    } else return digits;
}
console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))
console.log(plusOne([9,9]))
console.log(plusOne([2,9]))
console.log(plusOne(Array(100).fill(9)));