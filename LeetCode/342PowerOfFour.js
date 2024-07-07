function isPowerOfFour(n) {
    while (n > 1) {
        if (n % 4 !== 0) return false;
        n = n / 4;
    }

    return n === 1;
}

function isPowerOfFour_optimized(n) {
    if (n <= 0) return false;
    return (((n & (n - 1)) === 0) && ((n & 1431655765) !== 0));
}

console.log(isPowerOfFour(16)); //true
console.log(isPowerOfFour(5)); //false
console.log(isPowerOfFour(1)); //true