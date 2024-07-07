function firstUniqChar(s) {
    if (s.length === 1) return 0;
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) map.set(s[i], [1, i]);
        else map.set(s[i], map.get(s[i])[0] + 1);
    }

    for ([key, value] of map) {
        if (value[0] === 1) return value[1];
    }

    return -1;
}

function firtUniqChar_optimized(s) {
    let arr = new Array(256).fill(0);

    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i)]++;
    }

    for (let i = 0; i < s.length; i++) {
        if (arr[s.charCodeAt(i)] === 1) return i;
    }

    return -1;
}

console.log(firtUniqChar_optimized("leetcode")); //0
console.log(firtUniqChar_optimized("loveleetcode")); //2
console.log(firtUniqChar_optimized("aabb")); //-1
console.log(firtUniqChar_optimized("a")); //0