function isPerfectSquare(num) {
    if (num === 1) return true;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0 && (num / i) === i) return true;
    }

    return false;
}

function isPerfectSquare_optimzied(num) {
    if (num === 1) return true;
    let left = 2, right = Math.floor(num / 2);

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid * mid === num) return true;

        if (mid * mid > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        } 
    }

    return false;
}

console.log(isPerfectSquare_optimzied(16)); //true
console.log(isPerfectSquare_optimzied(14)); //false
console.log(isPerfectSquare_optimzied(1)); //true
console.log(isPerfectSquare_optimzied(4)); //true
console.log(isPerfectSquare_optimzied(9)); //true
console.log(isPerfectSquare_optimzied(8)); //false
console.log(isPerfectSquare_optimzied(3)); //false
console.log(isPerfectSquare_optimzied(100)); //true