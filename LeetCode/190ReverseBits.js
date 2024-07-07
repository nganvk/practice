function reverseBits(n) {
    let binary = n.toString(2);
    
    while (binary.length < 32) {
        binary = "0" + binary;
    }

    let arr = binary.split("").reverse().join("");
    return parseInt(arr, 2);
}

function reverseBits_bitManipulation(n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result <<= 1;
        if (n & 1 === 1) result++;
        n >>= 1;
    }

    return result >>> 0;
}

console.log(reverseBits_bitManipulation(43261596));