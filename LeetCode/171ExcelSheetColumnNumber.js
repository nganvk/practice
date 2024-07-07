function titleToNumber(columnTitle) {
    let columnNumber = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        columnNumber = columnNumber * 26 + columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
    }

    return columnNumber;
}

console.log(titleToNumber("A")); //1
console.log(titleToNumber("AB")); //28
console.log(titleToNumber("ZY")); //701