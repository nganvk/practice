function canConstruct(ransomNote, magazine) {
    let arr1 = new Array(256).fill(0);

    for (let i = 0; i < magazine.length; i++) {
        arr1[magazine.charCodeAt(i)]++;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        arr1[ransomNote.charCodeAt(i)]--;
        if (arr1[ransomNote.charCodeAt(i)] < 0) return false;
    }

   return true;
}

console.log(canConstruct("a", "b")); //false
console.log(canConstruct("aa", "ab")); //false
console.log(canConstruct("aa", "aab")); //true
console.log(canConstruct("aab", "baa")); //true