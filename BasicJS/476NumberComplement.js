function findComplement(num) {
    let binary = num.toString(2);
    let flipped = "";

    for (let i = 0; i < binary.length; i++) {
        flipped = flipped + (binary[i] === '1' ? '0' : '1'); 
    }

    flipped = parseInt(flipped, 2);
    return flipped;
}

function findComplement_optimized(num) {
    let mask = 1;

    while (mask < num) {
        mask = (mask << 1) | 1;
    }

    return mask ^ num;
}

console.log(findComplement_optimized(5));
console.log(findComplement_optimized(1));
console.log(findComplement_optimized(2147483647));