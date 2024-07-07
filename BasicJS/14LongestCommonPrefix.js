function longestCommonPrefix(strs) {
    strs.sort();
    let prefix = strs[0];
    let lastString = strs[strs.length - 1]
    let maxLength = Math.min(prefix.length, lastString.length);

    for (let i = 0; i < maxLength; i++) {
        if (prefix[i] !== lastString[i]) {
            return prefix.substring(0,i)
        }
    }

    return prefix.substring(0,maxLength)
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["",""]));





