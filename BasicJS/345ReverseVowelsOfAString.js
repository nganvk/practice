function reverseVowels(s) {
    let vowels = "aeiouAEIOU";
    let arr = s.split("");
    let idx = [];

    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) idx.push(i);
    }

    let left = 0; 
    let right = idx.length - 1;

    while (left < right) {
        let temp = arr[idx[left]];
        arr[idx[left]] = arr[idx[right]];
        arr[idx[right]] = temp;
        left++;
        right--;
    }

    return arr.join("");
}

function reverseVowels_optimized(s) {
    let vowels = "aeiouAEIOU";
    let arr = s.split("");
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (vowels.includes(arr[left]) && vowels.includes(arr[right])) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        } else if (!vowels.includes(arr[left])) {
            left++;
        } else if (!vowels.includes(arr[right])) {
            right--;
        }
    }

    return arr.join("")
}

console.log(reverseVowels_optimized("hello"));
console.log(reverseVowels_optimized("leetcode"));
console.log(reverseVowels_optimized("race car"));
console.log(reverseVowels_optimized("l"));
console.log(reverseVowels_optimized("e"));