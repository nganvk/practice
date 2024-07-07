function plusOne(digits) {
    let lastDigitsIndex = digits.length - 1;

    for (let i = lastDigitsIndex; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    return [1,...digits];
}

console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))
console.log(plusOne([0]))
console.log(plusOne([9,9,9]))