function addBinary(a, b) {
    let idx_a = a.length - 1;
    let idx_b = b.length - 1;
    let carry = 0;
    let result = "";

    while (idx_a >= 0 || idx_b >= 0) {
        let sum = carry;

        if (idx_a >= 0) sum = sum + parseInt(a[idx_a], 10);
        if (idx_b >= 0) sum = sum + parseInt(b[idx_b], 10);
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        idx_a--;
        idx_b--;
    }

    result = carry + result;
    
    if (result[0] === '0') {
        result = result.split("");
        result.shift();
        result = result.join("");
    }

    return result;
}

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("0", "1"));
console.log(addBinary("0", "0"));