function climbStairs(n) {
    if (n === 1) return 1;

    let arr = Array(n + 1);
    arr[0] = 1;
    arr[1] = 1;

    for (let i = 2; i < arr.length; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
}

function climbStairs(n) {
    if (n === 1) return 1;

    let a = 1;
    let b = 1;
    let countWays = 0;

    for (let i = 2; i <= n; i++) {
        countWays = a + b;
        a = b;
        b = countWays;
    }

    return countWays;
}
console.log(climbStairs(2)); //2
console.log(climbStairs(3)); //3
console.log(climbStairs(1)); //1
console.log(climbStairs(4)); //5
console.log(climbStairs(5)); //8