function isPalindrome(x) {
    if (x < 0) {
        return false;
    } else if (x >= 0 && x <= 9) {
        return true;
    }

    if (x > 0) {
        let remain;
        let reverseNum;
        let number = 0;
        for (num = x; num > 0; num) {
            remain = num % 10;
            num = Math.floor(num/10);
            reverseNum = number*10 + remain;
            number = reverseNum;
        }
        return x == reverseNum;
    }
}

// console.log(isPalindrome(121));
// console.log(isPalindrome(0));

function isPalindromeString(x) {
    if (x < 0 || x % 10 == 0 && x != 0) {
        return false
    } else if (x >= 0 && x < 10) {
        return true
    }

    if (x > 10) {
        let string = x.toString();
        let splitString = [...string];
        let reverseArray = [];
        for (i = 0; i < splitString.length; i++) {
            reverseArray[(splitString.length) - 1 - i] = splitString[i];
        }
        return string == reverseArray.join(""); 
    }
}

// console.log(isPalindromeString(121));
// console.log(isPalindromeString(0));
// console.log(isPalindromeString(123));
// console.log(isPalindromeString(10));

function isPalindromeStringFaster(x) {
    let string = x.toString();
    for (i = 0; i < string.length; i++) {
        if (string[i] != string[string.length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(isPalindromeStringFaster(121));
console.log(isPalindromeStringFaster(0));
console.log(isPalindromeStringFaster(123));
console.log(isPalindromeStringFaster(10));