function isPalindrome(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function isPalindrome_optimized(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let reversed = [...s].reverse().join("");
    return s === reversed;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false
console.log(isPalindrome(" ")); //true