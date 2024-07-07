function countBits(n) {
    let ans = [0];

    for (let i = 1; i <= n; i++) {
        let count = 0;
        let j = i;

        while (j !== 0) {
            j = j & (j - 1);
            count++;
        }

        ans.push(count);
    }

    return ans;
}

console.log(countBits(2));
console.log(countBits(5));