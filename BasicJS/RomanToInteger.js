function romanToInt(s) {
    let roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    let int = roman[s[0]];
    for (let i = 1; i < s.length; i++) {
        if (roman[s[i]] <= roman[s[i - 1]]) {
            int = int + roman[s[i]];
        } else {
            int = int - (roman[s[i - 1]] * 2) + roman[s[i]];
        }
    } 
    return int;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

