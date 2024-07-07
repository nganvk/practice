function isPowerOfThree(n) {
    while (n > 1) {
        if (n % 3 !== 0) {
            return false;
        } else {
            n = n / 3;
        }
    
    }
    
    return n === 1;
}

function isPowerOfThree_optimized(n) {
    if (n < 1) return false;
    if (n === 1) return true;
    if (n % 3 !== 0) return false;
    return isPowerOfThree_optimized(Math.floor(n / 3));
}

console.log(isPowerOfThree_optimized(27)); //true
console.log(isPowerOfThree_optimized(0)); //false
console.log(isPowerOfThree_optimized(-1)); //false

