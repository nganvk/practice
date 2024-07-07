function convertToTitle(columnNumber) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let n = alphabet.length;
    let title = "";

    while (columnNumber > 0) {
        columnNumber--;
        let remainder = columnNumber % n;
        title = alphabet[remainder] + title;
        columnNumber = Math.floor(columnNumber / n);
    }

    return title;
}

console.log(convertToTitle(1)); //A
console.log(convertToTitle(26)); //Z
console.log(convertToTitle(52)); //AZ
console.log(convertToTitle(78)); //BZ
console.log(convertToTitle(53)); //BA
console.log(convertToTitle(79)); //CA