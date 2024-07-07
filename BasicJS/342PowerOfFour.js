function isPowerOfFour(n) {    
    while (n > 1) {
        if (n % 4 !== 0) return false;
        n = n / 4;
    }

    return n === 1;
}

function isPowerOfFour_optimized(n) {
    if ((n & (n -1)) === 0 && (n & 0x55555555) !== 0) return true;
    return false;
} 

console.log(isPowerOfFour_optimized(16)); //true
console.log(isPowerOfFour_optimized(5)); //false
console.log(isPowerOfFour_optimized(1)); //true