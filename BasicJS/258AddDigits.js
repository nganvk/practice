function addDigits(num) {
    if (num < 10) {
        return num;
    }

    let sum = 0;

    while (num >= 10) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);

        if (num < 10) {
            num = num + sum;
            sum = 0;
        }
    }
    
    return num;
}

function addDigits_optimzied(num) {
    if (num === 0) {
        return 0;
    }

    return (num % 9 === 0) ? 9 : num % 9;
}

console.log(addDigits(38));
console.log(addDigits(0));