function isIsomorphic(s, t) {
    let map = new Map();
    let set = new Set();

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i]) && !set.has(t[i])) {
            map.set(s[i], t[i]);
            set.add(t[i]);
        } else if (!map.has(s[i]) && set.has(t[i]) || map.get(s[i]) !== t[i]) {
            return false;
        }
    }

    return true;
}

function isIsomorphic_optimized(s, t) {
    let mapS = new Array(256).fill(0);
    let mapT = new Array(256).fill(0);

    for (let i = 0; i < s.length; i++) {
        if (mapS[s.charCodeAt(i)] !== mapT[t.charCodeAt(i)]) {
            return false;
        }

        mapS[s.charCodeAt(i)] = i + 1;
        mapT[t.charCodeAt(i)] = i + 1;
    }

    return true;
}

console.log(isIsomorphic("egg", "add")); //true
console.log(isIsomorphic("foo", "bar")); //false
console.log(isIsomorphic("paper", "title")); //true
console.log(isIsomorphic("ega", "add")); //false
console.log(isIsomorphic("badc", "baba")); //false

console.log(isIsomorphic_optimized("egg", "add")); //true
console.log(isIsomorphic_optimized("foo", "bar")); //false
console.log(isIsomorphic_optimized("paper", "title")); //true
console.log(isIsomorphic_optimized("ega", "add")); //false
console.log(isIsomorphic_optimized("badc", "baba")); //false