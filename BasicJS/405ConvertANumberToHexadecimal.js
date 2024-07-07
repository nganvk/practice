function toHex(num) {
    let hexa = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    if (num === 0) return '0';
    let result = "";
    if (num < 0) num = num + Math.pow(2,32);

    while (num > 0) {
        let remain = num % 16;
        result = hexa[remain] + result;
        num = Math.floor(num / 16);
    }

    return result;
}

console.log(toHex(26));
console.log(toHex(-1));
console.log(toHex(0));
console.log(toHex(1));