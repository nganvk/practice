function isPowerOfTwo(n) {
    if (n < 1) return false;

    while (n !== 1) {
        if (n % 2 !== 0) return false;
        n = n / 2;
    }

    return true;
}

function isPowerOfTwo_optimized(n) {
    if (n < 1 || (n & (n - 1)) !== 0) return false;
    return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(-3));
console.log(isPowerOfTwo(-16));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(6));