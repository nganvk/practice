function titleToNumber(columnTitle) {
    let titleNumber = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        titleNumber = titleNumber * 26;
        titleNumber = titleNumber + columnTitle[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
    }

    return titleNumber;
}

console.log(titleToNumber("A")); //1
console.log(titleToNumber("AB")); //28
console.log(titleToNumber("ZY")); //701
