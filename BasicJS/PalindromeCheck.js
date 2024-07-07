function panlindromeCheck(str) {
    let arr = [];
    let reverseStr;
    for (i = 0; i < str.length; i++) {
        arr.push(str[str.length - 1 - i]);
    }
    reverseStr = arr.join("");
    if (str === reverseStr) {
        return "Yes, it's a palindrome";
    } else {
        return "No, it's not a palindrome";
    }
}

console.log(panlindromeCheck("racecar"));
console.log(panlindromeCheck("freecodecamp"));
