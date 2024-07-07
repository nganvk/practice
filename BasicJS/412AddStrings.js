function addStrings(num1, num2) {
    let n1 = num1.length, n2 = num2.length;
    let result = "", carry = 0;

    while (n1 > 0 || n2 > 0 || carry > 0) {
        let digit1 = n1 < 1 ? 0 : (num1[n1 - 1] - "0")
        let digit2 = n2 < 1 ? 0 : (num2[n2 - 1] - "0")
        let sum = digit1 + digit2 + carry;
        carry = 0;

        if (sum > 9) {
            result = (sum % 10) + result;
            carry = 1;
        } else {
            result = sum + result;
        }

        n1--;
        n2--;
    }

    return result;
}

console.log(addStrings("11", "123"));
console.log(addStrings("456", "77"));
console.log(addStrings("0", "0"));
console.log(addStrings("1", "9"));


// let a = "11";
// let b = "12"
// let c = (a.length - 1) - "0";
// console.log(c);
// console.log(typeof(c));