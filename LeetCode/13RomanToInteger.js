function romanToInt(s) {
    let map = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    let number = map[s[0]];

    for (let i = 1; i < s.length; i++) {
        let curr = map[s[i]];
        let prev = map[s[i - 1]];

        if (curr <= prev) {
            number = number + curr;
        } else {
            number = number + curr - (prev * 2);
        }
    }

    return number;
}

console.log(romanToInt("III")) //3
console.log(romanToInt("LVIII")) //58
console.log(romanToInt("MCMXCIV")) //1994
console.log(romanToInt("M")) //1000