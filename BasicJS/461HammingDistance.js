function hammingDistance(x, y) {
    let difference = x ^ y;
    // let difference_s = difference.toString(2);
    let  hammingDistance = 0;

    while (difference !== 0) {
        difference = difference & (difference - 1);
        hammingDistance++;
    }

    return hammingDistance;
}

console.log(hammingDistance(1, 4));
console.log(hammingDistance(3, 1));
console.log(hammingDistance(0, 1));
console.log(hammingDistance(1, 2147483647));