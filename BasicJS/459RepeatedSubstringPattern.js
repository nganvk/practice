function repeatedSubstringPattern(s) {
    let n = s.length;
    let subString;

    for (let i = Math.floor(n / 2); i >= 1; i--) {
        if (n % i === 0) {
            let repeat = n / i;
            subString = s.substring(0, i);
            subString = subString.repeat(repeat);
            if (s === subString) return true;
        }
    }

    return false;
}

console.log(repeatedSubstringPattern("abab")); //true
console.log(repeatedSubstringPattern("ababab")); //true
console.log(repeatedSubstringPattern("babbabbabbabbab")); //true