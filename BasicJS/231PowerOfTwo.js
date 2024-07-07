function isPowerOfTwo(n) {
    if (n === 0) {
        return false;
    }

    while (n !== 1) {
        if (n % 2 !== 0) {
            return false;
        } else {
            n = n / 2;
        }
    }

    return true
}

function isPowerOfTwo_optimized(n) {
    if ((n === 0) || (n < 0) || ((n & (n - 1)) !== 0)) {
        return false;
    } else {
        return true;
    }
}

console.log(isPowerOfTwo_optimized(1));
console.log(isPowerOfTwo_optimized(16));
console.log(isPowerOfTwo_optimized(3));
console.log(isPowerOfTwo_optimized(-3));
console.log(isPowerOfTwo_optimized(-16));
console.log(isPowerOfTwo_optimized(8));
console.log(isPowerOfTwo_optimized(6));


