function mySqrt(x) {
    let start = 1, end = x;
    let result = 0; mid = 0;

    if (x === 0) {
        return x;
    }

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        result = mid * mid;
        if (result > x) {
            end = mid - 1;
            mid = end;
        } else if (result < x) {
            start = mid + 1;
        } else if (result === x) {
            return mid;
        }
    }

    return mid;
}
console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(0));
console.log(mySqrt(1));


