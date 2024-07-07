function reverseBits(n) {
    let binary = n.toString(2);
    
    while (binary.length < 32) {
        binary = "0" + binary;
    }

    let reversed = binary.split("").reverse().join("");
    return parseInt(reversed, 2);
}

function reverseBits(n) {
    let reversed = 0;

    for (let i = 0; i < 32; i++) {
        reversed <<= 1;

        if (n & 1) {
            reversed++;
        }

        n >>= 1;
    }

    return reversed >>> 0;
}


console.log(reverseBits(parseInt("00000010100101000001111010011100", 2)));