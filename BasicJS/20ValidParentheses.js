function isValid(s) {
    let map = {
        ")" : "(",
        "}" : "{",
        "]" : "[",
    }

    let arr = [];

    if (s.length === 1) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            arr.push(s[i]);
        } else if (arr.length === 0 || arr.pop() !== map[s[i]]) {
            return false;
        }
    }

    if (arr.length === 0) {
        return true;
    } else {
        return false;
    }
}

function isValid_FasterApproach(s) {
    let map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    let arr = [];

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            arr.push(map[s[i]]);
        } else if (arr.length === 0 || s[i] !== arr.pop()) {
            return false;
        }
    }

    if (arr.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isValid_FasterApproach("()")); //true
console.log(isValid_FasterApproach("()[]{}")); //true
console.log(isValid_FasterApproach("(]")); //false
console.log(isValid_FasterApproach("(){}}{")); //false
console.log(isValid_FasterApproach("(){}}{")); // false
console.log(isValid_FasterApproach("(")); // false
console.log(isValid_FasterApproach(")")); // false
console.log(isValid_FasterApproach("({[")); // false
console.log(isValid_FasterApproach(")}]")); // false
console.log(isValid_FasterApproach("({[]})")); // true