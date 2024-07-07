function reverseString (str) {
    let reverserArr = [];
    for (let i = 0; i < str.length; i++) {
        reverserArr.push(str[str.length - 1 - i]) 
    }
    str = reverserArr.join("");
    return str;
}

console.log(reverseString("for"));