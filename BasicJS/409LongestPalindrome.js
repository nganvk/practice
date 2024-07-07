function longestPalindrome(s) {
    let map = new Map();
    let palindromeLength = 0;

    for (let c of s) {
        if (!map.has(c)) map.set(c, 1);
        else map.set(c, map.get(c) + 1);
    }

    for ([key, value] of map) {
        if (value % 2 === 0) palindromeLength = palindromeLength + value;
        else palindromeLength = palindromeLength + Math.floor(value / 2) * 2;
    }

    return palindromeLength === s.length ? palindromeLength : (palindromeLength + 1);
}

function longestPalindrome_optimzied(s) {
    let set = new Set();

    for (let c of s) {
        if (!set.has(c)) set.add(c);
        else set.delete(c);
    }

    return set.size >= 1 ? s.length - set.size + 1 : s.length;
}

console.log(longestPalindrome_optimzied("abccccdd")); //7
console.log(longestPalindrome_optimzied("a")); //1
console.log(longestPalindrome_optimzied("aaab")); //3
console.log(longestPalindrome_optimzied("Aa")); //1
console.log(longestPalindrome_optimzied("aa")); //2
console.log(longestPalindrome_optimzied("aba")); //3
console.log(longestPalindrome_optimzied("aaa")); //3