function repeatedSubstringPattern(s) {
    for (let i = Math.floor(s.length / 2); i >= 1; i--) {
        if (s.length % i === 0) {
            let repeatTimes = s.length / i;
            let substring = s.substring(0, i); 
            let repeatedString = substring.repeat(repeatTimes);
            if (repeatedString === s) return true;
        }
    }

    return false;
}

console.log(repeatedSubstringPattern("abab")); //true
console.log(repeatedSubstringPattern("ababab")); //true
console.log(repeatedSubstringPattern("babbabbabbabbab")); //true