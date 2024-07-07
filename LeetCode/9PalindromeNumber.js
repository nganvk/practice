function isPalindrome(x) {
    x = x.toString();

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== x[x.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function isPalindrome(x) {
    if (x < 0) {
        return false;
    } else {
        let reversedNum = 0, remain = x;

        while (remain > 0) {
            reversedNum = (reversedNum * 10) + (remain % 10);
            remain = Math.floor(remain / 10);
        }

        return reversedNum === x;
    }
}

console.log(isPalindrome(121)); //true
console.log(isPalindrome(-121)); //false
console.log(isPalindrome(10)); //false
console.log(isPalindrome(0)); //true

