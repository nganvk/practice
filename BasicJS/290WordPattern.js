function wordPattern(pattern, s) {
    let setPattern = new Set(pattern);
    let stringArr = s.split(" ");
    let setS = new Set(stringArr);

    if ((pattern.length !== stringArr.length) || (setPattern.size !== setS.size)) {
        return false;
    }

    let map = new Map();

    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i]) && (map.get(pattern[i]) !== stringArr[i])) {
            return false;
        }

        map.set(pattern[i], stringArr[i])
    }
    
    return true;
}

console.log(wordPattern("abba", "dog cat cat dog")); //true
console.log(wordPattern("abba", "dog cat cat fish")); //false
console.log(wordPattern("aaaa", "dog cat cat dog")); //false
console.log(wordPattern("a", "dog cat cat dog")); //false
console.log(wordPattern("a", "dog")); //true
console.log(wordPattern("aa", "dog")); //false
console.log(wordPattern("aba", "dog cat cat")); //false