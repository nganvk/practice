function reverseString(s) {
    let n = s.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        let temp = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = temp;
    }
}

let s = ["h","e","l","l","o"];
reverseString(s);
console.log(s);