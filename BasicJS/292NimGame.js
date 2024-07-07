function canWinNim(n) {
    if (n <= 3) {
        return true;
    }

    return n % 4 != 0;
}

console.log(canWinNim(4));
console.log(canWinNim(1));
console.log(canWinNim(2));