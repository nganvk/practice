function addDigits(num) {
    if (num < 10) return num;
    let sum = 0;

    while (num >= 10) {
        while (num !== 0) {
            sum = sum + (num % 10);
            num = Math.floor(num / 10);
        }

        num = sum;
        sum = 0;
    }

    return num;
}

function addDigits_optimized(num) {
    if (num === 0) return 0;
    return (num % 9 === 0) ? 9 : (num % 9);
}

console.log(addDigits_optimized(38)); //2
console.log(addDigits_optimized(0)); //0