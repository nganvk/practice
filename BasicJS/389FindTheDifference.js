function findTheDifference(s, t) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) map.set(s[i], 1);
        else map.set(s[i], map.get(s[i]) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i]) || map.get(t[i]) === 0) return t[i];
        map.set(t[i], map.get(t[i]) - 1);
    }
}

function findTheDifference_optimized(s, t) {
    let arr = new Array(256).fill(0);

    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i)]++;
    }

    for (let i = 0; i < t.length; i++) {
        if (arr[t.charCodeAt(i)] === 0) return t[i];
        arr[t.charCodeAt(i)]--;
    }
}

function findTheDifference_optimized_2(s, t) {
    let addedChar = 0;

    for (let i = 0; i < s.length; i++) {
        addedChar = addedChar + t.charCodeAt(i) - s.charCodeAt(i);
    }

    addedChar = addedChar + t.charCodeAt(t.length - 1);
    return String.fromCharCode(addedChar);
}

console.log(findTheDifference_optimized_2("abcd", "abcde"));
console.log(findTheDifference_optimized_2("", "y"));
console.log(findTheDifference_optimized_2("a", "aa"));