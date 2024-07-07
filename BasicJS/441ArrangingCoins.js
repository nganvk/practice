function arrangeCoins(n) {
    let completeRows = 1;

    for (let i = 2; i < n; i++) {
        completeRows = completeRows + i;
        if (completeRows > n) return i - 1;
        if (completeRows === n) return i;
    }

    return completeRows;
}

function arrangeCoins_optimized(n) {
    let left = 1, right = n;
    let completeRows = 0;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let coins = (1 + mid) * mid / 2;

        if (coins < n) {
            left = mid + 1;
            completeRows = mid;
        } else if (coins == n) {
            return mid;
        } else {
            right = mid - 1;
        }
    }

    return completeRows;
}

function countdown(i) {
    console.log(i);
    if (i <= 1) {  // base case
        return;
    } else {     // recursive case
        countdown(i - 1);
    }
}

function countdown(i) {
    for (let j = i; j > 0; j--) {
        console.log(j);
    }
}

countdown(5);    // This is the initial call to the function.

// console.log(arrangeCoins_optimized(5)); //2
// console.log(arrangeCoins_optimized(8)); //3
// console.log(arrangeCoins_optimized(1)); //1
// console.log(arrangeCoins_optimized(6)); //3
// console.log(arrangeCoins_optimized(2147483647)); //3