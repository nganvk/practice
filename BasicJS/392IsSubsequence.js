function isSubsequence(s, t) {
    if (s.length === 0) return true;
    if (s.length > t.length) return false;
    let idx = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[idx] === t[i]) idx++;
        if (idx === s.length) return true;
    }

    return false;
}

console.log(isSubsequence("abc", "ahbgdc")); //true
console.log(isSubsequence("axc", "ahbgdc")); //false
console.log(isSubsequence("", "")); //true
console.log(isSubsequence("abc", "abc")); //true
console.log(isSubsequence("acb", "abc")); //false
console.log(isSubsequence("", "abc")); //true
console.log(isSubsequence("abc", "")); //false