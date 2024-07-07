function isValid(s) {
    let map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    if (s.length === 1 || !map[s[0]]) return false;

    let arr = [];

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            arr.push(map[s[i]]);
        } else if (arr.length === 0 || arr.pop() !== s[i]) {
            return false;
        }
    }

    return arr.length === 0;

}
console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("({[]})")); // true
console.log(isValid("(]")); //false
console.log(isValid("(){}}{")); //false
console.log(isValid("(){}}{")); // false
console.log(isValid("(")); // false
console.log(isValid(")")); // false
console.log(isValid("({[")); // false
console.log(isValid(")}]")); // false
