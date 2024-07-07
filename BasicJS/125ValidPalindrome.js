function isPalindrome(s) {
    let lowerCase = s.toLowerCase(s);
    let removeNonAlphaNum = lowerCase.replace(/[^a-zA-Z0-9]/g, "");
    let reverse = [...removeNonAlphaNum].reverse().join("");
    return removeNonAlphaNum === reverse;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));