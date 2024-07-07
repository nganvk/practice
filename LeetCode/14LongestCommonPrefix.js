function longestCommonPrefix(strs) {
    strs = strs.sort();
    let n = strs.length;
    let firstString = strs[0];
    let lastString = strs[n - 1]
    let maxCommonPrefix = Math.min(firstString.length, lastString.length);

    for (let i = 0; i < maxCommonPrefix; i++) {
        if (firstString[i] !== lastString[i]) {
            return firstString.substring(0, i);
        }
    }

    return firstString;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["dog"]));
console.log(longestCommonPrefix([""]));