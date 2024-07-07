function addBinary(a, b) {
    let carry = 0;
    let result = ""

    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        let sum = carry;
        if (i >= 0) {
            sum += a[i] - '0';
        }
        if (j >= 0) {
            sum += b[j] - '0';
        }
        result = sum%2 + result;
        carry = Math.floor(sum/2);
    }

    result = carry + result;
    result = result.split("");

    if (result[0] === "0") {
        result.shift();
    }

    return result.join("");
}

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("0", "1"));
console.log(addBinary("0", "0"));





