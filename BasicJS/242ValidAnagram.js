function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let mapS = new Map(), mapT = new Map()

    for (let i = 0; i < s.length; i++) {
        if (mapS.has(s[i])) {
            mapS.set(s[i], mapS.get(s[i]) + 1);
        } else {
            mapS.set(s[i], 1);
        }

        if (mapT.has(t[i])) {
            mapT.set(t[i], mapT.get(t[i]) + 1);
        } else {
            mapT.set(t[i], 1);
        }
    }

    for (let [key, value] of mapS) {
        if (!mapT.has(key) || (mapT.get(key) !== value)) {
            return false;
        }
    }

    return true;
}

function isAnagram_optimized(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let map = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        map[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        map[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (let i = 0; i < 26; i++) {
        if (map[i] !== 0) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram_optimized("anagram", "nagaram"));
console.log(isAnagram_optimized("rat", "car"));
console.log(isAnagram_optimized("rat", "ca"));