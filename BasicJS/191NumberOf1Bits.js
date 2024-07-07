function hammingWeight(n) {
    let numberOf1 = 0;
    let binary = n.toString(2);

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            numberOf1++;
        }
    }

    return numberOf1;
}

function hammingWeight(n) {
    let count = 0;

    while (n !== 0) {
        n &= (n - 1);
        count++;
    }

    return count;
}

console.log(hammingWeight(parseInt("00000000000000000000000000001011", 2))); //3
console.log(hammingWeight(parseInt("00000000000000000000000010000000", 2))); //1
console.log(hammingWeight(parseInt("11111111111111111111111111111101", 2))); //31
