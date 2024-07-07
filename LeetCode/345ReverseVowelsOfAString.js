function reverseVowels(s) {
    s = s.split("");
    let vowels = "aeiouAEIOU";
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (vowels.includes(s[left]) && vowels.includes(s[right])) {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        } else if (!vowels.includes(s[left])) {
            left++;
        } else if (!vowels.includes(s[right])) {
            right--;
        }
    }

    return s.join("");
}

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("race car"));
console.log(reverseVowels("l"));
console.log(reverseVowels("e"));