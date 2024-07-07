function arrangeCoins(n) {
    let result = 1;
    let remain = n - result;

    for (let i = 2; i <= remain; i++) {
        result++;
        remain = remain - i;
    }

    return result;
}

function arrangeCoins_optimized(n) {
    let left = 1, right = n;
    let result = 0;
    
    while (left <= right) {
        let mid  = left + Math.floor((right - left) / 2);
        let tempRow = (1 + mid) * mid / 2;
        if (tempRow === n) return mid;
        
        if (tempRow < n) {
            left = mid + 1;
            result = mid;
        }

        if (tempRow > n) {
            right = mid - 1;
        }
    }

    return result;
}

console.log(arrangeCoins_optimized(5)); //2
console.log(arrangeCoins_optimized(8)); //3
console.log(arrangeCoins_optimized(1)); //1
console.log(arrangeCoins_optimized(6)); //3
console.log(arrangeCoins_optimized(2147483647)); //65535