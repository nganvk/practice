function isHappy(n) {
    let sumSquare = 0;
    let set = new Set();

    while (n !== 1 && !set.has(n)) {
        set.add(n);
        
        while (n > 0) {
            sumSquare = sumSquare + ((n % 10) * (n % 10));
            n = Math.floor(n / 10);
        }

        n = sumSquare;
        sumSquare = 0;
    }

    return n === 1;
}

console.log(isHappy(19));
console.log(isHappy(2));